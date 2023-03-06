import { type Roles } from '@common/enums/roles.enum'

export type UserRequest = {
  id?: string
  role?: Roles
  email: string
  firstName: string
  lastName: string
  image: string
}
