import * as Sentry from '@sentry/nextjs'
import { ProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_ENV,
  dist: '1',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate
  integrations: [
    // Add profiling integration to list of integrations
    new ProfilingIntegration()
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false
})