import { type FilterBase } from '@common/types/filterBase.types'
import { notesService } from '@features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Note } from '@common/types/note.types'

export const findNotes = createAsyncThunk<
  { count: number; notes: Note[] },
  FilterBase
>('app/findNotes', (filters) => notesService.find(filters))
