import { authSlice } from '@features/auth/store/auth.slice'
import { appSlice } from '@features/app/store/app.slice'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from '@store/ui/ui.slice'

export const rootStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    app: appSlice.reducer,
  },
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
