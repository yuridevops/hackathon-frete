import { useEffect, useState } from 'react'
import { CardBalance } from '../../components/CardBalance'
import { CardDataFreights } from '../../components/CardDataFreights'
import { CounterTravels } from '../../components/CounterTravels'
import { useRequest } from 'ahooks'
import { getRoutes, receive } from '../../services/antecipation'
import { GetRoutesDTO } from '../../services/antecipation/types'
import { AntecipationConfirmation } from '../../components/AntecipationConfirmation'
import { toast } from 'react-toastify'

import * as Styled from './styles'

export function AntecipationCredit() {
  const [routes, setRoutes] = useState<GetRoutesDTO['routes']>([])
  const [advancedTotal, setAdvanceTotal] = useState(0)
  const [receivedTotal, setReceivedTotal] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState<
    GetRoutesDTO['routes'][any] | null
  >(null)

  const { runAsync: runGetRoutes } = useRequest(getRoutes, {
    manual: true,
    onError: (err) => {
      toast.error('Falha ao carregar viagems.', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
    },
    onSuccess: (response) => {
      setReceivedTotal(response.data.receivedTotal)
      setAdvanceTotal(response.data.advancedTotal)
      setRoutes(response.data.routes)
    },
  })

  const { runAsync: runReceive } = useRequest(receive, {
    manual: true,
    onError: (err) => {
      toast.error('Falha ao antecipar saldo.', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
    },
    onSuccess: () => {
      handleCloseDrawer()
      fetchRoutes()
      toast.success('Saldo antecipado!', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
    },
  })

  function handleOpenDrawer(route: GetRoutesDTO['routes'][any]) {
    setSelectedRoute(route)
    setOpenDrawer(true)
  }

  function handleCloseDrawer() {
    setOpenDrawer(false)
  }

  function handleConfirm() {
    runReceive({ id: '447839', route: String(selectedRoute?.id) })
  }

  useEffect(() => {
    fetchRoutes()
  }, [])

  async function fetchRoutes() {
    runGetRoutes({ id: '447839' })
  }

  return (
    <Styled.Wrapper>
      <CardBalance
        advancedTotal={advancedTotal}
        receivedTotal={receivedTotal}
      />
      <CounterTravels count={routes?.length ?? 0} />
      <Styled.CardsWrapper>
        {routes.map((route) => (
          <CardDataFreights
            key={route.id}
            route={route}
            handleOpen={() => handleOpenDrawer(route)}
          />
        ))}
      </Styled.CardsWrapper>
      <AntecipationConfirmation
        title='Deseja antecipar o saldo?'
        description='Para prosseguir aceite os termos e confirme o valor da antecipação abaixo.'
        open={openDrawer}
        handleClose={handleCloseDrawer}
        handleConfirm={handleConfirm}
        selectedRoute={selectedRoute}
      />
    </Styled.Wrapper>
  )
}
