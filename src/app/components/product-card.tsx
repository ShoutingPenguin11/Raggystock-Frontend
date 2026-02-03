import { useRouter } from 'next/navigation';

import Box from '@/app/components/box';
import Image from 'next/image';
import styles from '@/app/components/product.module.css';
import type Product from '@/app/types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log('product: ', product);
  const router = useRouter();

  if (!product || product?.image == undefined) {
    return;
  }

  const productImageSrc = `https://ak1.ostkcdn.com/images/products/${product.image}`;

  const handleCardClick = () => {
    router.push('/pages/ar-view');
  };

  return (
    <Box
      className={`${styles.cardHover} rounded-[4px_4px_4px_4px] border-[#DADCDF] border-[1px] border-solid flex flex-col items-center w-fit h-[500px] cursor-pointer bg-white shadow`}
      onClick={handleCardClick}
    >
      {product.isFeaturedProduct && <Box className="text-[#BD0000] font-bold text-2xl z-1">Featured Product</Box>}
      <Box className="relative w-100 h-100">
        <Image src={productImageSrc} fill alt={product.name} />
      </Box>
      <Box className="p-[5px] w-100">
        <Box as="h3">{product.name}</Box>
        <Box as="p" className="text-[#BD0000] font-bold">
          ${product.price}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
