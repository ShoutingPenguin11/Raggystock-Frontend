import Box from '@/app/components/box';
import text from '@/app/config/text/en';
import Flex from '@/app/components/flex';
import Facebook from '@/app/assets/icons/logo-facebook.svg';
import Youtube from '@/app/assets/icons/logo-youtube.svg';
import Instagram from '@/app/assets/icons/logo-instagram.svg';
import TikTok from '@/app/assets/icons/logo-tik-tok.svg';
import X from '@/app/assets/icons/logo-x.svg';

const Footer: React.FC = () => {
  return (
    <Box className="bg-[#252525]">
      <Flex className="flex flex-row">
        <Box className="flex-grow text-white p-20 max-w-[600px]">
          {text.shopOverstockFooter}
          <Flex className="p-5">
            <Box className="p-[10px_20px_10px_20px]">
              <Facebook />
            </Box>
            <Box className="p-[10px_20px_10px_20px]">
              <Youtube />
            </Box>
            <Box className="p-[10px_20px_10px_20px]">
              <Instagram />
            </Box>
            <Box className="p-[10px_20px_10px_20px]">
              <TikTok />
            </Box>
            <Box className="p-[10px_20px_10px_20px]">
              <X />
            </Box>
          </Flex>
        </Box>
        <Box className="flex-grow text-white p-20">
          My Account
          <Box>{text.myAccount.orders}</Box>
          <Box>{text.myAccount.applyForCreditCard}</Box>
          <Box>{text.myAccount.manageCreditCard}</Box>
        </Box>
        <Box className="flex-grow text-white p-20">
          Let Us Help
          <Box>{text.letUsHelp.helpCenter}</Box>
          <Box>{text.letUsHelp.contactCustomerCare}</Box>
          <Box>{text.letUsHelp.shippingInformaiton}</Box>
          <Box>{text.letUsHelp.returnPolicy}</Box>
          <Box>{text.letUsHelp.accessibility}</Box>
          <Box>{text.letUsHelp.askedQuestions}</Box>
          <Box>{text.letUsHelp.security}</Box>
        </Box>
        <Box className="flex-grow text-white p-20">
          Company Information
          <Box>{text.companyInformation.aboutUs}</Box>
          <Box>{text.companyInformation.contactUs}</Box>
          <Box>{text.companyInformation.careers}</Box>
          <Box>{text.companyInformation.investorRelations}</Box>
          <Box>{text.companyInformation.sellYourProducts}</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
