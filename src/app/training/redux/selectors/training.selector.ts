import { useSelector } from 'react-redux';
import { RootState } from 'src/app/app.store';
import { TrainingState } from '../slices';

export const useTrainingSelector = (): TrainingState =>
  useSelector((state: RootState) => state.training);
