import { gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';

const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = gql(fs.readFileSync(schemaPath, 'utf8'));

export { typeDefs };
