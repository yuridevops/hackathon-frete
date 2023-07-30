import { FuelInteractiveIcon, FuelTypography } from '@frete.com/fuel-react'
import * as Styled from './styles'
import { toast } from 'react-toastify'

export const Header = () => {
  function handleClick() {
    toast.info('Funcionalidade indisponível na demo.', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    })
  }

  return (
    <Styled.Wrapper>
      <FuelInteractiveIcon
        icon='arrow-left'
        size='large'
        onClick={handleClick}
      />
      <FuelTypography size='body-sm' weight='bold'>
        Minhas viagens
      </FuelTypography>
      <FuelInteractiveIcon icon='view' size='large' onClick={handleClick} />
    </Styled.Wrapper>
  )
}
