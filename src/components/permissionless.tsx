import decentralizedInfrastructure from '@/assets/icons/decentralized_infrastructure.svg'
import unrestrictedAI from '@/assets/images/unrestriced_ai.svg'
import communityGovernance from '@/assets/images/community_governance.svg'
import tokenize from '@/assets/images/tokenize.svg'

const cardBase =
    'rounded-3xl border border-white/10 bg-[#0b0b0e] overflow-hidden hover:border-blue-500 transition-colors relative';

const Permissionless = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto px-4 py-12 md:py-20 text-white">
                <div className="space-y-3 mb-8">
                    <h2
                        className="text-white font-semibold tracking-[-0.03em] leading-[120%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block align-bottom"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Permissionless AI Ecosystem
                    </h2>
                    <p
                        className="text-white max-w-3xl font-light leading-[150%] tracking-[0] text-sm sm:text-base md:text-lg"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        AI's complexity excludes non-coders and 3B+ people, leaving
                        <br className="hidden sm:block" />
                        its potential untapped
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
                    {/* Top-left card */}
                    <div className={`${cardBase} md:col-span-4`}>
                        <div className="absolute inset-0 opacity-[0.13] bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
                        <div className="relative p-5 sm:p-6 md:p-8 h-40 sm:h-52 md:h-64 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:auto,auto,16px_16px]">
                            <img src={decentralizedInfrastructure} alt="Decentralized Infrastructure" className="w-[170px] h-[120px] sm:w-[210px] sm:h-[140px] md:w-[240px] md:h-[160px] object-contain" />
                        </div>
                        <div className="relative border-t border-white/10 p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Decentralized Infrastructure</h3>
                            <p className="text-white/70 text-xs sm:text-sm mt-1">Launch without banks or corporations.</p>
                        </div>
                    </div>

                    {/* Top-right wide card */}
                    <div className={`${cardBase} md:col-span-8`}>
                        <div className="absolute inset-0 opacity-[0.13] bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
                        <div className="relative p-5 sm:p-6 md:p-8 h-40 sm:h-52 md:h-64 grid place-items-center">
                            <img src={unrestrictedAI} alt="Unrestricted AI Access" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="relative border-t border-white/10 p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Unrestricted AI Access</h3>
                            <p className="text-white/70 text-xs sm:text-sm mt-1">Open, borderless, decentralized — free to use and improve.</p>
                        </div>
                    </div>

                    {/* Bottom-left wide card */}
                    <div className={`${cardBase} md:col-span-7`}>
                        <div className="absolute inset-0 opacity-[0.13] bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
                        <div className="relative p-5 sm:p-6 md:p-8 h-40 sm:h-52 md:h-64 grid place-items-center">
                            <img src={communityGovernance} alt="Community Governance" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="relative border-t border-white/10 p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Community Governance</h3>
                            <p className="text-white/70 text-xs sm:text-sm mt-1">No central authority; smart contracts decide.</p>
                        </div>
                    </div>

                    {/* Bottom-right card */}
                    <div className={`${cardBase} md:col-span-5`}>
                        <div className="absolute inset-0 opacity-[0.13] bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
                        <div className="relative p-5 sm:p-6 md:p-8 h-40 sm:h-52 md:h-64 grid place-items-center">
                            <img src={tokenize} alt="Tokenized Marketplace" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="relative border-t border-white/10 p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Tokenized Marketplace</h3>
                            <p className="text-white/70 text-xs sm:text-sm mt-1">Trade AI models and datasets directly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Permissionless