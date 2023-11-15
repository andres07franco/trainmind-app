import { Topic, topicRepository } from '@core';
import { useTrainingSelector } from '../redux';
import { useCallback, useEffect, useState } from 'react';

export const useGetTopics = () => {
  const { selectedActivity } = useTrainingSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Topic[]>([]);

  const getTopics = useCallback(async () => {
    try {
      if (!selectedActivity) {
        throw new Error('Activity did not selected');
      }
      setLoading(true);
      const resutls = await topicRepository.getByIdActivity(
        selectedActivity.id,
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
    getTopics();
  }, [getTopics]);

  return {
    loading,
    error,
    data,
    getTopics,
  };
};
