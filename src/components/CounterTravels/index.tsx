import { FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles' 

export const CounterTravels = ({ count }: any) => {
    return (
        <Styled.Wrapper>
            <FuelTypography size='body-sm' weight='bold'>
                {count > 1 ? `${count} viagens` : `${count} viagem`}
            </FuelTypography>
        </Styled.Wrapper>
    )
}
