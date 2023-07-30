import { FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles'
import { OriginAndDestinationProps } from './types'
import { formatDate } from '../../utils/dataUtils'

export const OriginAndDestination = ({ route }: OriginAndDestinationProps) => {
  return (
    <Styled.Wrapper>
      <Styled.TravelIcon>
        <Styled.Circle />
        <Styled.Line />
        <Styled.Square />
      </Styled.TravelIcon>
      <Styled.Content>
        <Styled.Row>
          <FuelTypography weight='medium' size='body-sm'>
            {route.origin}
          </FuelTypography>
          <FuelTypography
            weight='medium'
            color='neutral-default'
            size='body-sm'
          >
            {formatDate(new Date(route.origin_date))}
          </FuelTypography>
        </Styled.Row>
        <Styled.Row>
          <FuelTypography weight='medium' size='body-sm'>
            {route.destiny}
          </FuelTypography>
          <FuelTypography
            weight='medium'
            color='neutral-default'
            size='body-sm'
          >
            {formatDate(new Date(route.destiny_date))}
          </FuelTypography>
        </Styled.Row>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
