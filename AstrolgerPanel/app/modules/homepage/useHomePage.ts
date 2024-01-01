import { useState } from 'react';
interface Status {
  chat: boolean;
  call: boolean;
  videoChat: boolean;
  freeChat: boolean;
}
const useHomePage = () => {
  const [slider, setSlider] = useState<Status>({
    chat: false,
    call: false,
    videoChat: false,
    freeChat: false,
  });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>('');

  const toggleStatus = (operation: string) => {
    operation === 'chat' && setSlider({ ...slider, chat: !slider.chat });
    operation === 'call' && setSlider({ ...slider, call: !slider.call });
    operation === 'videoChat' &&
      setSlider({ ...slider, videoChat: !slider.videoChat });
    operation === 'freeChat' &&
      setSlider({ ...slider, freeChat: !slider.freeChat });
    setIsModalVisible(false);
  };

  const toggleVisibility = (operation: string) => {
    const { chat, call, videoChat, freeChat } = slider;
    setIsModalVisible(true);
    setOperation(operation);
  };

  return {
    slider,
    setSlider,
    toggleStatus,
    isModalVisible,
    setIsModalVisible,
    toggleVisibility,
    operation,
  };
};

export default useHomePage;
