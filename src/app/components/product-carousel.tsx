import Box from '@/app/components/box';
import ProductCarouselProps from '../types/ProductCarouselProps';
import checkViewportWidth from '../utils/isMobile';
import ProductCard from '@/app/components/product-card';

const ProductCarousel = (props: ProductCarouselProps) => {
  const { products } = props;

  return (
    <>
      <Box className="flex flex-row gap-4 overflow-auto mt-[20px] max-w-[1680px] scrollbar-hide p-[20px_0px_20px_0px]">
        {products.map((p, index: number) => {
          return (
            <Box key={index}>
              {checkViewportWidth() && p.isFeaturedProduct ? (
                <ProductCard product={p} />
              ) : !checkViewportWidth() && p.isFeaturedProduct ? (
                <></>
              ) : (
                <ProductCard product={p} />
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ProductCarousel;
