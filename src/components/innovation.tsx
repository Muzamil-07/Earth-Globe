import { useState } from 'react'

import costAndEnergyImg from '@/assets/images/cost.svg'
import modelOwnershipImg from '@/assets/images/model.svg'
import contentCensorshipImg from '@/assets/images/content.svg'

type PointKey = 'cost' | 'ownership' | 'censorship'

const Innovation = () => {
  const [active, setActive] = useState<PointKey>('cost')

  const points: { key: PointKey; title: string; blurb: string }[] = [
    {
      key: 'cost',
      title: 'Cost and energy',
      blurb:
        "AI's complexity excludes non-coders and 3B+ \n people, leaving its potential untapped",
    },
    {
      key: 'ownership',
      title: 'Model ownership',
      blurb:
        "AI's complexity excludes non-coders and 3B+ \n people, leaving its potential untapped",
    },
    {
      key: 'censorship',
      title: 'Content & censorship',
      blurb:
        "AI's complexity excludes non-coders and 3B+ \n people, leaving its potential untapped",
    },
  ]

  const imageByKey: Record<PointKey, string> = {
    cost: costAndEnergyImg,
    ownership: modelOwnershipImg,
    censorship: contentCensorshipImg,
  }

  // Statistical data for overlays
  const statsByKey: Record<PointKey, { 
    primaryStat: { value: string; label: string; color: string }
    secondaryStats: { value: string; label: string; position: string }[]
  }> = {
    cost: {
      primaryStat: { value: '70%', label: 'Cost reduction', color: 'bg-blue-600' },
      secondaryStats: [
        { value: '3.4', label: '', position: 'top-[20%] left-[15%]' },
        { value: '6.6', label: '', position: 'top-[25%] right-[35%]' },
        { value: '3.3', label: '', position: 'top-[30%] right-[10%]' },
        { value: '8.2', label: '', position: 'bottom-[25%] left-[10%]' },
        { value: '10', label: '', position: 'top-[10%] right-[20%]' }
      ]
    },
    ownership: {
      primaryStat: { value: '85%', label: 'Model control', color: 'bg-pink-600' },
      secondaryStats: [
        { value: '4.2', label: '', position: 'top-[15%] left-[20%]' },
        { value: '7.8', label: '', position: 'top-[35%] right-[25%]' },
        { value: '2.1', label: '', position: 'bottom-[30%] left-[15%]' }
      ]
    },
    censorship: {
      primaryStat: { value: '95%', label: 'Content freedom', color: 'bg-green-600' },
      secondaryStats: [
        { value: '9.1', label: '', position: 'top-[25%] left-[25%]' },
        { value: '5.7', label: '', position: 'top-[20%] right-[30%]' },
        { value: '6.3', label: '', position: 'bottom-[35%] right-[15%]' }
      ]
    }
  }

  // Hotspots removed from render for now; keep preset values if re-enabled later

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
       
        {/* Top header content */}
        <div className="mb-8 md:mb-14">
          <h2
            className="text-white font-semibold tracking-[-0.03em] leading-[120%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block align-bottom"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Innovation & breakthroughs
          </h2>
          <p
            className="mt-3 text-white max-w-2xl font-light leading-[150%] tracking-[0] text-sm sm:text-base md:text-lg"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            AI's complexity excludes non-coders and 3B+ people,
            <br className="hidden sm:block" />
            leaving its potential untapped
          </p>
        </div>

        {/* Two-column layout: points left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start mt-6 md:mt-[10rem]">
          <ul className="flex flex-col gap-5 sm:gap-8 md:gap-12">
            {points.map((p) => (
              <li key={p.key} className="max-w-none">
                <button
                  type="button"
                  className="text-left group focus:outline-none w-full transition-all duration-300 ease-in-out hover:transform hover:translate-x-2"
                  onMouseEnter={() => setActive(p.key)}
                  onFocus={() => setActive(p.key)}
                  onClick={() => setActive(p.key)}
                  aria-pressed={active === p.key}
                >
                  <div className={`text-lg sm:text-xl md:text-3xl font-semibold mb-2 transition-all duration-500 ease-in-out ${active === p.key ? 'text-white' : 'text-white/40'}`}>
                    {p.title}
                  </div>
                  <p className={`text-xs sm:text-sm md:text-base whitespace-pre-line transition-all duration-500 ease-in-out ${active === p.key ? 'text-white/80' : 'text-white/40'}`}>
                    {p.blurb}
                  </p>
                  {/* Underline with smooth transition */}
                  <div 
                    className={`h-[2px] w-40 sm:w-56 md:w-92 mb-2 mt-6 transition-all duration-500 ease-in-out ${
                      active === p.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                    style={{
                      border: '2px solid',
                      borderImageSource: p.key === 'cost' 
                        ? 'linear-gradient(90deg, #FFFFFF 0%, #122BEA 147.64%)'
                        : p.key === 'ownership'
                        ? 'linear-gradient(90deg, #FFEEF8 0%, #FE0090 100%)'
                        : 'linear-gradient(90deg, #E5FFDF 0%, #22AE05 100%)',
                      borderImageSlice: '1',
                      borderImageWidth: '0 0 2px 0',
                      borderImageOutset: '0',
                      borderImageRepeat: 'stretch',
                      transformOrigin: 'left'
                    }}
                  ></div>
                </button>
              </li>
            ))}
          </ul>
          {/* Right visual container with proper spacing for stat card */}
          <div className="relative w-full pt-2">
            {/* Main image container */}
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[680px] rounded-2xl overflow-hidden">
              {Object.entries(imageByKey).map(([key, imgSrc]) => (
                <div key={key} className="absolute inset-0">
                  <img
                    src={imgSrc}
                    alt={key}
                    className={`w-full h-full object-contain transition-all duration-500 ease-in-out ${
                      active === key ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  
      
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation