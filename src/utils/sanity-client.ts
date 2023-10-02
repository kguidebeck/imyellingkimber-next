import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, 
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})