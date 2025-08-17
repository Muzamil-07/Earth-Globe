import { imageShowCaseData } from '../../data/imageShowCaseData'

export default function ImageShowCase() {
    const { gradientImage, image } = imageShowCaseData;
    return (
        <div className="my-24 md:my-32">
            <div className="text-center container mx-auto px-4 mb-12 md:mb-16 lg:mb-20">
                <div className='relative overflow-hidden'>
                    <img src={gradientImage} alt="gradientImage" className='w-full' />
                    <img 
                        src={image} 
                        alt="showcase" 
                        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] z-10' />
                </div>
            </div>
        </div>
  )
}
