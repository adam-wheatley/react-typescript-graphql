/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        REACT_APP_REFRESH_TOKEN_API: string
        REACT_APP_GRAPHQL_API: string
    }
}