import { trainingRepository } from '@core';
import { TrainingProps } from '@shared/components';
import { useSessionSelector } from '@shared/redux/selectors';
import { useCallback, useEffect, useState } from 'react';

export const useGetTrainingsByUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<TrainingProps[]>([]);
  const { user } = useSessionSelector();

  const getTrainingsByUser = useCallback(async () => {
    try {
      setLoading(true);
      const resutls = await trainingRepository.getByIds(user.trainings);
      const resutlsMapped = resutls.map((training) => ({
        ...training,
        selected: false,
      }));
      setData(resutlsMapped);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrainingsByUser();
  }, [getTrainingsByUser]);

  return {
    loading,
    error,
    data,
    getTrainingsByUser,
  };
};
