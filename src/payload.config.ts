import { buildConfig } from 'payload/config';
import path from 'path';
import { payloadCloud } from '@payloadcms/plugin-cloud';

import { Users } from './collections/Users';
import { Media } from './collections/Media'
import { Homes } from './collections/Homes'
import { UserHomes } from './collections/UserHomes'
import { TaskCategory } from './collections/TaskCategory'
import { Tasks } from './collections/Tasks'

export default buildConfig({
  // serverURL: `http://localhost:3521`,
  cors: ["http://localhost:9000", "http://192.168.1.3:9500"],
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Homes,
    UserHomes,
    TaskCategory,
    Tasks
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
