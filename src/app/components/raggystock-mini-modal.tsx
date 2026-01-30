import BlankButton from '@/app/components/button/blank-button';
import RaggystockLogo from '@/app/assets/icons/raggystock-logo.svg';

type RaggystockMiniModalProps = {
  handleClick: () => void;
};

const RaggystockMiniModal: React.FC<RaggystockMiniModalProps> = ({ handleClick }) => {
  return (
    <BlankButton className="fixed bottom-6 right-6 cursor-pointer z-1" onClick={handleClick}>
      <RaggystockLogo className="rounded-[10px] w-[70px] md:w-[80px]" />
    </BlankButton>
  );
};

export default RaggystockMiniModal;
