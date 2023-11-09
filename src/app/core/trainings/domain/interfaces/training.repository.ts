import { Training } from '../entities';

export interface TrainingRepository {
  getAll(): Promise<Training[]>;
  getById(id: string): Promise<Training>;
}
