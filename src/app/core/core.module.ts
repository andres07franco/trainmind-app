import {
  TrainingRepository,
  TrainingFirebasetRepository,
  ActivityRepository,
  ActivityFirebasetRepository,
  TopicFirebasetRepository,
  TopicRepository,
} from './trainings';

import { HttpClient } from './shared/domain';
import { HttpAxionClient } from './shared/infrastructure';
import { QuestionnaireRepository } from './questionnaire/domain';
import { QuestionnaireFirebaseRepository } from './questionnaire/infraestructure';
export * from './shared/domain/dtos/';

// init objects DI
// const httpClient: HttpClient = new HttpAxionClient(
//   process.env.EXPO_PUBLIC_API_URL as string,
//   process.env.EXPO_PUBLIC_AUTH_TOKEN as string,
// );
// const moviesRepository: MoviesRepository = new MoviesRestRepository(httpClient);

// Training module
const trainingRepository: TrainingRepository =
  new TrainingFirebasetRepository();

const activityRepository: ActivityRepository =
  new ActivityFirebasetRepository();

const topicRepository: TopicRepository = new TopicFirebasetRepository();

// questionnaire module
const questionnaireRepository: QuestionnaireRepository =
  new QuestionnaireFirebaseRepository();

export {
  trainingRepository,
  activityRepository,
  topicRepository,
  questionnaireRepository,
};
export * from './trainings';
export * from './questionnaire';
