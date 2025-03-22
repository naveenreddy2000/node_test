const config = require('./src/constants').config
const { app, connectDB } = require('./src/app')
const port = config.port;

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
