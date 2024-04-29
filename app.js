const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

// Rute untuk halaman index.html
app.get('/spin_task', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  // Rute untuk halaman spintask.html
  app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'spintask.html'));
  });

  // Rute untuk halaman support.html
  app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'support.html'));
  });
  