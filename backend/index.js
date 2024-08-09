const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure axios is imported

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "73493b44-a4fb-49f1-9a6e-d483553ecd83" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Handle cases where e.response might be undefined
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle unexpected errors
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
