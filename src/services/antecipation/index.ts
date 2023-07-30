import { AntecipationApi } from '../../api'
import { GetRoutesDTO } from './types'

export const getRoutes = async ({ id }: { id: string }) => {
  return await AntecipationApi.get<GetRoutesDTO>(`/freight-route/trucker/${id}`)
}

export const receive = async ({ id, route }: { id: string; route: string }) => {
  return await AntecipationApi.post<GetRoutesDTO>(
    `/freight-route/trucker/${id}/receive`,
    {},
    {
      params: {
        route,
      },
    }
  )
}
