import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.km6};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.km6};
`
