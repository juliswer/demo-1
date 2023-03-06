import { createSlice } from '@reduxjs/toolkit'
import { notesExtraReducers } from '@features/app/store/notes.extraReducers'
import { type Note } from '@common/types/note.types'
import { type FilterBase } from '@/common/types/filterBase.types'

export interface AppState {
  note: Note
  notes: Note[]
  notesCount: number
  filters: FilterBase
  isLoading: boolean
  isOpenDrawer: boolean
}

export const initialAppState: AppState = {
  note: {} as Note,
  notes: [],
  notesCount: 0,
  filters: { limit: 100, page: 1, search: '' },
  isLoading: false,
  isOpenDrawer: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setIsOpenDrawer: (state, { payload }: { payload: boolean }) => {
      state.isOpenDrawer = payload
    },
    setNote: (state, { payload }: { payload: Note }) => {
      state.note = payload
    },
  },
  extraReducers: (builder) => {
    notesExtraReducers(builder)
  },
})

export const { setIsOpenDrawer, setNote } = appSlice.actions
