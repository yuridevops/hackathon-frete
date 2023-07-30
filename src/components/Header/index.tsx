import { FuelInteractiveIcon, FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles'

export const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.ArrowLeftWrapper>
        <FuelInteractiveIcon icon='arrow-left' size='large' />
      </Styled.ArrowLeftWrapper>
      <FuelTypography size='body-sm' weight='bold'>
        Minhas viagens
      </FuelTypography>
    </Styled.Wrapper>
  )
}
