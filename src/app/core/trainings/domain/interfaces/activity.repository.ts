import { Activity } from '../entities';

export interface ActivityRepository {
  getByIdTraining(idTraining: string): Promise<Activity[]>;
  getById(id: string): Promise<Activity>;
}
