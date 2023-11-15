import { Questionnaire, questionnaireRepository } from '@core';
import { useCallback, useEffect, useState } from 'react';

export const useGetQuestionnaire = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Questionnaire>();

  const getQuestionnaire = useCallback(async () => {
    try {
      setLoading(true);
      const resutls = await questionnaireRepository.getById(id);
      console.log(resutls,id);
      setData(resutls);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getQuestionnaire();
  }, [getQuestionnaire]);

  return {
    loading,
    error,
    data,
    getQuestionnaire,
  };
};
