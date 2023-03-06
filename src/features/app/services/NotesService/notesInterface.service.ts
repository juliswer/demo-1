import { type FilterBase } from '@/common/types/filterBase.types'
import { type Note } from '@common/types/note.types'

export interface INotesService {
  find: ({ limit, page, search }: FilterBase) => any

  findById: (id: string) => any

  save: (note: Note) => any

  update: (note: Note) => any

  delete: (id: string) => any
}
