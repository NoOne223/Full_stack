const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Static middleware để phục vụ các file HTML từ thư mục public
app.use(express.static('public'));

// Route mặc định, trả về file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'publics', 'index.html'));
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});