## 📦 Amazon Scraper Project

A simple fullstack Amazon scraper app using **Bun + Express + Axios + JSDOM** for the backend and **Vite + Vanilla JS + HTML/CSS** for the frontend.

This project lets you search for a keyword and view scraped product titles, ratings, reviews, and images from Amazon’s 10 first items of its first search result page.

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/brayanleo1/TaskScrapAmazon_Trainee-JuniorFullStackDeveloper.git
cd TaskScrapAmazon_Trainee-JuniorFullStackDeveloper 
```

---

### 2. Setup & Run Backend (Bun)

#### ⚙️ Requirements

* [Bun](https://bun.sh) must be installed (version ≥ 1.0)

#### 📁 Navigate to backend folder

Since the backend is inside a subfolder:

```bash
cd Backend
```

#### 📦 Install dependencies

```bash
bun install
```

#### ▶️ Run the backend server

```bash
bun run index.ts
```

> The server will start at [http://localhost:3003](http://localhost:3003)

---

### 3. Setup & Run Frontend (Vite + Vanilla JS)

#### 📁 Navigate to frontend folder (or root if it's combined)

The frontend is inside of another folder so:

```bash
cd ..\Frontend\amazon-scraper
```

#### 📦 Install dependencies

```bash
npm install
```

#### ▶️ Run the Vite dev server

```bash
npm run dev
```

> Vite will give you a URL like:
> `http://localhost:5173` or similar, depending on port availability
> Open that in your browser.

---

### 4. ✅ Using the App

* Enter a search keyword (e.g., **laptop**, **headphones**, etc.)
* Click the **Search** button
* The frontend will make a request to the backend’s `/api/scrape` endpoint
* Scraped product info will appear below the input field

---

## 📝 Notes

* ⚠️ Scraping Amazon can result in rate-limiting or CAPTCHAs if overused. This is a simplified version for the purpose of basic skill verification.

---