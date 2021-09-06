import { Injectable } from '@nestjs/common';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient, ApolloQueryResult } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { config } from 'dotenv';
import { DocumentNode } from 'graphql';
import fetch from 'node-fetch';

config();

@Injectable()
export class GqlClientService {
    private client: ApolloClient<NormalizedCacheObject> | null;

    constructor() {
        if (
            process.env.GQL_API_URL === undefined ||
            process.env.GQL_API_KEY === undefined
        ) {
            this.client = null;

            return;
        }

        this.client = new ApolloClient<NormalizedCacheObject>({
            link: createHttpLink({
                uri: process.env.GQL_API_URL,
                // eslint-disable-next-line
                // @ts-ignore
                fetch: fetch,
                headers: { Authorization: `Bearer ${process.env.GQL_API_KEY}` },
            }),
            cache: new InMemoryCache(),
        });
    }

    async query(query: DocumentNode): Promise<ApolloQueryResult<any>>;
    async query(
        query: DocumentNode,
        cache: boolean,
    ): Promise<ApolloQueryResult<any>>;
    async query(
        query: DocumentNode,
        variables: any,
    ): Promise<ApolloQueryResult<any>>;
    async query(
        query: DocumentNode,
        variables: any,
        cache: boolean,
    ): Promise<ApolloQueryResult<any>>;
    async query(
        query: DocumentNode,
        variables: any = false,
        cache = false,
    ): Promise<ApolloQueryResult<any>> {
        if (!this.client)
            throw 'GQL client is not available. You must set the environment variables GQL_API_URL and GQL_API_KEY to use this client.';

        if (typeof variables == 'boolean') {
            cache = variables;
            variables = {};
        }

        return await this.client.query({
            query,
            variables,
            fetchPolicy: cache ? 'cache-first' : 'no-cache',
        });
    }

    async mutate(mutation: DocumentNode);
    async mutate(mutation: DocumentNode, variables: any);
    async mutate(mutation: DocumentNode, variables: any = {}) {
        if (!this.client)
            throw 'GQL client is not available. You must set the environment variables GQL_API_URL and GQL_API_KEY to use this client.';
        return await this.client.mutate({ mutation, variables });
    }
}
