import { trainingRepository } from '@core';
import { TrainingItem } from '@shared/components';
import { useCallback, useEffect, useState } from 'react';

export const useGetAllTraining = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [trainings, setTrainings] = useState<TrainingItem[]>([]);

  const getAllTraining = useCallback(async () => {
    try {
      setLoading(true);
      const resutls = await trainingRepository.getAll();
      const resutlsMapped = resutls.map((t) => ({
        ...t,
        selected: false,
      }));
      setTrainings(resutlsMapped);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllTraining();
  }, [getAllTraining]);

  return {
    loading,
    trainings,
    setTrainings,
    getAllTraining,
  };
};
