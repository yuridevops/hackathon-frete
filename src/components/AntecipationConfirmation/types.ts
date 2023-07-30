import { GetRoutesDTO } from '../../services/antecipation/types'

export type AntecipationConfirmationProps = {
  title: string
  description: string
  handleClose: () => void
  handleConfirm?: () => void
  open: boolean
  selectedRoute: GetRoutesDTO['routes'][any] | null
}
