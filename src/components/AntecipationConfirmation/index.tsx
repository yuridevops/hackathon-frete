import {
  FuelButton,
  FuelCheckbox,
  FuelDivider,
  FuelTypography,
} from '@frete.com/fuel-react'
import * as Styled from './styles'
import { FuelLink } from '@frete.com/fuel-react'
import { TextFreights } from '../../components/TextCardFreights'
import { AntecipationConfirmationProps } from './types'
import { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from '../../hooks/clickOutsideHook'
import { formatCurrency } from '../../utils/numberUtils'

export const AntecipationConfirmation = ({
  title,
  description,
  open,
  handleConfirm,
  handleClose,
  selectedRoute,
}: AntecipationConfirmationProps) => {
  const [canConfirm, setCanConfirm] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const checkboxRef = useRef<HTMLFuelCheckboxElement>(null)
  useOutsideClick(contentRef, () => handleClose())

  useEffect(() => {
    if (checkboxRef) {
      checkboxRef?.current?.addEventListener('fuel-change', (event) => {
        //@ts-ignore
        setCanConfirm(event.target.checked)
      })
    }
  }, [checkboxRef])

  return (
    <Styled.Wrapper open={open}>
      <Styled.Content open={open} ref={contentRef}>
        <FuelTypography size='heading-sm' weight='bold'>
          {title}
        </FuelTypography>
        <FuelTypography size='body-md' weight='regular'>
          {description}
        </FuelTypography>
        <Styled.Terms>
          <FuelCheckbox ref={checkboxRef} />
          <FuelLink
            href='https://fretebras.com'
            color='neutral-default'
            target='_blank'
          >
            <FuelTypography
              size='body-sm'
              color='neutral-default'
              weight='bold'
            >
              Termo de aceite
            </FuelTypography>
          </FuelLink>
        </Styled.Terms>
        <FuelDivider />
        {selectedRoute && (
          <Styled.Footer>
            <TextFreights
              title='Saldo a receber:'
              subtitle={formatCurrency(Number(selectedRoute.received_amount))}
            />
            <FuelButton
              variant='primary'
              fullWidth
              onClick={handleConfirm}
              disabled={!canConfirm}
            >
              Confirmar antecipação
            </FuelButton>
          </Styled.Footer>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  )
}
