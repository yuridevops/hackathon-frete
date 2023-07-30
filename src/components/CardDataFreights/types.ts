import { GetRoutesDTO } from '../../services/antecipation/types'

export type CardDataFreightsProps = {
  route: GetRoutesDTO['routes'][any]
  handleOpen: () => void
}
