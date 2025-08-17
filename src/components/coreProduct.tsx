import React from 'react'

import xEngineIcon from '@/assets/icons/x_engine.svg'
import playgroundIcon from '@/assets/icons/playground.svg'
import xStudioIcon from '@/assets/icons/x_studio.svg'
import marketplaceIcon from '@/assets/icons/marketplace.svg'

const CardBase: React.FC<{
	title: string
	description?: string
	iconSrc: string
	isPrimary?: boolean
}> = ({ title, description, iconSrc, isPrimary = false }) => {
  return (
    <div
      className={
        'relative rounded-3xl border border-white/10 hover:border-blue-500 bg-[#0b0b0e] p-6 sm:p-8 md:p-10 pb-14 md:pb-16 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] hover:translate-y-[-2px] transition-all duration-300 w-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden group'
      }
      
    >
		{/* Hover background image */}
		<div 
			className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
			style={{ backgroundImage: 'url(/hover-bg.png)' }}
		/>
		
		<div className="flex h-full flex-col relative z-10">
			<div className="my-auto flex flex-col items-center text-center gap-4 sm:gap-6">
				<img src={iconSrc} alt={title} width={42} height={42} className="w-[42px] h-[42px]" />
				<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h3>
				{description && (
					<p className="text-xs sm:text-sm font-normal text-white/70 max-w-[18rem]">{description}</p>
				)}
			</div>

			{isPrimary && (
				<div className="pt-6 text-center">
					<p className="text-sm sm:text-base md:text-lg text-white/75 font-extralight leading-relaxed">
						LLM → ABFM | Market
						<br />
						Simulation & Prediction
					</p>
				</div>
			)}
		</div>
    </div>
  )
}

const CoreProduct: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-16 md:py-40">
        <div className="flex flex-col gap-3 mb-10">
          <h2
            className="text-white font-semibold tracking-[-0.03em] leading-[120%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block align-bottom"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Core Product
          </h2>
          <p
            className="text-white max-w-3xl leading-[140%] tracking-[0] text-sm sm:text-base md:text-lg font-light"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            AI's complexity excludes non-coders and 3B+ people, leaving
            <br className="hidden sm:block" />
            its
            potential untapped
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-stretch">
          <CardBase
            title="X Engine"
            iconSrc={xEngineIcon}
            isPrimary
          />

          <CardBase
            title="Playground"
            iconSrc={playgroundIcon}
          />

          <CardBase
            title="X Studio"
            iconSrc={xStudioIcon}
          />

          <CardBase
            title="Marketplace"
            iconSrc={marketplaceIcon}
          />
        </div>
      </div>
    </section>
  )
}

export default CoreProduct