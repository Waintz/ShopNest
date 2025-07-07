import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

export function GalleryCarousel({
  images,
  nextPage = true,
  previousPage = true,
  autoPlayOpts = {
    autoScroll: false,
    delayScroll: 15000,
  },
  className,
}: {
  images: string[];
  nextPage?: boolean;
  previousPage?: boolean;
  autoPlayOpts?: {
    autoScroll?: boolean;
    delayScroll?: number;
  };
  className?: string;
}) {
  const carouselRef = useRef(null);

  return (
    <Carousel
      ref={carouselRef}
      opts={{
        loop: true,
      }}
      plugins={autoPlayOpts.autoScroll ? [
        Autoplay({
          delay: autoPlayOpts.delayScroll,
        }),
      ] : []}
      className={clsx("mx-auto flex items-center cursor-grab", className)}
    >
      <CarouselContent className="mx-auto flex items-center">
        {images &&
          images.map((img, index) => (
            <CarouselItem
              className="w-full h-full flex items-center"
              key={index}
            >
              <img src={img} alt="" />
            </CarouselItem>
          ))}
      </CarouselContent>
      {previousPage && (
        <CarouselPrevious
          variant={"default"}
          className="bg-white w-10 h-10 shadow hover:shadow-xl/10 cursor-pointer"
        />
      )}
      {nextPage && (
        <CarouselNext
          variant={"default"}
          className="bg-white w-10 h-10 shadow hover:shadow-xl/10 cursor-pointer"
        />
      )}
    </Carousel>
  );
}
