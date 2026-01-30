'use client';

import { useEffect, useState } from 'react';

import Header from '@/app/components/header';
import Image from 'next/image';
import Box from '@/app/components/box';
import Footer from '@/app/components/footer';
import RaggystockModal from './components/raggystock-modal';
import RaggystockMiniModal from './components/raggystock-mini-modal';

import FiftyPercentOff from '@/app/assets/images/cs-banners/banner 1/50-percent-off.svg';
import Banner1Background from '@/app/assets/images/cs-banners/banner 1/banner1-background.webp';

import ExtraTenPercentOff from '@/app/assets/images/cs-banners/tile-banners/tile 1/ten-percent-off.svg';
import Tile1Background from '@/app/assets/images/cs-banners/tile-banners/tile 1/tile1background.webp';

import FiftyPercentOffRugs from '@/app/assets/images/cs-banners/tile-banners/tile 2/fifty-percent-off-rugs.svg';
import Tile2Background from '@/app/assets/images/cs-banners/tile-banners/tile 2/tile2background.jpg';

import FiftyPercentOffFurniture from '@/app/assets/images/cs-banners/tile-banners/tile 3/fifty-percent-off-indoor-furniture.svg';
import Tile3Background from '@/app/assets/images/cs-banners/tile-banners/tile 3/tile3background.webp';

import Top100Beds from '@/app/assets/images/cs-banners/tile-banners/tile 4/top-100-beds.svg';
import Tile4Background from '@/app/assets/images/cs-banners/tile-banners/tile 4/tile4background.webp';

import DownloadTheAppBanner from '@/app/assets/images/cs-banners/download-the-app-banner.svg';

import MidCentryModernEdit from '@/app/assets/images/cs-banners/dual-tile-banners/tile 1/mid-centry-modern-edit.svg';
import DualTile1Background from '@/app/assets/images/cs-banners/dual-tile-banners/tile 1/living-room-tile-background.webp';

import TheHalloweenShop from '@/app/assets/images/cs-banners/dual-tile-banners/tile 2/the-halloween-shop.svg';
import DualTile2Background from '@/app/assets/images/cs-banners/dual-tile-banners/tile 2/halloween-tile-background.webp';

import FurnitureTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/furniture.webp';
import PatioTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/patio.webp';
import RugsTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/rugs.webp';
import JewelryTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/jewelry.webp';
import HomeImprovementTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/home-improvement.webp';
import LightingTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/lighting.webp';
import BeddingTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/bedding.webp';
import BathTile from '@/app/assets/images/cs-banners/deals-by-category-tiles/bath.webp';

import NewInDesignerFall from '@/app/assets/images/cs-banners/upgrade-fall-look-tiles/tile 1/new-in-design-fall-preview.svg';
import NewInDesignerFallBackground from '@/app/assets/images/cs-banners/upgrade-fall-look-tiles/tile 1/new-in-design-fall-preview-background.webp';

export default function Home() {
  const [raggystockModalToggle, setRaggystockModalToggle] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const res = await fetch('/api/health');
        console.log(res);
      } catch (err) {
        console.log('error: ', err);
      }
    }

    fetchHealth();

    setTimeout(() => {
      setIsLoading(false);
      setRaggystockModalToggle(true);
    }, 3000);
  }, []);

  const handleModalClose = () => {
    setRaggystockModalToggle(false);
  };

  const handleMiniModalClick = () => {
    setRaggystockModalToggle(true);
  };

  return (
    <>
      {raggystockModalToggle && (
        <Box className="fixed inset-0 z-50 flex items-center justify-center">
          <Box className="absolute inset-0 bg-[#333] opacity-70"></Box>
          <RaggystockModal handleClose={handleModalClose} />
        </Box>
      )}
      {!raggystockModalToggle && !isLoading && <RaggystockMiniModal handleClick={handleMiniModalClick} />}
      <Box>
        <Header />
        {/*Homepage Banner*/}
        <Box className="relative">
          <Image src={Banner1Background} alt={'Banner background'} />
          <FiftyPercentOff className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
        </Box>

        {/* Tiles */}
        <Box className="grid grid-cols-2 gap-4 m-[3vw]">
          <Box className="relative">
            <Image src={Tile1Background} alt="tile banner background" />
            <ExtraTenPercentOff className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile2Background} alt="tile banner background" />
            <FiftyPercentOffRugs className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile3Background} alt="tile banner background" />
            <FiftyPercentOffFurniture className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile4Background} alt="tile banner background" />
            <Top100Beds className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
        </Box>

        {/*Banner*/}
        <Box className="bg-[#bd0000] m-[1vw_3vw_1vw_3vw]">
          <DownloadTheAppBanner className="w-full" />
        </Box>

        <Box className="text-center font-bold md:text-[32px] m-[3vw_0_3vw_0]">Featured Fall Finds</Box>

        <Box className="grid grid-cols-2 gap-4 m-[3vw]">
          <Box className="relative">
            <Image src={DualTile1Background} alt="tile banner background" />
            <MidCentryModernEdit className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={DualTile2Background} alt="tile banner background" />
            <TheHalloweenShop className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
        </Box>

        <Box className="text-center font-bold md:text-[32px] m-[3vw_0_3vw_0]">Shop Deals by Category</Box>

        <Box className="grid grid-cols-4 gap-4 m-[3vw]">
          <Image src={FurnitureTile} alt="tile banner background" />
          <Image src={PatioTile} alt="tile banner background" />
          <Image src={RugsTile} alt="tile banner background" />
          <Image src={JewelryTile} alt="tile banner background" />
          <Image src={HomeImprovementTile} alt="tile banner background" />
          <Image src={LightingTile} alt="tile banner background" />
          <Image src={BeddingTile} alt="tile banner background" />
          <Image src={BathTile} alt="tile banner background" />
        </Box>

        <Box className="text-center font-bold md:text-[32px] m-[3vw_0_3vw_0]">Upgrade your Look for Fall</Box>

        <Box className="grid grid-cols-2 gap-4 m-[3vw]">
          <Box className="relative">
            <Image src={NewInDesignerFallBackground} alt="tile banner background" />
            <NewInDesignerFall className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={NewInDesignerFallBackground} alt="tile banner background" />
            <NewInDesignerFall className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
        </Box>

        <Box className="bg-[#bd0000] m-[3vw]">
          <DownloadTheAppBanner />
        </Box>

        <Box className="text-center font-bold md:text-[32px] m-[3vw_0_3vw_0]">Brands We Love</Box>

        <Box className="grid grid-cols-2 gap-4 m-[3vw]">
          <Box className="relative">
            <Image src={Tile1Background} alt="tile banner background" />
            <ExtraTenPercentOff className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile2Background} alt="tile banner background" />
            <FiftyPercentOffRugs className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile3Background} alt="tile banner background" />
            <FiftyPercentOffFurniture className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
          <Box className="relative">
            <Image src={Tile4Background} alt="tile banner background" />
            <Top100Beds className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" />
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
