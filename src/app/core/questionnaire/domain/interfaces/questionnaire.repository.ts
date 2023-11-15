import { Questionnaire } from '../entities';

export interface QuestionnaireRepository {
  getById(id: string): Promise<Questionnaire>;
}
