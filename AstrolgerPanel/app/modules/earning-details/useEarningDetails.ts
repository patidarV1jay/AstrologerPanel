import { useState } from 'react';

const useEarningDetails = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isAffiliateDropDown , setIsAffiliateDropDown] = useState<boolean>(false)

  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const affililateToggle = () =>{
    setIsAffiliateDropDown(!isAffiliateDropDown)
  }

  return {
    isDropDown,
    setIsDropDown,
    toggleDropDown, 
    isAffiliateDropDown,
    affililateToggle
  };
};

export default useEarningDetails;
