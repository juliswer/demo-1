import { type Note } from '@common/types/note.types'
import {
  appSlice,
  type AppState,
  initialAppState,
} from '@features/app/store/app.slice'
import { saveNote } from '@features/app/actions/notes/saveNote/saveNote'

describe('When saveNote is called', () => {
  let initialState: AppState = initialAppState
  const noteReducer = appSlice.reducer

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    const expected = {} as Note

    const { note } = noteReducer(
      initialState,
      saveNote.fulfilled(expected, '', expected)
    )

    expect(Object.keys(note).length).toBe(Object.keys(expected).length)
  })

  it('and is pending', () => {
    const { isLoading } = noteReducer(initialState, saveNote.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = noteReducer(initialState, saveNote.rejected)

    expect(isLoading).toBeFalsy()
  })
})
