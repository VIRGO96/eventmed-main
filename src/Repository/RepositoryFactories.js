import eventRepository from "./eventRepository";
import favouriteRepository from "./favouriteRepository";

const repositories = {
  event: eventRepository,
  favourite: favouriteRepository
};
export const RepositoryFactory = {
  get: (name) => repositories[name],
};
