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
        totalActivities: data.totalActivities,
      };
    });
  }

  getById(id: string): Promise<Training> {
    throw new Error('Method not implemented.');
  }

  async getByIds(ids: string[]): Promise<Training[]> {
    const response = await firestore()
      .collection('trainings')
      .where('id', 'in', ids)
      .get();
    return response.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        title: data.title,
        icon: data.icon,
        totalActivities: data.totalActivities,
      } as Training;
    });
  }
}
