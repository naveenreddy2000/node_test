const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Test API endpoint
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello, your API is working!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
