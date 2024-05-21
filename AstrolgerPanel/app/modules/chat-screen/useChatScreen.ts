import { useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../redux';
import { useIsFocused } from '@react-navigation/native';

interface RouteType {
  data: {
    [key: string]: string;
  };
}

const useChatScreen = () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { data } = route?.params as RouteType;
  console.log('data', data);
  const { id: astroId } = loggedInUser;
  return {
    data,
    astroId,
    isFocused,
  };
};

export default useChatScreen;
