# 🧠 Serverless Sentiment Analysis App

This is a full-stack **Serverless Sentiment Analyzer** that takes user input and returns the sentiment (Positive, Negative, Neutral, Mixed) using **AWS Comprehend**. Results are stored in **DynamoDB**, with a sleek **React frontend** interacting via **API Gateway** and **Lambda**.

---

## 🚀 Features

- 🧠 Real-time **Sentiment Analysis** using Amazon Comprehend
- ⚡ Serverless backend with AWS Lambda
- 📡 API Gateway for secure HTTP endpoints
- 💾 Stores results in DynamoDB with timestamp
- 💻 Clean and responsive React frontend
- ✅ CORS enabled and deploy-ready

---

## 🛠️ Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Frontend  | React, Axios             |
| Backend   | AWS Lambda               |
| NLP       | Amazon Comprehend        |
| Storage   | Amazon DynamoDB          |
| API Layer | API Gateway              |
| Auth      | (Optional) Cognito       |
| Infra     | 100% Serverless (No EC2) |

---

## 📦 Project Structure


sentiment-analyzer/
├── src/
│   ├── App.js
│   ├── index.js
│   └── App.css
├── public/
│   └── index.html
├── lambda/
│   └── sentimentAnalyzer.py
├── README.md
└── package.json

🧠 How It Works
	1.	User submits a text via React frontend
	2.	Axios sends a POST request to API Gateway
	3.	API Gateway triggers a Lambda function
	4.	Lambda uses Amazon Comprehend to analyze sentiment
	5.	Lambda stores the result in DynamoDB
	6.	Response is sent back and displayed to the user
