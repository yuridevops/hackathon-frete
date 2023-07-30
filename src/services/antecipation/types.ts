export type GetRoutesDTO = {
  routes: {
    id: number
    person_id: number
    received: boolean
    origin: string
    destiny: string
    origin_date: string
    destiny_date: string
    negotiated_amount: string
    advance_amount: string
    received_amount: string
    created_at: Date
    updated_at: Date
    person: {
      id: number
      cpf: string
      created_at: Date
      updated_at: Date
    }
  }[]
  advancedTotal: number
  receivedTotal: number
}
