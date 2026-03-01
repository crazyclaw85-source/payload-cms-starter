import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Pages, Posts, Media, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})