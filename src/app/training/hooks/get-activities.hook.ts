import { activityRepository } from '@core';
import { ActivityProps } from '@shared/components';
import { useTrainingSelector } from '../redux';
import { useCallback, useEffect, useState } from 'react';

export const useGetActivities = () => {
  const { selectedTraining } = useTrainingSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ActivityProps[]>([]);

  const getActivities = useCallback(async () => {
    try {
      if (!selectedTraining) {
        throw new Error('Training did not selected');
      }
      setLoading(true);
      const resutls = await activityRepository.getByIdTraining(
        selectedTraining.id,
      );
      const resutlsMapped = resutls.map((item) => {
        return {
          id: item.id,
          icon: item.icon,
          name: item.name,
          description: item.description,
          instructor: item.instructor,
        };
      });
      setData(resutlsMapped);
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
