import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/ask", { query });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setResponse("Error fetching response from the backend.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Chatbot</h1>
      <textarea rows="4" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type your query here..."/>
      <button onClick={handleQuery} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Submit
      </button>
      <pre style={{ marginTop: "20px", background: "#f4f4f4", padding: "10px" }}>{response}</pre>
    </div>
  );
};

export default App;
