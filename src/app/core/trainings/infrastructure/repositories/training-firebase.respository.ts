import { Training, TrainingRepository } from '../../domain';
import firestore from '@react-native-firebase/firestore';

export class TrainingFirebasetRepository implements TrainingRepository {
  constructor() {}

  async getAll(): Promise<Training[]> {
    const response = await firestore().collection('trainings').get();
    return response.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        title: data.title,
        icon: data.icon,
      };
    });
  }

  getById(id: string): Promise<Training> {
    throw new Error('Method not implemented.');
  }
}
