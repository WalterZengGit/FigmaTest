const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const path = require("path");

app.use(cors());

// 設定正確的靜態圖片路徑
app.use("/assets", express.static(path.join(__dirname, "assets")));

// API: 輪播圖
app.get("/carousel", (req, res) => {
  res.json({
    data: [
      `http://localhost:${port}/assets/carousel/01.jpg`,
      `http://localhost:${port}/assets/carousel/02.jpg`,
      `http://localhost:${port}/assets/carousel/03.jpg`,
    ],
  });
});

// API: 關於我們
app.get("/about", (req, res) => {
  res.json({
    data: "<p>我們致力於提供最優質的充電服務。</p><p>請查看<span style='color:red'>方案列表</span>了解我們提供的服務與價格</p>",
  });
});

// API: 方案列表
app.get("/plans", (req, res) => {
  res.json({
    data: [
      { name: "超快充", price: 200 },
      { name: "快充", price: 100 },
      { name: "慢充", price: 50 },
    ],
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});