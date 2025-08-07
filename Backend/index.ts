import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3003;

app.use(cors());

app.get("/api/scrape", async (req, res) => {
  console.log("Initiating search...") //Just for checking availability of service

  const keyword = req.query.keyword?.toString();
  if (!keyword) return res.status(400).json({ error: "Keyword is required" });

  const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

  try {
    //Send request to amazon and store data in html
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0", // Prevent 503 error
      },
    });

    const dom = new JSDOM(html);
    const document = dom.window.document;

    //After having a document to work with of the first page of results, separate and get only necessary and formated
    const items = [...document.querySelectorAll('.s-result-item[data-component-type="s-search-result"]')].slice(0, 10).map((item) => {
      const title = item.querySelector("a h2 span")?.textContent?.trim();
      const rating = item.querySelector("span.a-icon-alt")?.textContent?.trim();
      const reviews = item.querySelector("a.a-link-normal .s-underline-text")?.textContent?.trim();
      const image = item.querySelector("img")?.src;

      return { title, rating, reviews, image };
    }).filter(p => p.title); // Filter out empty entries

    //Send already mapped results back

    res.json(items);
    
  } catch (e) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
