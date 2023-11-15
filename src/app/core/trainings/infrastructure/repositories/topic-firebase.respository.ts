import { Topic, TopicRepository } from '../../domain';
import firestore from '@react-native-firebase/firestore';

export class TopicFirebasetRepository implements TopicRepository {
  constructor() {}

  async getByIdActivity(idActivity: string): Promise<Topic[]> {
    const response = await firestore()
      .collection('topics')
      .where('idActivity', '==', idActivity)
      .get();
     
    return response.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        name: data.name,
        totalItems: data.totalItems,
        idActivity: data.idActivity,
        idTopicActivity: data.idTopicActivity,
      } as Topic;
    });
  }

  getById(id: string): Promise<Topic> {
    throw new Error('Method not implemented.');
  }
}
