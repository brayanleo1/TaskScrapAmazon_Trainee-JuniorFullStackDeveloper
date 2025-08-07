document.getElementById("searchBtn").onclick = async () => {
  const keyword = document.getElementById("keyword").value;
  const res = await fetch(`http://localhost:3003/api/scrape?keyword=${encodeURIComponent(keyword)}`);
  const data = await res.json();
  const container = document.getElementById("results");

  container.innerHTML = "";
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
  <img src="${item.image}" />
    <div class="info">
      <h3>${item.title}</h3>
      <p><strong>Rating:</strong> ${item.rating || 'N/A'}</p>
      <p><strong>Reviews:</strong> ${item.reviews || 'N/A'}</p>
    </div>
  `;
    container.appendChild(div);
  });
};