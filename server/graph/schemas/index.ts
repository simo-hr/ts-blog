import { schemaComposer, } from 'graphql-compose'

// TypeDefs
import AdminTypeDef from './admin/type-def'
import PostTypeDef from './post/type-def'
import CategoryTypeDef from './category/type-def'

// Resolvers
import AdminResolver from './admin/resolver'
import PostResolver from './post/resolver'
import CategoryResolver from './category/resolver'

// Add TypeDefs
schemaComposer.addTypeDefs(AdminTypeDef)
schemaComposer.addTypeDefs(PostTypeDef)
schemaComposer.addTypeDefs(CategoryTypeDef)

// Add Resolvers
schemaComposer.addResolveMethods(AdminResolver)
schemaComposer.addResolveMethods(PostResolver)
schemaComposer.addResolveMethods(CategoryResolver)

const schema = schemaComposer.buildSchema()

export default schema
