import React, { useState } from "react";
import "./App.css";

const newsData = [
  {
    id: 1,
    title: "JavaScript Frameworks Comparison 2024",
    description:
      "Detailed analysis of React, Vue, Angular, and Svelte performance and features.",
    author: "Web Dev Journal",
    category: "web-development",
    date: "Oct 8, 2025, 09:58 PM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 2,
    title: "Node.js 20 LTS Now Available",
    description:
      "The new Long Term Support version of Node.js includes stable test runner and permission model.",
    author: "Node.js Foundation",
    category: "technology",
    date: "Oct 8, 2025, 09:58 PM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 3,
    title: "Database Trends 2024: What to Expect",
    description:
      "Exploring the latest trends in database technologies and best practices.",
    author: "Database Weekly",
    category: "database",
    date: "Oct 8, 2025, 09:58 PM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
];

function App() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "technology", "programming", "database", "web-development"];
  const filteredNews =
    filter === "all" ? newsData : newsData.filter((n) => n.category === filter);

  return (
    <div className="app">
      <header className="navbar">
        <h2>📰 NewsApp DB</h2>
        <nav>
          <button className="active">Home</button>
          <button>Bookmarks</button>
          <button>Stats</button>
        </nav>
      </header>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="news-list">
        {filteredNews.map((news) => (
          <div className="card" key={news.id}>
            <img src={news.image} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <div className="meta">
              <span>{news.author}</span> | <span>{news.category}</span>
            </div>
            <div className="footer">
              <span>{news.date}</span>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
