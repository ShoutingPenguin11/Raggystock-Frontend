import Box from '@/app/components/box';
import IconButton from './icon-button';
import Search from '@/app/assets/icons/search.svg';

import text from '@/app/config/text/en';

const SearchBox: React.FC = () => {
  return (
    <>
      <Box className={'bg-[#f9fafb] w-full h-[34px] flex mt-[5px]'}>
        <Box
          className={'grow pl-[10px] rounded-[4px_0px_0px_4px] border-[#DADCDF] border-[1px] border-solid w-full'}
          as="input"
          placeholder={text.startYourSearch}
        ></Box>
        <IconButton svg={Search} className={'bg-[#bd0000] p-[6px] rounded-[0px_3px_3px_0px] cursor-pointer'} />
      </Box>
    </>
  );
};

export default SearchBox;
