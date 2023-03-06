import { type Author } from '@common/types/author.types'

export type Note = {
  id: string
  author: Author
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
