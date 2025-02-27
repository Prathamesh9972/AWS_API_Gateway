import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

// Initialize DynamoDB client
const client = new DynamoDBClient({});
const dynamoDb = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log('Event:', JSON.stringify(event));
    
    if (!event.queryStringParameters || !event.queryStringParameters.userid) {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET'
            },
            body: JSON.stringify('Hello from Lambda!')
        };
    }

    const { userid } = event.queryStringParameters;

    const command = new GetCommand({
        TableName: "user_info",
        Key: {
            userid
        }
    });

    try {
        const response = await dynamoDb.send(command);
        console.log('DynamoDB Response:', response);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',      
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET'
            },
            body: JSON.stringify({
                user: response.Item
            })
        };
    } catch (error) {
        console.error('Error:', error);

        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',     
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET'
            },
            body: JSON.stringify({
                message: 'Failed to get user',
                error: error.message
            })
        };
    }
};
