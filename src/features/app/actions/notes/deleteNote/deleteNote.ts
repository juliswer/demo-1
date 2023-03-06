import { type Note } from '@common/types/note.types'
import { notesService } from '@features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const deleteNote = createAsyncThunk<Note, string>(
  'app/deleteNote',
  (id) => notesService.delete(id)
)
