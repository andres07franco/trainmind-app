import { Activity, ActivityRepository } from '../../domain';
import firestore from '@react-native-firebase/firestore';

export class ActivityFirebasetRepository implements ActivityRepository {
  constructor() {}

  async getByIdTraining(idTraining: string): Promise<Activity[]> {
    const response = await firestore()
      .collection('activities')
      .where('idTraining', '==', idTraining)
      .get();
    return response.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        name: data.name,
        description: data.description,
        type: data.type,
        icon: data.icon,
        instructor: data.instructor,
      } as Activity;
    });
  }

  getById(id: string): Promise<Activity> {
    throw new Error('Method not implemented.');
  }
}
