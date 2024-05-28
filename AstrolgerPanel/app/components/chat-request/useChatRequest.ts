import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  chatModalReducer,
  postChatStatus,
  resetChatSuccess,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants';
import { useEffect } from 'react';

const useChatRequest = () => {
  const dispatch = useAppDispatch();
  const { isChat } = useAppSelector(state => state.LiveStreamReducer);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { notification } = useAppSelector(state => state.LiveStreamReducer);
  const { isSuccess, statusResponse } = useAppSelector(
    state => state.ChatStatusReducer,
  );
  const { roomId, userId } = notification;

  useEffect(() => {
    if (isSuccess && statusResponse?.status === 'approve') {
      navigation.navigate(Routes.ChatScreen, { data: notification });
    }
    dispatch(resetChatSuccess());
    dispatch(chatModalReducer(false));
  }, [isSuccess]);

  const handleChatRequest = (status: string) => {
    dispatch(postChatStatus({ status, roomId , userId}));
  };

  return {
    isChat,
    dispatch,
    handleChatRequest,
  };
};

export default useChatRequest;
