import { trainingRepository } from '@core';
import { TrainingProps } from '@shared/components';
import { useCallback, useEffect, useState } from 'react';

export const useGetAllTraining = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [trainings, setTrainings] = useState<TrainingProps[]>([]);

  const getAllTraining = useCallback(async () => {
    try {
      setLoading(true);
      const resutls = await trainingRepository.getAll();
      const resutlsMapped = resutls.map((training) => ({
        ...training,
        selected: false,
      }));
      setTrainings(resutlsMapped);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllTraining();
  }, [getAllTraining]);

  return {
    loading,
    error,
    trainings,
    setTrainings,
    getAllTraining,
  };
};
