import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

const feedURL = "https://netflixtechblog.com/feed";
const parser = new RSSParser();

let articles = [];

const parseFeed = async () => {
  try {
    const feed = await parser.parseURL(feedURL);
    articles = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
    }));
    console.log("Feed parsed successfully");
  } catch (error) {
    console.error("Failed to parse RSS feed:", error);
  }
};

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(articles);
});

const PORT = 4000;

const server = app.listen(PORT, async () => {
  await parseFeed();
  console.log(`App is listening at http://localhost:${PORT}/`);
});

export default server;
