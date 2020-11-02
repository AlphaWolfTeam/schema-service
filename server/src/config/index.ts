import * as env from 'env-var';
import './dotenv';

const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
    },
    client:{
        url: env.get('CLIENT_URL').required().asString(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asUrlString(),
        testUri: 'mongodb://localhost',
        schemaCollectionName: env.get('MONGO_SCHEMA_COLLECTION_NAME').required().asString(),
        propertyCollectionName: env.get('MONGO_PROPERTY_COLLECTION_NAME').required().asString(),
    },
    rabbit: {
        uri: env.get('RABBIT_URI').required().asUrlString(),
        retryOptions: {
            minTimeout: env.get('RABBIT_RETRY_MIN_TIMEOUT').default(1000).asIntPositive(),
            retries: env.get('RABBIT_RETRY_RETRIES').default(10).asIntPositive(),
            factor: env.get('RABBIT_RETRY_FACTOR').default(1.8).asFloatPositive(),
        },
        queueName: env.get('QUEUE_NAME').required().asString()
    },
};

export default config;