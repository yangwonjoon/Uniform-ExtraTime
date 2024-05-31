import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface InputImages {
  showImages: string[]
  handleDeleteImage: (index: number) => void
  handleAddImages: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SellerAddImages = ({
  showImages,
  handleDeleteImage,
  handleAddImages,
}: InputImages) => {
  const IMAGES_LENGTH = showImages.length
  return (
    <>
      <div className="mt-5 mb-5 w-32 h-12 bg-main text-white rounded-md text-white flex items-center justify-center">
        <label
          htmlFor="input-file"
          className="font-bold text-base cursor-pointer"
        >
          이미지 추가하기
          <input
            type="file"
            id="input-file"
            multiple
            onChange={handleAddImages}
            className="hidden"
          />
        </label>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {showImages.map((image, index) => (
            <CarouselItem key={image} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                    <img
                      src={image}
                      alt="Product"
                      className="max-w-full max-h-full"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                    >
                      X
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {IMAGES_LENGTH > 0 && <CarouselPrevious />}
        {IMAGES_LENGTH > 0 && <CarouselNext />}
      </Carousel>
    </>
  )
}

export default SellerAddImages
