import { useGetAllTraining } from '@onboarding/hooks';
import { TrainingProps } from '@shared/components';
import { useForm } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootStackParamList } from 'src/app/app.routes';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signIn } from '@shared/redux';
import { User } from '@core/auth';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
});

export const useWelcomScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { trainings, setTrainings } = useGetAllTraining();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSelectTraining = (item: TrainingProps) => {
    const nuevoArray = trainings.map((training) =>
      training.id === item.id
        ? { ...training, selected: !training.selected }
        : training,
    );
    setTrainings(nuevoArray);
  };

  const handlePressStart = (formData: { name: string }) => {
  
    const user: User = {
      id: '1',
      email: '',
      name: formData.name,
      phone: '',
      deviceId: '',
      trainings: trainings.filter((t) => t.selected).map((t) => t.id),
    };
    console.log('dfdfg',user)
    dispatch(signIn(user));
    navigation.navigate('SelectTrainingScreen');
  };

  return {
    control,
    errors,
    trainings,
    handleSelectTraining,
    handlePressStart: handleSubmit(handlePressStart),
  };
};
