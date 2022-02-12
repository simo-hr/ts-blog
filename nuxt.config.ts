import { defineNuxtConfig, } from 'nuxt3'
const {
  GRAPHQL_ENDPOINT,
} = process.env || {}

export default defineNuxtConfig({
  target: 'server',
  server: {
    host: '0.0.0.0', // デフォルト: localhost
    port: Number(process.env.PORT) || 3019, // デフォルト: 3000
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    base: '/_nuxt/',
  },
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT,
  },
  urql: {
    url: GRAPHQL_ENDPOINT,
  },
  buildModules: [
    '@nuxt3-graphql/urql'
  ],
  serverMiddleware: [
    {
      path: '/api/v1',
      handler: '~/server/api/v1',
    },
    {
      path: '/graphql',
      handler: '~/server/graph',
    }
  ],
})
