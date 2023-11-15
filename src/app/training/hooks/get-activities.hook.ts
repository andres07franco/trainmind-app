import { Activity, activityRepository } from '@core';
import { useTrainingSelector } from '../redux';
import { useCallback, useEffect, useState } from 'react';

export const useGetActivities = () => {
  const { selectedTraining } = useTrainingSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Activity[]>([]);

  const getActivities = useCallback(async () => {
    try {
      if (!selectedTraining) {
        throw new Error('Training did not selected');
      }
      setLoading(true);
      const resutls = await activityRepository.getByIdTraining(
        selectedTraining.id,
      );
      setData(resutls);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getActivities();
  }, [getActivities]);

  return {
    loading,
    error,
    data,
    getActivities,
  };
};
