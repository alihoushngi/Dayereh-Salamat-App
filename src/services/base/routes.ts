import { APIRoutes } from './routes.type'

export const getAPIRoute = (): APIRoutes => {
  const routes: APIRoutes = {
    slider: {
      slider: { path: 'slider' },
    },
  }
  return routes
}
