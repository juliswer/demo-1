declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DEFAULT_API_URL: string
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
      NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string
    }
  }
}

export {}
