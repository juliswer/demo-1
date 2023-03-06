import { type Note } from '@common/types/note.types'
import { saveNoteCommand } from '@features/app/process/commands/saveNote/saveNote.command'
import { createCommandStack } from '@/features/app/process/create-command.stack'
import { notesService } from '@/features/app/services/NotesService/notes.service'
import { openToastSuccess } from '@store/ui/ui.slice'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const saveNote = createAsyncThunk<Note, Note>(
  'app/saveNote',
  async (note: Note, { dispatch }) => {
    const cStack = createCommandStack<Note>(note)

    const result = await cStack.execute([
      (state) => saveNoteCommand(state, [notesService]),
    ])

    dispatch(openToastSuccess('Note created successfully'))

    return result
  }
)
