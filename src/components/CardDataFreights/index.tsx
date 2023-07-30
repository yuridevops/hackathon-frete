import {
  FuelBullet,
  FuelButton,
  FuelCard,
  FuelSign,
  FuelTypography,
} from '@frete.com/fuel-react'
import { TextFreights } from '../../components/TextCardFreights'
import { CardDataFreightsProps } from './types'

import * as Styled from './styles'
import { OriginAndDestination } from '../OriginAndDestination'
import { formatCurrency } from '../../utils/numberUtils'

export const CardDataFreights = ({
  route,
  handleOpen,
}: CardDataFreightsProps) => {
  return (
    <Styled.Wrapper>
      <FuelCard>
        <Styled.CardContent slot='content'>
          {route.received && (
            <Styled.Tag>
              <FuelTypography
                color='neutral-inverted'
                weight='bold'
                size='caption'
              >
                PAGO
              </FuelTypography>
            </Styled.Tag>
          )}
          <FuelBullet aria-label='truck'>
            <FuelSign slot='sign' size='small' icon='truck' />
            <FuelTypography
              slot='subtitle'
              size='body-sm'
              weight='medium'
              color='neutral-strong'
            >
              ID do Frete: {route.id}
            </FuelTypography>
          </FuelBullet>
          <Styled.RouteFreights>
            <OriginAndDestination route={route} />
          </Styled.RouteFreights>
          <Styled.ValuesFreights>
            <TextFreights
              title='Valor negociado:'
              subtitle={formatCurrency(Number(route.negotiated_amount))}
            />
            <TextFreights
              title='Adiantamento:'
              subtitle={formatCurrency(Number(route.advance_amount))}
            />
            <TextFreights
              title={route?.received ? 'Saldo recebido:' : 'Saldo a receber'}
              subtitle={formatCurrency(Number(route.received_amount))}
              success
            />
          </Styled.ValuesFreights>
          {!route.received && (
            <FuelButton variant='secondary' fullWidth onClick={handleOpen}>
              Antecipar saldo
            </FuelButton>
          )}
        </Styled.CardContent>
      </FuelCard>
    </Styled.Wrapper>
  )
}
