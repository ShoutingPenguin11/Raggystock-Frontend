import { useRouter } from 'next/navigation';
import Box from '@/app/components/box';
import BlankButton from '@/app/components/button/blank-button';
import Close from '@/app/assets/icons/close.svg';
import RaggystockLogo from '@/app/assets/icons/raggystock-logo.svg';
import text from '@/app/config/text/en';

type RaggystockModalProps = {
  handleClose: () => void;
};

const RaggystockModal: React.FC<RaggystockModalProps> = ({ handleClose }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/raggystock');
  };

  return (
    <Box className="relative md:w-[400px] md:h-[400px] border border-[#DADCDF] border-solid m-5 rounded-[10px] flex flex-col justify-center bg-white">
      <BlankButton className="absolute top-0 right-0 p-[5px] cursor-pointer" onClick={handleClose}>
        <Close className="w-[30px]" />
      </BlankButton>

      <Box className="flex justify-center m-[10px]">
        <RaggystockLogo className="w-[100px] md:w-[180px]" />
      </Box>

      <Box className="p-[15px] max-w-[220px] md:p-[30px] md:max-w-full">{text.raggystockModalBlurb}</Box>
      <Box className="flex justify-center m-[10px]">
        <BlankButton
          onClick={handleClick}
          className="bg-[#bd0000] rounded-[6px] text-white p-[10px] hover:bg-zinc-700 cursor-pointer"
        >
          Try Raggystock!
        </BlankButton>
      </Box>
    </Box>
  );
};

export default RaggystockModal;
