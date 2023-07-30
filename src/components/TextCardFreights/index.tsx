import { FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles'
import { TextCardFreightsProps } from './types'

export const TextFreights = ({
  title,
  subtitle,
  success,
}: TextCardFreightsProps) => {
  return (
    <Styled.Text>
      <FuelTypography size='body-sm' weight='medium' color='neutral-default'>
        {title}
      </FuelTypography>
      <FuelTypography
        size='body-sm'
        weight='bold'
        color={success ? 'success-default' : 'neutral-default'}
      >
        {subtitle}
      </FuelTypography>
    </Styled.Text>
  )
}
