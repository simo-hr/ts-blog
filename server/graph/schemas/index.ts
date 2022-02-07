import { schemaComposer, } from 'graphql-compose'

// TypeDefs
import PostTypeDef from './post/type-def'

// Resolvers
import PostResolver from './post/resolver'

// Add TypeDefs
schemaComposer.addTypeDefs(PostTypeDef)

// Add Resolvers
schemaComposer.addResolveMethods(PostResolver)

const schema = schemaComposer.buildSchema()

export default schema
