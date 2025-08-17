
// import IconCard from './custom/iconCard'
// import blackGlobe from '@/assets/icons/balck_globe.svg'
// import whiteGlobe from '@/assets/icons/white_globe.svg'
import arrowUpBlack from '@/assets/icons/arrow_up_black.svg'
import arrowDownWhite from '@/assets/icons/arrow_down_white.svg'
import linkArrow from '@/assets/icons/link_arrow.svg'

import llm_image from '@/assets/images/llm_icons.png'
import TcpIp from '@/assets/images/tcp_ip.svg'
import OpenxAI from '@/assets/images/openxAI.svg'
import Ethereum from '@/assets/images/ethereum.svg'

type ProtocolSmallCard = {
  title: string;
  description: string;
  iconName: string;
  image?: string;
  ctaTitle?: string;
  ctaLink?: string;
}

type ProtocolMainCard = {
  id: string;
  era: string;
  title: string;
  description: string;
  smallCards: ProtocolSmallCard[];
  image?: string;
}

const protocolCards: ProtocolMainCard[] = [
  {
    id: 'internet',
    era: 'The Internet Era',
    title: 'TCP/IP',
    description:
      "The internet's backbone, connecting everyone and sparking trillion-dollar industries.",
    smallCards: [
      { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'server', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'api', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'network', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'monitor', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
    ],
    image: TcpIp
  },
  {
    id: 'web3',
    era: 'The Web3 Era',
    title: 'Ethereum',
    description: 'Decentralized storage. Files\nserved peer‑to‑peer, not from\nservers.',
    smallCards: [
      { title: 'Smart Contracts', description: 'On-chain logic', iconName: 'contract', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'Decentralized DB', description: 'Data availability', iconName: 'database', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'Node Services', description: 'RPC and indexing', iconName: 'server', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'Tooling', description: 'Dev and infra', iconName: 'tools', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
    ],
    image: Ethereum
  },
  {
    id: 'ai',
    era: 'The AI Era',
    title: 'OpenxAI',
    description: 'Permissionless AI—open, trustless model access, hosting, and training.',
    smallCards: [
      { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'server', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'Inference APIs', description: 'Serve any model', iconName: 'api', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'Model Marketplace', description: 'Discover and monetize', iconName: 'marketplace', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
      { title: 'GPU Compute', description: 'Training & finetune', iconName: 'gpu', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
    ],
    image: OpenxAI
  },
]

// Fixed content for the bottom section
const fixedContentCards = [
  { title: 'One API for Any Model', description: "The internet's backbone, connecting", iconName: 'server', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
  { title: 'Inference APIs', description: 'Serve any model', iconName: 'api', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
  { title: 'Model Marketplace', description: 'Discover and monetize', iconName: 'marketplace', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
  { title: 'GPU Compute', description: 'Training & finetune', iconName: 'gpu', image: llm_image, ctaTitle: 'Browse all', ctaLink: '#' },
]

const Protocols = () => {

  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-14 flex flex-col gap-2 pl-0">
          <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
            <span className="text-2xl md:text-[2.7rem] font-semibold tracking-tight">
              World-changing protocols and frameworks
            </span>
            <a
              href="#"
              className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
              <img
                src={linkArrow}
                alt="globe"
                className="w-3 h-3"
              />
            </a>
          </div>
          <p className="block text-sm md:text-[16px]  max-w-3xl text-gray-400 font-light">
            AI's complexity excludes non-coders and 3B+ people, leaving its potential untapped
          </p>
        </div>

        {/* Top row: three large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {protocolCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl p-5 md:p-8 cursor-pointer transition-all duration-500 ease-in-out select-none bg-[#F6FAFF] border border-[#ECECEC] hover:bg-black hover:text-white hover:border-black active:scale-[0.98]"
            >
              <div className="mb-6">
                <span className="inline-block text-xs px-3 py-2 rounded-full border border-[#ECECEC] text-gray-700 group-hover:text-black group-hover:bg-white transition-all duration-500 ease-in-out">
                  {card.era}
                </span>
              </div>
              <div className="flex items-center justify-center my-8 md:my-14">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-56 h-40 sm:w-64 sm:h-44 md:w-full md:h-48 object-contain rounded-lg transition-all duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
                  />
                )}
              </div>

              <div className="flex w-full justify-between items-center group">
                <p className="text-xl md:text-[1.2rem] font-semibold mb-3">{card.title}</p>
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                  <img
                    src={arrowUpBlack}
                    alt="arrow"
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={arrowDownWhite}
                    alt="arrow"
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>

              <p className="text-sm md:text-base transition-all duration-500 ease-in-out whitespace-pre-line text-[#818181] group-hover:text-white/80 
              text-gray-400 font-light
              ">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom: Single long card with four divided sections */}
        <div className="mt-6 md:mt-8">
          <div className="py-6 border border-[#ECECEC] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {fixedContentCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group/section transition-all duration-300 ease-in-out relative"
                >
                  {/* Right border - 75% height and vertically centered (desktop only) */}
                  {idx !== fixedContentCards.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-[#ECECEC] hidden lg:block"></div>
                  )}
                  
                  {/* Bottom border for mobile and tablet */}
                  {idx !== fixedContentCards.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-3/4 bg-[#ECECEC] lg:hidden"></div>
                  )}
                  
                  {/* Image section */}
                  <div className="h-24 sm:h-28 md:h-36 flex items-center justify-center">
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="max-w-[85%] h-full object-contain transition-transform duration-300 group-hover/section:scale-110" 
                      />
                    )}
                  </div>
                  
                  {/* Content section */}
                  <div className="px-5 py-3 md:py-4 text-center">
                    <span className="text-[14px] md:text-[15px] font-semibold text-gray-900 whitespace-pre-line">
                      {card.title}
                    </span>
                    {card.description && (
                      <p className="mt-1 text-[10px] md:text-[11px] text-gray-400 whitespace-pre-line">
                        {card.description}
                      </p>
                    )}
                  
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Protocols
