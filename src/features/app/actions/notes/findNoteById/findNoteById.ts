import { type Note } from '@common/types/note.types'
import { notesService } from '@/features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const findNoteById = createAsyncThunk<Note, string>(
  'app/findNoteById',
  (id) => notesService.findById(id)
)
