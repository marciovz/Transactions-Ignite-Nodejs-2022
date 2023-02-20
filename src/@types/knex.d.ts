// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/table' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      session_id?: string
      created_at: string
    }
  }
}
