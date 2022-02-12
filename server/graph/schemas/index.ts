import { schemaComposer, } from 'graphql-compose'

// TypeDefs
import PostTypeDef from './post/type-def'
import AdminTypeDef from './admin/type-def'

// Resolvers
import PostResolver from './post/resolver'
import AdminResolver from './admin/resolver'

// Add TypeDefs
schemaComposer.addTypeDefs(PostTypeDef)
schemaComposer.addTypeDefs(AdminTypeDef)

// Add Resolvers
schemaComposer.addResolveMethods(PostResolver)
schemaComposer.addResolveMethods(AdminResolver)

const schema = schemaComposer.buildSchema()

export default schema
