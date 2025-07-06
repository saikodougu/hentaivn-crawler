const express = require('express');
const crawlChapter = require('./crawler');
const app = express();

app.get('/crawl', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send('Thiếu URL');

    try {
        const imageUrls = await crawlChapter(url);
        res.json(imageUrls);
    } catch (err) {
        console.error('Lỗi khi crawl:', err);
        res.status(500).send('Đã có lỗi xảy ra khi crawl');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`));