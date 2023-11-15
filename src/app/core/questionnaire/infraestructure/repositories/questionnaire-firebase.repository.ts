import { Questionnaire, QuestionnaireRepository } from '../../domain';
import firestore from '@react-native-firebase/firestore';

export class QuestionnaireFirebaseRepository
  implements QuestionnaireRepository
{
  constructor() {}

  async getById(id: string): Promise<Questionnaire> {
    const response = await firestore()
      .collection('Questionnaires')
      .doc(id)
      .get();
    const data = response.data();
    if (!data) {
      throw Error(`Questionnaire with id ${id} not found`);
    }
    return {
      id: data.id,
      description: data.description,
      overview: data.overview,
      questions: data.questions,
      idTopic: data.idTopic,
    } as Questionnaire;
  }
}
