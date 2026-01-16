import { ReactElement } from 'react';
import Box from '@/app/components/box';
import DeliverFast from '@/app/assets/icons/delivery-fast.svg';

const BeyondBar: React.FC = (): ReactElement => {
  return (
    <Box className={'bg-[#bd0000] text-center pt-1 pb-1'}>
      <DeliverFast className="stroke-white inline-block pr-2 w-7" />
      <Box className={'font-bold text-[13px] text-white inline-block'}>Free Shipping Over $49.99* Details</Box>
    </Box>
  );
};

export default BeyondBar;
