const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 2000;

app.use(cors());

// Dummy news articles
const newsArticles = [
  {
    title: "India Launches New Space Mission",
    imageUrl: "https://indianspacetechnology.com/wp-content/uploads/2023/12/Aditya-L1-Launch-.jpg",
    description: "ISRO has announced the successful launch of its latest mission to explore Mars."
  },
  {
    title: "Global Markets See Positive Growth",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2rLKGg5zwYBrTcyGA9OJhnhXkkJiGtzDVg&s",
    description: "Stock markets around the world show signs of recovery after a challenging quarter."
  },
  {
    title: "Tech Giant Releases New Smartphone",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTqXSIHVTxsq-WnWW8VBmgh4hPJCO5AFI8g&s",
    description: "The new smartphone features an advanced AI-powered camera and improved battery life."
  },
  {
    title: "Olympics 2025 Preparations Underway",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rUmi1AkF0kCuNhymJ4sLhtYfvmSnUcFWTA&s",
    description: "The host city is gearing up for the Olympics with infrastructure upgrades and events."
  },
  {
    title: "Climate Change Report Highlights Urgency",
    imageUrl: "https://www.policycircle.org/wp-content/uploads/2022/08/climate-endgame-10.jpg",
    description: "A new report stresses immediate action to combat climate change and reduce emissions."
  }
];

// API route to get news
app.get('/api/news', (req, res) => {
  res.json(newsArticles);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
