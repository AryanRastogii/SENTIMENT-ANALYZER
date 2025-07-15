import boto3
import uuid
import json
from datetime import datetime

comprehend = boto3.client('comprehend')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('SentimentResults')

def lambda_handler(event, context):
    body = json.loads(event.get('body', '{}'))
    text = body.get('text')

    if not text:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'No text provided'})
        }

    sentiment_result = comprehend.detect_sentiment(Text=text, LanguageCode='en')

    record = {
        'id': str(uuid.uuid4()),
        'text': text,
        'sentiment': sentiment_result['Sentiment'],
        'sentiment_scores': sentiment_result['SentimentScore'],
        'timestamp': datetime.utcnow().isoformat()
    }

    table.put_item(Item=record)

    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Sentiment analyzed', 'result': record})
    }
