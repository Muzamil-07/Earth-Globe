import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface LatLon {
  lat: number;
  lon: number;
}

interface LightDot {
  core: THREE.Sprite;
  glow1: THREE.Sprite | null;
  glow2: THREE.Sprite | null;
  coreMaterial: THREE.SpriteMaterial;
  glowMaterial1: THREE.SpriteMaterial | null;
  glowMaterial2: THREE.SpriteMaterial | null;
  offset: number;
}

interface ConnectionData {
  line: THREE.Line;
  glowLine1: THREE.Line;
  glowLine2: THREE.Line;
  glowLine3: THREE.Line;
  lightDots: LightDot[];
  curve: {
    getPoint: (t: number) => THREE.Vector3;
  };
  points: THREE.Vector3[];
  startTime: number;
  duration: number;
  material: THREE.LineBasicMaterial;
  glowMaterial1: THREE.LineBasicMaterial;
  glowMaterial2: THREE.LineBasicMaterial;
  glowMaterial3: THREE.LineBasicMaterial;
  animationProgress: number;
  emergenceComplete: boolean;
  isRemoving: boolean;
  removalStartTime: number;
  isPermanent: boolean; // Flag for permanent connections that should never disappear
}

const EarthGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Scene objects
  const earthRef = useRef<THREE.Mesh | null>(null);
  const atmosphereRef = useRef<THREE.Mesh | null>(null);
  const starsRef = useRef<THREE.Group | null>(null);
  const movingStarsRef = useRef<THREE.Points | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const connectionsRef = useRef<ConnectionData[]>([]);
  const earthGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef<boolean>(false);

  // Mobile responsive state
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Refs for camera animation - using ref instead of state for scroll progress
  const scrollProgressRef = useRef<number>(0);
  const initialCameraRotation = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });
  const targetCameraRotation = useRef<{ x: number; y: number; z: number }>({ x: -Math.PI / 3, y: 0, z: 0 }); // Looking down (negative rotation)

  // Dynamic Earth radius based on screen size
  const getEarthRadius = (): number => {
    if (isSmallMobile) {
      return 0.8; // Smallest radius for small mobile devices
    } else if (isMobile) {
      return 1.0; // Smaller radius for mobile
    } else if (isTablet) {
      return 1.2; // Medium radius for tablet
    } else {
      return 1.4; // Full radius for desktop
    }
  };

  const EARTH_RADIUS = getEarthRadius(); // Earth sphere radius

  // Check device type and screen size
  const checkDeviceType = () => {
    const width = window.innerWidth;

    setIsSmallMobile(width < 468);
    setIsMobile(width >= 468 && width < 768);
    setIsTablet(width >= 768 && width < 1024);
  };

  useEffect(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  // Internal scroll progress listener for camera animation
  useEffect(() => {
    const handleScrollProgress = () => {
      // Read scroll progress from CSS variable set by parent component
      const scrollProgressVar = getComputedStyle(document.documentElement)
        .getPropertyValue('--scroll-progress');
      
      const progress = scrollProgressVar ? parseFloat(scrollProgressVar) : 0;
      
      console.log('🔄 INTERNAL SCROLL UPDATE:', { 
        progress: progress.toFixed(3), 
        scrollProgressVar
      });
      
      scrollProgressRef.current = progress;
    };

    // Call once on mount to set initial state
    console.log('🚀 Setting up internal scroll listener');
    handleScrollProgress();
    
    // Listen for changes to the CSS variable
    const observer = new MutationObserver(handleScrollProgress);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });
    
    console.log('📝 Internal scroll listener added');
    
    return () => {
      observer.disconnect();
      console.log('🗑️ Internal scroll listener removed');
    };
  }, []);

  // Smooth camera animation based on scroll
  const updateCameraRotation = () => {
    if (!cameraRef.current) return;

    const scrollProgress = scrollProgressRef.current;

    // Slower easing function for more gradual animation
    const easeInOutCubic = (t: number): number => {
      // Apply a power function to slow down the animation curve
      const slowedT = Math.pow(t, 2.5); // Higher power = slower animation
      return slowedT < 0.5 ? 2 * slowedT * slowedT : 1 - Math.pow(-2 * slowedT + 2, 2) / 2;
    };

    const easedProgress = easeInOutCubic(scrollProgress);
    
    // Interpolate camera rotation from 0 to negative value (looking down)
    const currentRotationX = initialCameraRotation.current.x + 
      (targetCameraRotation.current.x - initialCameraRotation.current.x) * easedProgress;
    
    // Only log when there's scroll progress to avoid spam
    if (scrollProgress > 0.01) {
      console.log('🎥 Camera animating:', {
        scrollProgress: scrollProgress.toFixed(3),
        easedProgress: easedProgress.toFixed(3),
        currentRotationX: currentRotationX.toFixed(3)
      });
    }
    
    cameraRef.current.rotation.x = currentRotationX;
    
    // Device-specific camera Z positions
    let initialZ = 2.5; // Default for desktop
    let targetZ = 3.5;
    
    if (isSmallMobile) {
      initialZ = 3.2;
      targetZ = 4.2;
    } else if (isMobile) {
      initialZ = 3.0;
      targetZ = 4.0;
    } else if (isTablet) {
      initialZ = 2.8;
      targetZ = 3.8;
    }
    
    // Always adjust Z position based on scroll progress
    const currentZ = initialZ + (targetZ - initialZ) * easedProgress;
    cameraRef.current.position.z = currentZ;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize the scene
    init();

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      // Cleanup moving stars
      if (movingStarsRef.current && sceneRef.current) {
        sceneRef.current.remove(movingStarsRef.current);
        movingStarsRef.current.geometry.dispose();
        if (movingStarsRef.current.material instanceof THREE.Material) {
          movingStarsRef.current.material.dispose();
        }
      }
      // Cleanup event listeners
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, [isMobile, isTablet, isSmallMobile]);

  const init = (): void => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Responsive camera settings
    const aspectRatio = window.innerWidth / window.innerHeight;
    let fov = 75;
    let cameraZ = 2.5;

    if (isSmallMobile) {
      fov = 55; // Narrowest FOV for small mobile
      cameraZ = 3.2; // Furthest back for small mobile
    } else if (isMobile) {
      fov = 60; // Narrower FOV for mobile
      cameraZ = 3.0; // Further back for mobile
    } else if (isTablet) {
      fov = 70;
      cameraZ = 2.8;
    }

    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = cameraZ;

    // Store initial camera rotation for smooth animation
    initialCameraRotation.current = { x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z };

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && !isSmallMobile, // Disable antialiasing on mobile for performance
      alpha: false,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Solid black background
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    renderer.domElement.style.pointerEvents = 'auto'; // Enable pointer events on canvas

    // Set pixel ratio for mobile performance
    if (isMobile || isSmallMobile) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } else {
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    containerRef.current!.appendChild(renderer.domElement);

    // Create Earth group for rotation with responsive positioning
    const earthGroup = new THREE.Group();

    // Adjust Y position based on screen size
    let earthYPosition = 0; // Default for desktop
    if (isSmallMobile) {
      earthYPosition = 0.00; // Move up for small mobile
    } else if (isMobile) {
      earthYPosition = 0.1; // Move up slightly for mobile
    } else if (isTablet) {
      earthYPosition = -0.1; // Slightly up for tablet
    }

    earthGroup.position.y = earthYPosition;

    // Start with full scale - no pop-out animation
    earthGroup.scale.setScalar(0.9);

    earthGroupRef.current = earthGroup;
    scene.add(earthGroup);

    // Create stars background
    createStarField();

    // Create Earth
    createEarth();

    // Create atmosphere
    createAtmosphere();

    // Event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchstart', onTouchStart);

    // Start animation
    animate();

    // Create permanent connection patches immediately
    createDefaultConnections();
  };

  //   const earth_texture = '/earth_nightmap.jpg';
  const earth_texture = '/earth_night_2.png';
  const earth_normal_map = '/2k_earth_normal_map_2.png'
  const roughness_map = '/2k_earth_specular_map_2.png'

  const createMovingStars = (): void => {
    // Only create moving stars for desktop view
    if (isMobile || isTablet || isSmallMobile) {
      return;
    }

    console.log('Creating moving stars for desktop view');

    // Generate random positions in a sphere around the scene
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    
    // Create sphere distribution similar to your original design
    for (let i = 0; i < starCount; i++) {
      const radius = 1.2 + Math.random() * 0.3; // Sphere radius 1.2-1.5
      
      // Generate random point on sphere
      const theta = Math.random() * Math.PI * 2; // azimuth
      const phi = Math.acos(2 * Math.random() - 1); // elevation
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x * 100; // Scale up to match scene scale
      positions[i * 3 + 1] = y * 100;
      positions[i * 3 + 2] = z * 100;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White color
      size: 0.2, // Small size (equivalent to 0.002 scaled up)
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      opacity: 0.8
    });

    const movingStars = new THREE.Points(starGeometry, starMaterial);
    
    // Apply initial rotation similar to your design
    movingStars.rotation.z = Math.PI / 4;
    
    movingStarsRef.current = movingStars;
    sceneRef.current!.add(movingStars);

    console.log('Moving stars created successfully');
  };

  const createStarField = (): void => {
    // Create HDRI panoramic background using the galaxy image
    const starGroup = new THREE.Group();

    // Create a large sphere with higher resolution for better HDRI quality
    const sphereGeometry = new THREE.SphereGeometry(500, 64, 32);

    // Load the galaxy HDRI texture
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      '/8k_stars_milky_way.jpg',
      // onLoad callback
      (texture: THREE.Texture) => {
        console.log('Galaxy HDRI texture loaded successfully');

        // Configure the texture for proper HDRI/equirectangular mapping
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        // Create material for the background sphere optimized for HDRI
        const sphereMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.BackSide, // Render inside faces so we see it from within
          transparent: false,
          fog: false // Disable fog for background
        });

        const backgroundSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        starGroup.add(backgroundSphere);

        console.log('Galaxy HDRI background sphere created successfully');
      },
      // onProgress callback
      (progress: ProgressEvent<EventTarget>) => {
        console.log('Loading galaxy HDRI texture progress:', progress);
      },
      // onError callback
      (error: unknown) => {
        console.warn('Could not load galaxy HDRI texture:', error);
        console.log('Creating fallback star field');

        // Fallback to a simpler star field if HDRI fails to load
        const fallbackMaterial = new THREE.MeshBasicMaterial({
          color: 0x000011,
          side: THREE.BackSide
        });

        const fallbackSphere = new THREE.Mesh(sphereGeometry, fallbackMaterial);
        starGroup.add(fallbackSphere);

        // Add some basic point stars as fallback
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 800;     // x
          positions[i + 1] = (Math.random() - 0.5) * 800; // y  
          positions[i + 2] = (Math.random() - 0.5) * 800; // z
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const starMaterial = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 2,
          transparent: true,
          opacity: 0.8
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        starGroup.add(stars);
      }
    );

    starsRef.current = starGroup;
    sceneRef.current!.add(starGroup);

    // Create moving stars for desktop only
    createMovingStars();
  };

  const createEarth = (): void => {
    // Reduce geometry complexity on mobile for better performance
    const segments = isSmallMobile ? 48 : isMobile ? 64 : 128;
    const earthRadius = getEarthRadius();
    const geometry = new THREE.SphereGeometry(earthRadius, segments, segments);

    // Load the Earth night map texture
    const textureLoader = new THREE.TextureLoader();

    // Create the earth mesh with enhanced material for normal mapping
    const material = new THREE.MeshPhongMaterial({
      color: 0x001122,
      emissive: 0x001122,
      emissiveIntensity: 0.3,
      shininess: 25,
      specular: 0x222222
    });

    const earth = new THREE.Mesh(geometry, material);
    earthRef.current = earth;
    earthGroupRef.current!.add(earth);

    // Try to load the actual Earth night map texture
    textureLoader.load(
      earth_texture,
      // onLoad callback
      (texture: THREE.Texture) => {
        console.log('Earth night map texture loaded successfully');

        // Configure the texture without repetition
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.repeat.set(1, 1);
        texture.flipY = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        // Update the material with the loaded texture
        material.map = texture;
        material.color.setHex(0xffffff); // Set to white to show texture properly
        material.emissive.setHex(0x001122);
        material.emissiveIntensity = 0.3;
        material.needsUpdate = true;

        // Load normal map for surface detailing
        textureLoader.load(
          earth_normal_map,
          (normalTexture: THREE.Texture) => {
            console.log('Earth normal map loaded successfully');

             // Configure the normal map texture without repetition
             normalTexture.wrapS = THREE.ClampToEdgeWrapping;
             normalTexture.wrapT = THREE.ClampToEdgeWrapping;
             normalTexture.repeat.set(1, 1);
             normalTexture.flipY = false;
            normalTexture.minFilter = THREE.LinearFilter;
            normalTexture.magFilter = THREE.LinearFilter;

            // Apply normal map to material
            material.normalMap = normalTexture;
            material.normalScale.set(0.8, 0.8); // Adjust intensity for visible detail
            material.needsUpdate = true;

            console.log('Normal map applied to Earth material');
          },
          undefined,
          (error: unknown) => {
            console.warn('Could not load Earth normal map:', error);
          }
        );

        // Load roughness/specular map for metalness and surface properties
        textureLoader.load(
          roughness_map,
          (roughnessTexture: THREE.Texture) => {
            console.log('Earth roughness/specular map loaded successfully');

             // Configure the roughness/specular map texture without repetition
             roughnessTexture.wrapS = THREE.ClampToEdgeWrapping;
             roughnessTexture.wrapT = THREE.ClampToEdgeWrapping;
             roughnessTexture.repeat.set(1, 1);
             roughnessTexture.flipY = false;
            roughnessTexture.minFilter = THREE.LinearFilter;
            roughnessTexture.magFilter = THREE.LinearFilter;

            // Apply roughness map as specular map for surface variation
            // Note: MeshPhongMaterial doesn't have metalness properties
            // Using specular properties instead
            material.specularMap = roughnessTexture;
            material.shininess = 30; // Increase shininess for more reflective surface
            material.needsUpdate = true;

            console.log('Roughness/metalness map applied to Earth material');
          },
          undefined,
          (error: unknown) => {
            console.warn('Could not load Earth roughness/specular map:', error);
          }
        );

        console.log('Diffuse texture applied to Earth material');
      },
      // onProgress callback
      (progress: ProgressEvent<EventTarget>) => {
        console.log('Loading Earth texture progress:', progress);
      },
      // onError callback
      (error: unknown) => {
        console.warn('Could not load Earth night map texture:', error);
        console.log('Creating fallback procedural texture');

        // Create fallback procedural texture
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d')!;

        // Create night side with city lights
        const gradient = ctx.createRadialGradient(1024, 512, 0, 1024, 512, 1024);
        gradient.addColorStop(0, '#001122');
        gradient.addColorStop(0.7, '#000811');
        gradient.addColorStop(1, '#000000');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 2048, 1024);

        // Add continents with more realistic shapes
        ctx.fillStyle = '#0a2f1a';

        // North America
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.bezierCurveTo(300, 150, 450, 180, 400, 300);
        ctx.bezierCurveTo(350, 350, 250, 320, 200, 280);
        ctx.closePath();
        ctx.fill();

        // Europe
        ctx.fillRect(900, 180, 150, 100);

        // Asia
        ctx.beginPath();
        ctx.moveTo(1100, 150);
        ctx.bezierCurveTo(1400, 120, 1600, 200, 1500, 350);
        ctx.bezierCurveTo(1200, 300, 1050, 250, 1100, 150);
        ctx.closePath();
        ctx.fill();

        // Africa
        ctx.beginPath();
        ctx.moveTo(950, 300);
        ctx.bezierCurveTo(1050, 280, 1100, 400, 1000, 600);
        ctx.bezierCurveTo(950, 650, 900, 500, 950, 300);
        ctx.closePath();
        ctx.fill();

        // Australia
        ctx.fillRect(1400, 600, 120, 80);

        // South America
        ctx.beginPath();
        ctx.moveTo(400, 450);
        ctx.bezierCurveTo(500, 430, 520, 600, 450, 800);
        ctx.bezierCurveTo(400, 750, 350, 500, 400, 450);
        ctx.closePath();
        ctx.fill();

        // Add city lights (small bright dots)
        ctx.fillStyle = '#ffdd44';
        for (let i = 0; i < 500; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 1024;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }

        // Add brighter city clusters
        ctx.fillStyle = '#ffffff';
        const cities: [number, number][] = [
          [300, 250], [900, 200], [1200, 200], [1000, 400], [450, 500]
        ];
        cities.forEach(([x, y]) => {
          for (let i = 0; i < 20; i++) {
            const offsetX = (Math.random() - 0.5) * 40;
            const offsetY = (Math.random() - 0.5) * 20;
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        const fallbackTexture = new THREE.CanvasTexture(canvas);
        fallbackTexture.wrapS = THREE.ClampToEdgeWrapping;
        fallbackTexture.wrapT = THREE.ClampToEdgeWrapping;
        fallbackTexture.repeat.set(1, 1);
        material.map = fallbackTexture;
        material.color.setHex(0xffffff);
        material.needsUpdate = true;
      }
    );

    // Enhanced lighting for metallic surface illumination
    const ambientLight = new THREE.AmbientLight(0x606060, 0.5);
    sceneRef.current!.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
    directionalLight.position.set(-1, 0.5, 1);
    sceneRef.current!.add(directionalLight);

    // // Add additional fill light for better surface detail visibility
    // const fillLight = new THREE.DirectionalLight(0x87CEEB, 0.5);
    // fillLight.position.set(1, -0.3, -0.5);
    // sceneRef.current!.add(fillLight);

    // Add rim light for dramatic metallic effect
    const rimLight = new THREE.DirectionalLight(0xadd8e6, 0.4);
    rimLight.position.set(0.5, 1, -0.5);
    sceneRef.current!.add(rimLight);
  };

  const createAtmosphere = (): void => {
    // Reduce atmosphere geometry complexity on mobile
    const segments = isSmallMobile ? 24 : isMobile ? 32 : 64;
    const earthRadius = getEarthRadius();
    const geometry = new THREE.SphereGeometry(earthRadius + 0.02, segments, segments);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const atmosphere = new THREE.Mesh(geometry, material);
    atmosphereRef.current = atmosphere;
    earthGroupRef.current!.add(atmosphere);
  };

  const latLonToVector3 = (lat: number, lon: number, radius?: number): THREE.Vector3 => {
    const earthRadius = radius || getEarthRadius();
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(earthRadius * Math.sin(phi) * Math.cos(theta));
    const z = (earthRadius * Math.sin(phi) * Math.sin(theta));
    const y = (earthRadius * Math.cos(phi));

    return new THREE.Vector3(x, y, z);
  };

  const vector3ToLatLon = (vector: THREE.Vector3): LatLon => {
    const normalizedVector = vector.clone().normalize();
    const lat = 90 - (Math.acos(normalizedVector.y) * 180) / Math.PI;
    const lon = ((270 + (Math.atan2(normalizedVector.x, normalizedVector.z) * 180) / Math.PI) % 360) - 180;
    return { lat, lon };
  };


  // New function specifically for short hover network lines
// New function specifically for short hover network lines
const generateShortHoverTargets = (hoverLatLon: LatLon): LatLon[] => {
  // Get the hover point in 3D space
  const earthRadius = getEarthRadius();
  const centerPos = latLonToVector3(hoverLatLon.lat, hoverLatLon.lon, earthRadius);

  // Generate points around the center in 3D space to maintain consistent distances
  const connectionCount = 70;

  // Create a local coordinate system around the hover point
  const up = centerPos.clone().normalize();
  const north = new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(up, north).normalize();
  const forward = new THREE.Vector3().crossVectors(right, up).normalize();

  // If the hover point is near the poles, adjust the coordinate system
  if (Math.abs(up.dot(north)) > 0.99) {
    right.set(1, 0, 0);
    forward.crossVectors(right, up).normalize();
    right.crossVectors(up, forward).normalize();
  }

  // Generate target points with their distances
  const targetsWithDistance: Array<{ latLon: LatLon; distance: number }> = [];

  for (let i = 0; i < connectionCount; i++) {
    // Generate points in a circle around the hover point with some randomness
    const angle = (i / connectionCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 0.15 + Math.random() * 0.25; // Distance in 3D space (not degrees)

    // Add some vertical spread
    const verticalOffset = (Math.random() - 0.5) * 0.1;

    // Calculate the offset in 3D space
    const offsetX = Math.cos(angle) * distance;
    const offsetZ = Math.sin(angle) * distance;

    // Apply the offset using our local coordinate system
    const targetPos = centerPos.clone()
      .add(right.clone().multiplyScalar(offsetX))
      .add(forward.clone().multiplyScalar(offsetZ))
      .add(up.clone().multiplyScalar(verticalOffset));

    // Normalize to keep on Earth's surface
    targetPos.normalize().multiplyScalar(earthRadius);

    // Convert back to lat/lon
    const targetLatLon = vector3ToLatLon(targetPos);
    
    // Calculate 3D distance from hover point to target
    const targetDistance = centerPos.distanceTo(targetPos);
    
    targetsWithDistance.push({ 
      latLon: targetLatLon, 
      distance: targetDistance 
    });
  }

  // Sort by distance (shortest first) and extract just the LatLon objects
  targetsWithDistance.sort((a, b) => a.distance - b.distance);
  const sortedTargets = targetsWithDistance.map(item => item.latLon);

  console.log('generateShortHoverTargets', hoverLatLon, 'generated', sortedTargets.length, 'targets (sorted by distance)');
  return sortedTargets;
};

  // Create dispersed connection lines with proper spacing between origins and randomized shapes
  const generateShortSourcePoints = (
    centerLatLon: LatLon, 
    count: number = 12, 
    maxDistance: number = 40,
    shapeType: 'circular' | 'elliptical' | 'clustered' | 'spiral' | 'linear' | 'arc' | 'scattered' | 'random' = 'random'
  ): LatLon[] => {
    const sources: LatLon[] = [];
    const minDistanceBetweenPoints = 6; // Reduced minimum distance for more variety

    // Expanded shape options for much more variety
    const shapes = ['circular', 'elliptical', 'clustered', 'spiral', 'linear', 'arc', 'scattered'] as const;
    const selectedShape = shapeType === 'random' ? shapes[Math.floor(Math.random() * shapes.length)] : shapeType;

    for (let i = 0; i < count; i++) {
      let lat: number, lon: number;
      let attempts = 0;
      let validPoint = false;

      do {
        let offsetLat: number, offsetLon: number;

        switch (selectedShape) {
          case 'circular': {
            // Actually broken circle - more like random scattered with circular bias
            const baseAngle = (i / count) * Math.PI * 2;
            const angleVariation = (Math.random() - 0.5) * Math.PI; // Large angle variation
            const angle = baseAngle + angleVariation;
            const radius = Math.random() * maxDistance * 0.8; // More random radius
            offsetLat = Math.cos(angle) * radius * (0.3 + Math.random() * 1.4); // Very random
            offsetLon = Math.sin(angle) * radius * (0.3 + Math.random() * 1.4);
            break;
          }

          case 'elliptical': {
            // Extremely stretched ellipse - almost like a line
            const ellipseAngle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 1.5;
            const majorAxis = maxDistance * (1.2 + Math.random() * 0.8); // 120-200% of max
            const minorAxis = majorAxis * (0.05 + Math.random() * 0.2); // 5-25% of major (very thin)
            const rotationAngle = Math.random() * Math.PI * 2;
            
            const ellipseX = Math.cos(ellipseAngle) * majorAxis;
            const ellipseY = Math.sin(ellipseAngle) * minorAxis;
            
            offsetLat = ellipseX * Math.cos(rotationAngle) - ellipseY * Math.sin(rotationAngle);
            offsetLon = ellipseX * Math.sin(rotationAngle) + ellipseY * Math.cos(rotationAngle);
            break;
          }

          case 'clustered': {
            // Create 2-3 very separate, distinct clusters
            const clusterCount = Math.floor(Math.random() * 2) + 2; // 2-3 clusters
            const clusterIndex = Math.floor((i / count) * clusterCount);
            const clusterAngle = (clusterIndex / clusterCount) * Math.PI * 2 + (Math.random() - 0.5) * 1.0;
            const clusterDistance = maxDistance * (0.4 + Math.random() * 0.4); // 40-80% of max
            const clusterSpread = maxDistance * (0.15 + Math.random() * 0.2); // Tight clusters
            
            const clusterCenterLat = Math.cos(clusterAngle) * clusterDistance;
            const clusterCenterLon = Math.sin(clusterAngle) * clusterDistance;
            
            offsetLat = clusterCenterLat + (Math.random() - 0.5) * clusterSpread;
            offsetLon = clusterCenterLon + (Math.random() - 0.5) * clusterSpread;
            break;
          }

          case 'spiral': {
            // Tight spiral - very obvious spiral pattern
            const spiralTightness = 0.8 + Math.random() * 1.0; // Tighter spirals
            const spiralAngle = (i / count) * Math.PI * 6 * spiralTightness; // More rotations
            const spiralRadius = (i / (count - 1)) * maxDistance * 0.9; // Progressive radius
            
            offsetLat = Math.cos(spiralAngle) * spiralRadius;
            offsetLon = Math.sin(spiralAngle) * spiralRadius;
            break;
          }

          case 'linear': {
            // Very obvious straight line formation
            const lineAngle = Math.random() * Math.PI * 2;
            const lineLength = maxDistance * 1.1; // Slightly longer than max
            const positionAlongLine = ((i / (count - 1)) * 2 - 1) * 0.9; // -0.9 to 0.9
            const spread = maxDistance * 0.08; // Very minimal perpendicular spread
            
            const lineX = Math.cos(lineAngle) * positionAlongLine * lineLength;
            const lineY = Math.sin(lineAngle) * positionAlongLine * lineLength;
            
            const perpAngle = lineAngle + Math.PI / 2;
            const perpOffset = (Math.random() - 0.5) * spread;
            
            offsetLat = lineX + Math.cos(perpAngle) * perpOffset;
            offsetLon = lineY + Math.sin(perpAngle) * perpOffset;
            break;
          }

          case 'arc': {
            // Sharp, obvious arc pattern
            const arcStartAngle = Math.random() * Math.PI * 2;
            const arcSpan = Math.PI * 0.3 + Math.random() * Math.PI * 0.4; // 30-70 degree arc (tighter)
            const arcAngle = arcStartAngle + (i / count) * arcSpan;
            const arcRadius = maxDistance * (0.7 + Math.random() * 0.2); // More consistent radius
            const arcThickness = maxDistance * 0.1; // Thinner arc
            
            const baseX = Math.cos(arcAngle) * arcRadius;
            const baseY = Math.sin(arcAngle) * arcRadius;
            
            const thicknessOffset = (Math.random() - 0.5) * arcThickness;
            const normalAngle = arcAngle + Math.PI / 2;
            
            offsetLat = baseX + Math.cos(normalAngle) * thicknessOffset;
            offsetLon = baseY + Math.sin(normalAngle) * thicknessOffset;
            break;
          }

          case 'scattered': {
            // Heavily biased scatter - creates directional "blob"
            const scatterBias = Math.random() * Math.PI * 2;
            const biasStrength = 0.7 + Math.random() * 0.3; // Strong bias (70-100%)
            
            // Base random position - smaller area
            const randLat = (Math.random() - 0.5) * maxDistance * 0.6;
            const randLon = (Math.random() - 0.5) * maxDistance * 0.6;
            
            // Strong directional bias creates an elongated scatter
            const biasLat = Math.cos(scatterBias) * maxDistance * biasStrength;
            const biasLon = Math.sin(scatterBias) * maxDistance * biasStrength;
            
            offsetLat = randLat + biasLat * 0.8;
            offsetLon = randLon + biasLon * 0.8;
            break;
          }

          default: {
            // Fallback to one-sided distribution
            const side = Math.random() < 0.5 ? 1 : -1;
            offsetLat = (Math.random() * side + 0.5 * side) * maxDistance;
            offsetLon = (Math.random() - 0.5) * maxDistance * 0.8;
          }
        }

        lat = centerLatLon.lat + offsetLat;
        lon = centerLatLon.lon + offsetLon;

        // Keep within valid lat/lon bounds
        lat = Math.max(-80, Math.min(80, lat));
        lon = ((lon + 180) % 360) - 180;

        // Check distance from center
        const distanceFromCenter = Math.sqrt(
          Math.pow(lat - centerLatLon.lat, 2) +
          Math.pow(lon - centerLatLon.lon, 2)
        );

        // Check distance from other existing points
        let tooClose = false;
        for (const existingPoint of sources) {
          const distanceFromExisting = Math.sqrt(
            Math.pow(lat - existingPoint.lat, 2) +
            Math.pow(lon - existingPoint.lon, 2)
          );
          if (distanceFromExisting < minDistanceBetweenPoints) {
            tooClose = true;
            break;
          }
        }

        // Point is valid if it's far enough from center and other points
        validPoint = distanceFromCenter >= 8 && !tooClose;
        attempts++;

        // If we can't find a valid point after many attempts, reduce requirements
        if (attempts > 50) {
          validPoint = distanceFromCenter >= 5;
        }

      } while (!validPoint && attempts < 100);

      sources.push({ lat, lon });
    }
    
    console.log(`Generated ${count} points using ${selectedShape} shape pattern`);
    return sources;
  };

  // Create permanent connection patches that are always visible
  const createDefaultConnections = (): void => {
    console.log('Creating 4 permanent connection patches...');

    // Create a set of patches with fixed center points and much shorter line distances
    const patchCenters = [
      // United States patch (around continental US) - use default blue colors
      { lat: 37.5, lon: -96.0, maxDistance: 8 },

      // Other neutral patches with much shorter distances
      { lat: 40.7, lon: -74, maxDistance: 10 },   // New York area
      { lat: 48.8, lon: 2.3, maxDistance: 8 },    // Paris, Europe
      { lat: 35.6, lon: 139.6, maxDistance: 9 },  // Tokyo, Asia
      { lat: 52.5, lon: 13.4, maxDistance: 7 },   // Berlin, Europe
      { lat: 31.2, lon: 121.4, maxDistance: 8 },  // Shanghai, Asia
      { lat: 28.6, lon: 77.2, maxDistance: 9 },   // New Delhi, India
    ] as Array<{ lat: number; lon: number; maxDistance: number; color?: { main: number; glow1: number; glow2: number; glow3: number } }>;

    patchCenters.forEach((center, index) => {
      // Random connection counts for different patches (8-25 lines per patch)
      const connectionCount = Math.floor(Math.random() * 18) + 8; // 8-25 lines
      
      // Randomly choose shape type for each patch from expanded variety
      const shapeTypes = ['circular', 'elliptical', 'clustered', 'spiral', 'linear', 'arc', 'scattered'] as const;
      const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      const sourcePoints = generateShortSourcePoints(center, connectionCount, center?.maxDistance, randomShape);

      console.log(`Creating patch ${index + 1} with ${connectionCount} short connections (${randomShape} shape) converging to center:`, center);

      sourcePoints.forEach((source, sourceIndex) => {
        const startPos = latLonToVector3(source.lat, source.lon);
        const endPos = latLonToVector3(center.lat, center.lon); // All lines converge to center
        const delay = (index * 500) + (sourceIndex * 60); // Staggered appearance

        const connection = createConnectionLine(startPos, endPos, delay, true, center.color); // Mark as permanent, apply color if provided
        connectionsRef.current.push(connection);

        console.log(`Created short line ${sourceIndex + 1} from`, source, 'to center', center);
      });
    });

    console.log(`Total permanent connections created: ${patchCenters.length} patches with randomized line counts (8-25 each) and diverse shapes (circular/elliptical/clustered/spiral/linear/arc/scattered)`);
  };


  console.log("connectionsRef.current", connectionsRef.current)

  const calculateOptimalArcHeight = (startPos: THREE.Vector3, endPos: THREE.Vector3): number => {
    // Calculate the great circle distance
    const earthRadius = getEarthRadius();
    const angle = Math.acos(Math.max(-1, Math.min(1, startPos.dot(endPos) / (earthRadius * earthRadius))));
    const arcDistance = angle * earthRadius;

    // Increase arc heights slightly for a more natural curve above the surface
    let arcHeight: number;

    // For very short distances (within 30 degrees)
    if (angle < Math.PI / 6) {
      arcHeight = 0.02; // Subtle but clearly visible arc
    }
    // Medium distances (30-90 degrees)
    else if (angle < Math.PI / 2) {
      arcHeight = 0.035;
    }
    // Longer distances (90-180 degrees)
    else {
      arcHeight = Math.min(0.06, arcDistance * 0.02);
    }

    return arcHeight;
  };

  type LineColorOptions = { main: number; glow1: number; glow2: number; glow3: number } | undefined;

  const createConnectionLine = (
    startPos: THREE.Vector3,
    endPos: THREE.Vector3,
    delay: number = 0,
    isPermanent: boolean = false,
    colors?: LineColorOptions
  ): ConnectionData => {
    const earthRadius = getEarthRadius();
    // Ensure points are exactly on the surface
    const surfaceStartPos = startPos.clone().normalize().multiplyScalar(earthRadius);
    const surfaceEndPos = endPos.clone().normalize().multiplyScalar(earthRadius);

    // Calculate very low arc height
    const arcHeight = calculateOptimalArcHeight(surfaceStartPos, surfaceEndPos);

    // Create a great circle path with minimal elevation
    const distance = surfaceStartPos.distanceTo(surfaceEndPos);
    // Reduce segments on mobile for better performance
    const baseSegments = isSmallMobile ? 20 : isMobile ? 30 : 50;
    const segments = Math.max(baseSegments, Math.floor(distance * (isSmallMobile ? 30 : isMobile ? 40 : 80))); // Fewer segments on mobile

    const points: THREE.Vector3[] = [];

    // Prepare wavy parameters (disabled to keep hover lines straight)
    const planeNormal = surfaceStartPos.clone().cross(surfaceEndPos).normalize();
    // Wavy effect disabled; no amplitude needed
    const waveAmplitude = 0;
    const waveFrequency = 2 + Math.random() * 2.5; // 2 to 4.5 waves
    const wavePhase = Math.random() * Math.PI * 2;

    // Generate points along a great circle path with slight elevation and optional wavy offset
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;

      // Spherical linear interpolation (slerp) for great circle
      const angle = Math.acos(Math.max(-1, Math.min(1, surfaceStartPos.dot(surfaceEndPos) / (EARTH_RADIUS * EARTH_RADIUS))));

      if (angle < 0.001) {
        // Points are too close, just interpolate linearly
        points.push(surfaceStartPos.clone().lerp(surfaceEndPos, t));
      } else {
        const sinAngle = Math.sin(angle);
        const a = Math.sin((1 - t) * angle) / sinAngle;
        const b = Math.sin(t * angle) / sinAngle;

        const interpolatedPoint = surfaceStartPos.clone().multiplyScalar(a).add(surfaceEndPos.clone().multiplyScalar(b));

        // Add slight elevation based on position along the arc
        const elevationFactor = Math.sin(t * Math.PI); // Peak at midpoint
        const currentRadius = earthRadius + (arcHeight * elevationFactor);

        let finalPoint = interpolatedPoint.normalize().multiplyScalar(currentRadius);

        if (waveAmplitude > 0) {
          const wave = Math.sin((t * Math.PI * 2 * waveFrequency) + wavePhase) * waveAmplitude;
          // Offset out of the great-circle plane, then re-normalize to maintain radius
          const wavyPoint = finalPoint.clone().add(planeNormal.clone().multiplyScalar(wave));
          finalPoint = wavyPoint.normalize().multiplyScalar(currentRadius);
        }

        points.push(finalPoint);
      }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create very thin lines
    const mainColor = colors?.main ?? 0x87CEEB;
    const glowColor1 = colors?.glow1 ?? 0x87CEEB;
    const glowColor2 = colors?.glow2 ?? 0xADD8E6;
    const glowColor3 = colors?.glow3 ?? 0xE0F6FF;

    const material = new THREE.LineBasicMaterial({
      color: mainColor,
      transparent: true,
      opacity: 0,
      linewidth: 0.5 // Very thin main line
    });

    const line = new THREE.Line(geometry, material);

    // Create ultra-minimal glow layers
    const glowMaterial1 = new THREE.LineBasicMaterial({
      color: glowColor1,
      transparent: true,
      opacity: 0,
      linewidth: 1 // Ultra-minimal glow
    });
    const glowLine1 = new THREE.Line(geometry, glowMaterial1);

    const glowMaterial2 = new THREE.LineBasicMaterial({
      color: glowColor2,
      transparent: true,
      opacity: 0,
      linewidth: 1.5 // Very thin outer glow
    });
    const glowLine2 = new THREE.Line(geometry, glowMaterial2);

    const glowMaterial3 = new THREE.LineBasicMaterial({
      color: glowColor3,
      transparent: true,
      opacity: 0,
      linewidth: 2 // Minimal outermost glow
    });
    const glowLine3 = new THREE.Line(geometry, glowMaterial3);

    earthGroupRef.current!.add(line);
    earthGroupRef.current!.add(glowLine1);
    earthGroupRef.current!.add(glowLine2);
    earthGroupRef.current!.add(glowLine3);

    // Create traveling light dots with much smaller size
    const lightDots: LightDot[] = [];
    const particleCount = isSmallMobile ? 1 : isMobile ? 2 : 3; // Fewer particles on mobile for performance

    for (let i = 0; i < particleCount; i++) {
      // Create a very small glowing dot using sprites
      const dotCanvas = document.createElement('canvas');
      dotCanvas.width = 16; // Smaller canvas
      dotCanvas.height = 16;
      const dotCtx = dotCanvas.getContext('2d')!;

      // Create a radial gradient for the dot
      const gradient = dotCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(135, 206, 235, 0.8)');
      gradient.addColorStop(1, 'rgba(135, 206, 235, 0)');

      dotCtx.fillStyle = gradient;
      dotCtx.fillRect(0, 0, 16, 16);

      const dotTexture = new THREE.CanvasTexture(dotCanvas);
      const dotMaterial = new THREE.SpriteMaterial({
        map: dotTexture,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: false
      });

      // Responsive dot scaling based on screen size
      const getDotScale = () => {
        if (isSmallMobile) {
          return 0.002; // Very small dots for small mobile
        } else if (isMobile) {
          return 0.003; // Very small dots for mobile
        } else {
          return 0.004; // Very small dots for desktop
        }
      };



      const dotSprite = new THREE.Sprite(dotMaterial);
      dotSprite.scale.setScalar(getDotScale());
      earthGroupRef.current!.add(dotSprite);

      // No glow effects - simple clean dots only

      lightDots.push({
        core: dotSprite,
        glow1: null, // No glow
        glow2: null, // No glow
        coreMaterial: dotMaterial,
        glowMaterial1: null, // No glow
        glowMaterial2: null, // No glow
        offset: i * 0.2
      });
    }

    // Create a curve object for particle animation
    const curve = {
      getPoint: (t: number): THREE.Vector3 => {
        const index = Math.floor(t * (points.length - 1));
        const nextIndex = Math.min(index + 1, points.length - 1);
        const localT = (t * (points.length - 1)) - index;

        if (index === nextIndex) {
          return points[index].clone();
        }

        return points[index].clone().lerp(points[nextIndex], localT);
      }
    };

    const connectionData: ConnectionData = {
      line,
      glowLine1,
      glowLine2,
      glowLine3,
      lightDots,
      curve,
      points,
      startTime: Date.now() + delay,
             duration: 2500 + Math.random() * 1500,
      material,
      glowMaterial1,
      glowMaterial2,
      glowMaterial3,
      animationProgress: 0,
      emergenceComplete: false,
      isRemoving: false,
      removalStartTime: 0,
      isPermanent
    };

    return connectionData;
  };

  const clearConnections = (): void => {
    connectionsRef.current.forEach(conn => {
      // Never clear permanent connections
      if (!conn.isRemoving && !conn.isPermanent) {
        conn.isRemoving = true;
        conn.removalStartTime = Date.now();
      }
    });
  };

  const removeCompletedConnections = (): void => {
    connectionsRef.current = connectionsRef.current.filter(conn => {
      if (conn.isRemoving) {
        const elapsed = Date.now() - conn.removalStartTime;
        const removalProgress = elapsed / 800;

        if (removalProgress >= 1) {
          earthGroupRef.current!.remove(conn.line);
          earthGroupRef.current!.remove(conn.glowLine1);
          earthGroupRef.current!.remove(conn.glowLine2);
          earthGroupRef.current!.remove(conn.glowLine3);
          conn.lightDots.forEach(dot => {
            earthGroupRef.current!.remove(dot.core);
            if (dot.glow1) earthGroupRef.current!.remove(dot.glow1);
            if (dot.glow2) earthGroupRef.current!.remove(dot.glow2);
          });
          return false;
        }
      }
      return true;
    });
  };

  const onMouseMove = (event: MouseEvent): void => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    handleInteraction(event.clientX, event.clientY);
  };

  const onTouchMove = (event: TouchEvent): void => {
    event.preventDefault();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      mouseRef.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;

      handleInteraction(touch.clientX, touch.clientY);
    }
  };

  const onTouchStart = (event: TouchEvent): void => {
    event.preventDefault();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      mouseRef.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;

      handleInteraction(touch.clientX, touch.clientY);
    }
  };

  // Function to check if mouse is over any interactive UI elements
  const isMouseOverUIElement = (clientX: number, clientY: number): boolean => {
    const element = document.elementFromPoint(clientX, clientY);
    if (!element) return false;
    
    // Check if the element is a button, link, or any interactive element
    const interactiveElements = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
    const tagName = element.tagName.toUpperCase();
    
    // Check if it's a button or link
    if (interactiveElements.includes(tagName)) {
      return true;
    }
    
    // Check if it has cursor pointer style (indicating it's clickable)
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.cursor === 'pointer') {
      return true;
    }
    
    // Check if any parent element is interactive
    let parent = element.parentElement;
    while (parent && parent !== document.body) {
      const parentTag = parent.tagName.toUpperCase();
      if (interactiveElements.includes(parentTag)) {
        return true;
      }
      
      const parentStyle = window.getComputedStyle(parent);
      if (parentStyle.cursor === 'pointer') {
        return true;
      }
      
      // Check for common button/interactive classes
      if (parent.classList.contains('btn') || 
          parent.classList.contains('button') || 
          parent.classList.contains('cursor-pointer') ||
          parent.getAttribute('role') === 'button') {
        return true;
      }
      
      parent = parent.parentElement;
    }
    
    return false;
  };

  const handleInteraction = (clientX: number, clientY: number): void => {
    if (!cameraRef.current || !earthRef.current) return;

    // Check if mouse is over any interactive UI elements
    if (isMouseOverUIElement(clientX, clientY)) {
      isHoveringRef.current = false;
      if (connectionsRef.current.length > 0) {
        clearConnections();
        if (infoRef.current) {
          infoRef.current.innerHTML = `
            ${isMobile || isSmallMobile ? 'Tap' : 'Hover'} anywhere on Earth to create connections spreading outward with tiny traveling light dots<br>
            <small>Lines follow great circle routes with small, consistent-sized glowing particles</small>
          `;
        }
      }
      return;
    }

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObject(earthRef.current);

    if (intersects.length > 0) {
      isHoveringRef.current = true;
      const intersectPoint = intersects[0].point.clone();

      // Transform to local coordinates
      const earthMatrix = new THREE.Matrix4();
      earthMatrix.copy(earthGroupRef.current!.matrixWorld);
      const localPoint = intersectPoint.clone().applyMatrix4(earthMatrix.invert());

      // Ensure the point is exactly on the surface
      const earthRadius = getEarthRadius();
      const surfacePoint = localPoint.normalize().multiplyScalar(earthRadius);

      const sourceLatLon = vector3ToLatLon(surfacePoint);

      clearConnections();

      // Create short network lines on hover (like screenshot 1)
      const hoverConnectionCount = isSmallMobile ? 8 : isMobile ? 12 : 16;
      const hoverTargets = generateShortHoverTargets(sourceLatLon);

      hoverTargets.forEach((target, index) => {
        const targetPos = latLonToVector3(target.lat, target.lon, earthRadius);
        let delay;
        if(index < 20){
           delay = 0; // First 20 lines appear immediately
        } else {
          delay = (index - 20) * 50; // Lines after 20 have staggered delay (reduced from 100 to 50 for faster appearance)
        }
        const connection = createConnectionLine(surfacePoint, targetPos, delay);
        connectionsRef.current.push(connection);
      });

      if (infoRef.current) {
        infoRef.current.innerHTML = `
          Short network at: ${sourceLatLon.lat.toFixed(1)}°, ${sourceLatLon.lon.toFixed(1)}°<br>
          <small>${hoverConnectionCount} short lines creating local network pattern</small>
        `;
      }
    } else {
      isHoveringRef.current = false;
      if (connectionsRef.current.length > 0) {
        clearConnections();
        if (infoRef.current) {
          infoRef.current.innerHTML = `
            ${isMobile || isSmallMobile ? 'Tap' : 'Hover'} anywhere on Earth to create connections spreading outward with tiny traveling light dots<br>
            <small>Lines follow great circle routes with small, consistent-sized glowing particles</small>
          `;
        }
      }
    }
  };

  const updateTravelingLights = (): void => {
    const currentTime = Date.now();

    connectionsRef.current.forEach(conn => {
      if (conn.isRemoving) {
        const removalElapsed = currentTime - conn.removalStartTime;
        const removalProgress = Math.min(removalElapsed / 800, 1);
        const fadeOut = 1 - removalProgress;

        conn.material.opacity *= fadeOut;
        conn.glowMaterial1.opacity *= fadeOut;
        conn.glowMaterial2.opacity *= fadeOut;
        conn.glowMaterial3.opacity *= fadeOut;
        conn.lightDots.forEach(dot => {
          dot.coreMaterial.opacity *= fadeOut;
          if (dot.glowMaterial1) dot.glowMaterial1.opacity *= fadeOut;
          if (dot.glowMaterial2) dot.glowMaterial2.opacity *= fadeOut;
        });
        return;
      }

      const elapsed = currentTime - conn.startTime;

      if (!conn.emergenceComplete && elapsed > 0) {
        const emergenceProgress = Math.min(elapsed / 2000, 1); // Slower emergence for hover lines

        const visiblePoints = Math.floor(conn.points.length * emergenceProgress);
        if (visiblePoints > 1) {
          const visibleGeometry = new THREE.BufferGeometry().setFromPoints(
            conn.points.slice(0, visiblePoints)
          );
          conn.line.geometry = visibleGeometry;
          conn.glowLine1.geometry = visibleGeometry;
          conn.glowLine2.geometry = visibleGeometry;
          conn.glowLine3.geometry = visibleGeometry;
        }

        // Reduced opacity to 35%
        conn.material.opacity = emergenceProgress * 0.35;
        conn.glowMaterial1.opacity = emergenceProgress * 0.245;
        conn.glowMaterial2.opacity = emergenceProgress * 0.175;
        conn.glowMaterial3.opacity = emergenceProgress * 0.105;

        if (emergenceProgress >= 1) {
          conn.emergenceComplete = true;
        }
      }

      if (conn.emergenceComplete) {
        const travelElapsed = elapsed - 2000;

        conn.lightDots.forEach((dot) => {
          const adjustedProgress = ((travelElapsed % conn.duration) / conn.duration + dot.offset) % 1;

          if (adjustedProgress >= 0) {
            const position = conn.curve.getPoint(adjustedProgress);
            dot.core.position.copy(position);
            if (dot.glow1) dot.glow1.position.copy(position);
            if (dot.glow2) dot.glow2.position.copy(position);

            // Fade in and out based on position along path
            const fadeIn = Math.min(1, adjustedProgress * 12);
            const fadeOut = Math.min(1, (1 - adjustedProgress) * 12);
            const visibility = Math.min(fadeIn, fadeOut);

            // Simple clean dots - no glow effects
            dot.coreMaterial.opacity = visibility * 1.0;
          }
        });
      }

      if (conn.emergenceComplete) {
        const breathe = 0.7 + 0.2 * Math.sin(elapsed * 0.004);
        const pulse = 0.8 + 0.1 * Math.sin(elapsed * 0.006);

        // Keep lines visible with 35% opacity
        conn.material.opacity = breathe * 0.35;
        conn.glowMaterial1.opacity = breathe * 0.245;
        conn.glowMaterial2.opacity = pulse * 0.175;
        conn.glowMaterial3.opacity = pulse * 0.105;
      }
    });
  };

  const animate = (): void => {
    animationIdRef.current = requestAnimationFrame(animate);

    // Only rotate Earth if not hovering
    if (earthGroupRef.current && !isHoveringRef.current) {
      earthGroupRef.current.rotation.y += 0.0003 *3;
    }

    // Rotate the galaxy background slowly for immersive effect (only when not hovering)
    if (starsRef.current && !isHoveringRef.current) {
      starsRef.current.rotation.y += 0.0002 *3; // Slower rotation for galaxy background
      starsRef.current.rotation.x += 0.0001; // Slight rotation on X axis for more dynamic movement
    }

    // Animate moving stars (desktop only) with rotation similar to your original design
    if (movingStarsRef.current && !isHoveringRef.current && !isMobile && !isTablet && !isSmallMobile) {
      // Delta time calculation for consistent animation speed
      const delta = 0.016; // Approximate 60fps delta
      
      // Rotate stars much slower for a subtle effect
      movingStarsRef.current.rotation.x -= delta / 20; // Very slow rotation on X axis
      movingStarsRef.current.rotation.y -= delta / 30; // Even slower rotation on Y axis
    }

    updateTravelingLights();
    removeCompletedConnections();
    updateCameraRotation();

    // Ensure permanent connections are always present
    const permanentConnections = connectionsRef.current.filter(conn => conn.isPermanent);
    if (permanentConnections.length === 0) {
      console.log('Recreating permanent connections...');
      createDefaultConnections();
    }

    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const onWindowResize = (): void => {
    if (cameraRef.current && rendererRef.current) {
      // Update device type
      checkDeviceType();

      // Update camera settings based on new screen size
      const aspectRatio = window.innerWidth / window.innerHeight;
      let fov = 75;
      let cameraZ = 2.5;

      if (isSmallMobile) {
        fov = 55;
        cameraZ = 3.2;
      } else if (isMobile) {
        fov = 60;
        cameraZ = 3.0;
      } else if (isTablet) {
        fov = 70;
        cameraZ = 2.8;
      }

      cameraRef.current.fov = fov;
      cameraRef.current.aspect = aspectRatio;
      // Don't override camera position here if scroll animation is active
      if (scrollProgressRef.current === 0) {
        cameraRef.current.position.z = cameraZ;
      }
      cameraRef.current.updateProjectionMatrix();

      // Update initial camera rotation values for responsive design
      initialCameraRotation.current = { x: 0, y: 0, z: 0 };

      // Update renderer
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);

      // Update pixel ratio for mobile performance
      if (isMobile || isSmallMobile) {
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      } else {
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
      }

      // Update Earth position and recreate if needed
      if (earthGroupRef.current) {
        // Update position based on new screen size
        let earthYPosition = -0.3; // Default for desktop
        if (isSmallMobile) {
          earthYPosition = 0.2; // Move up for small mobile
        } else if (isMobile) {
          earthYPosition = 0.1; // Move up slightly for mobile
        } else if (isTablet) {
          earthYPosition = -0.1; // Slightly up for tablet
        }

        earthGroupRef.current.position.y = earthYPosition;

        // Recreate Earth and atmosphere with new radius if needed
        if (earthRef.current) {
          const newRadius = getEarthRadius();
          // Check if we need to recreate based on device type changes
          const shouldRecreate = (isSmallMobile && newRadius !== 0.8) ||
            (isMobile && newRadius !== 1.0) ||
            (isTablet && newRadius !== 1.2) ||
            (!isMobile && !isTablet && !isSmallMobile && newRadius !== 1.4);

          if (shouldRecreate) {
            // Remove old Earth and atmosphere
            earthGroupRef.current.remove(earthRef.current);
            if (atmosphereRef.current) {
              earthGroupRef.current.remove(atmosphereRef.current);
            }

            // Recreate with new radius
            createEarth();
            createAtmosphere();
          }
        }

        // Handle moving stars based on device type changes
        const wasDesktop = movingStarsRef.current !== null;
        const isNowDesktop = !isMobile && !isTablet && !isSmallMobile;

        if (wasDesktop && !isNowDesktop) {
          // Remove moving stars when switching to mobile/tablet
          if (movingStarsRef.current && sceneRef.current) {
            sceneRef.current.remove(movingStarsRef.current);
            movingStarsRef.current.geometry.dispose();
            if (movingStarsRef.current.material instanceof THREE.Material) {
              movingStarsRef.current.material.dispose();
            }
            movingStarsRef.current = null;
            console.log('Moving stars removed for mobile/tablet view');
          }
        } else if (!wasDesktop && isNowDesktop) {
          // Add moving stars when switching to desktop
          createMovingStars();
          console.log('Moving stars added for desktop view');
        }
      }
    }
  };

  return (
    <>
      {/* Three.js canvas container with responsive styling */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 1,
          touchAction: 'none' // Prevent default touch behaviors on mobile
        }}
      />

      {/* Responsive info box - uncomment if needed */}
      {/* <div 
        ref={infoRef}
        className={`absolute text-white z-50 bg-black bg-opacity-70 p-2 rounded-lg border border-white border-opacity-20 pointer-events-none ${
          isMobile 
            ? 'top-2 left-2 right-2 text-xs' 
            : 'top-5 left-5 text-sm p-4'
        }`}
      >
        {isMobile ? 'Tap' : 'Hover'} anywhere on Earth to create connections with tiny traveling light dots<br />
        <small>Lines follow great circle routes with small, consistent-sized glowing particles</small>
      </div> */}
    </>
  );
};

export default EarthGlobe; 