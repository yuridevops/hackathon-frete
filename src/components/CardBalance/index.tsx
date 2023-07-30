import { FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles'
import { CardBalanceProps } from './types'
import { formatCurrency } from '../../utils/numberUtils'

export const CardBalance = ({
  advancedTotal,
  receivedTotal,
}: CardBalanceProps) => {
  return (
    <Styled.Wrapper>
      <Styled.FullAdvance>
        <FuelTypography size='body-sm' weight='medium' color='neutral-default'>
          Adiantamento total:
        </FuelTypography>
        <FuelTypography size='body-sm' weight='bold'>
          {formatCurrency(advancedTotal)}
        </FuelTypography>
      </Styled.FullAdvance>

      <Styled.BalanceReceivable>
        <FuelTypography size='body-sm' weight='medium' color='neutral-default'>
          Saldo a receber:
        </FuelTypography>
        <FuelTypography size='body-sm' weight='bold' color='neutral-default'>
          {formatCurrency(receivedTotal)}
        </FuelTypography>
      </Styled.BalanceReceivable>
    </Styled.Wrapper>
  )
}
