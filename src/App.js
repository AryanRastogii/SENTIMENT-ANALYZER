import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setError("");
    setResult(null);

    if (!text.trim()) {
      setError("Please enter some text.");
      return;
    }

    try {
      const response = await axios.post(
        "https://eequ81mkvc.execute-api.us-east-1.amazonaws.com/analyzer", // 🔁 Replace with your endpoint
        { text },
        { headers: { "Content-Type": "application/json" } }
      );
      setResult(response.data.result);
    } catch (err) {
      setError("Failed to analyze sentiment. " + (err.response?.data?.error || err.message));
      console.error("Full error:", err);
    }
  };

  return (
    <div className="App">
      <h1>🧠 Serverless Sentiment Analyzer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something to analyze..."
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleAnalyze}>Analyze Sentiment</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div className="result-box">
          <h3>Sentiment: {result.sentiment}</h3>
          <pre>{JSON.stringify(result.sentiment_scores, null, 2)}</pre>
          <small>Timestamp: {result.timestamp}</small>
        </div>
      )}
    </div>
  );
}

export default App;