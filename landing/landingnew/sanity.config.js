import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'landing_new',

  projectId: 'uh2xny5y',
  dataset: 'blog_posts',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
