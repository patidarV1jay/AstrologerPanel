import { useState } from 'react';

const useUpdateProfile = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
  const [category1, setCategory1] = useState<string>('Love');
  const [category2, setCategory2] = useState<string>('Love');
  const [category3, setCategory3] = useState<string>('Love');
  const [categoryDropDown, setCategoryDrowDown] = useState<string>('');

  const filterCategoryDropDown = (name: string) => {
    setCategoryDrowDown(name);
  };

  return {
    setIsDropDownVisible,
    isDropDownVisible,
    setCategory1,
    setCategory3,
    setCategory2,
    category1,
    category2,
    category3,
    categoryDropDown,
    setCategoryDrowDown,
    filterCategoryDropDown,
  };
};

export default useUpdateProfile;
