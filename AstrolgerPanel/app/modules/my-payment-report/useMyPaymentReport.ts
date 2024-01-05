import { useState } from 'react';

const useMyPaymentReport = () => {
  const [isMonthVisible, setIsMonthVisible] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date().toLocaleString('default', { month: 'long' }),
  );
  const [selectedYear, setSelectedYear] = useState<number | string>(
    new Date().getFullYear(),
  );
  const [isYearVisible, setIsYearVisilbe] = useState<boolean>(false);
  const Year: number[] = [];

  for (let i = 0; i < 25; i++) {
    let year = new Date().getFullYear() - i;
    Year.push(year);
  }

  const toggleMonth = () => {
    setIsMonthVisible(!isMonthVisible);
  };

  const selectMonth = (month: string) => {
    setSelectedMonth(month);
    setIsMonthVisible(false);
  };

  const selectYear = (year: number) => {
    setIsYearVisilbe(false);
    setSelectedYear(year);
  };

  const toggleYear = () => {
    setIsYearVisilbe(!isYearVisible);
  };

  return {
    isMonthVisible,
    selectedMonth,
    isYearVisible,
    selectedYear,
    Year,
    toggleMonth,
    selectMonth,
    selectYear,
    toggleYear,
  };
};

export default useMyPaymentReport;
