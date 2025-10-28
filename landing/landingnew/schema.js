import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import your document types
import blogPost from './blogPost'
import lifestylePost from './lifestylePost' // <--- import it

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blogPost, lifestylePost]),
})
