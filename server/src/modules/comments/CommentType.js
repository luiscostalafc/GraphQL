import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from "graphql-iso-date";

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLString)
    },
    orderBy: {
      type: GraphQLDateTime
    }
  }
})