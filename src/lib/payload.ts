import payload from 'payload'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'
import config from '../payload.config'

export const getPayload = cache(async () => {
  if (process.env.NODE_ENV === 'development') {
    return await getPayloadHMR({ config })
  }
  return payload
})