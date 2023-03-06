import { type Roles } from '@common/enums/roles.enum'
import { type Note } from './note.types'

export type Author = {
  id: string
  firstName: string
  lastName: string
  notes: Note[]
  role: Roles
  createdAt: Date
  updatedAt: Date
  image: string
}
