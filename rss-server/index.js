import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();

const parse = async url => {
  const feed = await parser.parseURL(url);

  console.log(feed.title);
}

parse(feedURL);