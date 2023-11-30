const express = require('express');
const malScraper = require('mal-scraper');
const app = express();
const port = 3000;

app.use(express.static('public')); // to serve static files

app.get('/search-anime', async (req, res) => {
  try {
    const animeName = req.query.name;
    const rawData = await malScraper.getInfoFromName(animeName);
    
    // Format the data into a model
    const animeData = {
      title: rawData.title,
      picture: rawData.picture,
      synopsis: rawData.synopsis,
      // ... include other details you need
    };

    res.json(animeData);
  } catch (error) {
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
