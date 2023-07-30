
import { FuelIllustration, FuelTypography } from '@frete.com/fuel-react';


import * as Styled from './styles';
 
export default function AcessDesktop() {
  return (
    <Styled.Container data-testid='acessDesktop'>
      <Styled.Wrapper>
        <Styled.ContentBody>
          <FuelTypography
            tag='h1'
            size='heading-lg'
            weight='bold'
            color='neutral-strong'>
                Acesse pelo navegador do seu celular
          </FuelTypography>
          <FuelIllustration 
            name="user" 
            alt="User" 
            width={400} 
            height={400}
            />

        </Styled.ContentBody>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
