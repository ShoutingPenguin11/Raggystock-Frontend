import { ReactElement } from 'react';

import BeyondBar from './beyond-bar';
import Box from '@/app/components/box';
import OstkLogo from '@/app/assets/icons/ostk-logo-main';
import SearchBox from './search-box';
import { useRouter } from 'next/navigation';

import AccountIconWithText from '@/app/assets/icons/account-icon-with-text.svg';
import CartIconWithText from '@/app/assets/icons/cart-icon-with-text.svg';
import NotificationBellWithText from '@/app/assets/icons/notification-bell-text.svg';

const Header: React.FC = (): ReactElement => {
  const router = useRouter();

  const handleOstkLogoClick = () => {
    router.push('/');
  };
  return (
    <>
      <Box className="border-b border-[#DADCDF] border-solid">
        <BeyondBar></BeyondBar>
        <Box className="flex justify-between items-center m-[10px] lg:m-[20px_100px_20px_100px]">
          <Box className="pt-[10px] pr-[10px] cursor-pointer" onClick={handleOstkLogoClick}>
            <OstkLogo />
          </Box>

          <SearchBox />

          <Box className="ml-[20px] hidden lg:flex">
            <Box className="pl-[10px] pr-[10px] pt-[5px]">
              <AccountIconWithText />
            </Box>
            <Box className="pl-[10px] pr-[10px]">
              <NotificationBellWithText />
            </Box>
            <Box className="pl-[10px] pr-[10px] pt-[5px]">
              <CartIconWithText />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="hidden text-[14px] font-bold ml-[80px] mr-[80px] lg:flex">
        <Box className="p-[5px_20px_5px_20px] grow">Furniture</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Rugs</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Patio</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Lighting</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Decor</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Bedding</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Apparel</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Designer</Box>
        <Box className="p-[5px_20px_5px_20px] grow">Jewelry & Watches</Box>
        <Box className="p-[5px_20px_5px_20px] grow">The Vault</Box>
        <Box className="p-[5px_20px_5px_20px] grow">More</Box>
      </Box>
      <Box className="border-b border-[#DADCDF] border-solid hidden lg:block"></Box>
    </>
  );
};

export default Header;
