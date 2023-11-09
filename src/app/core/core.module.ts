import { TrainingRepository, TrainingFirebasetRepository } from './trainings';

import { HttpClient } from './shared/domain';
import { HttpAxionClient } from './shared/infrastructure';
export * from './shared/domain/dtos/';

// Movies
import { MoviesRepository } from './movies/domain/interfaces';
import { MoviesRestRepository } from './movies/infrastructure/';
export * from './movies/domain/entities/';
export * from './movies/domain/interfaces/';

// init objects DI
const httpClient: HttpClient = new HttpAxionClient(
  process.env.EXPO_PUBLIC_API_URL as string,
  process.env.EXPO_PUBLIC_AUTH_TOKEN as string,
);
const moviesRepository: MoviesRepository = new MoviesRestRepository(httpClient);

const trainingRepository: TrainingRepository =
  new TrainingFirebasetRepository();

export { moviesRepository, trainingRepository };
export * from './trainings';