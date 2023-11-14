import { Topic } from '../entities';

export interface TopicRepository {
  getByIdActivity(idActivity: string): Promise<Topic[]>;
  getById(id: string): Promise<Topic>;
}
