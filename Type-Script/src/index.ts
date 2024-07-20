import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { studentResolvers } from "./resolvers/estudianteResolver";
import { carreraResolvers } from "./resolvers/carreraResolvers"
import { requisitoResolvers } from "./resolvers/requisitoResolvers";
import { estudiantePorRequisitoResolvers } from "./resolvers/estudiantePorRequisitoResolver";
import { empresaResolvers } from './resolvers/empresaResolvers';
import { estadoResolvers } from './resolvers/estadoResolvers';
import { practicaResolvers } from './resolvers/practicaResolvers';

const resolvers = {
    Query: {
        ...studentResolvers.Query,
        ...carreraResolvers.Query,
        ...requisitoResolvers.Query,
        ...estudiantePorRequisitoResolvers.Query,
        ...empresaResolvers.Query,
        ...estadoResolvers.Query,
        ...practicaResolvers.Query,
    },
    Mutation: {
        ...studentResolvers.Mutation,
        ...carreraResolvers.Mutation,
        ...requisitoResolvers.Mutation,
        ...estudiantePorRequisitoResolvers.Mutation,
        ...empresaResolvers.Mutation,
        ...estadoResolvers.Mutation,
        ...practicaResolvers.Mutation,
    },

};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
