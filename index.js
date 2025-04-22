const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Selamat datang di SENTRAL Top-Up!');
});

app.post('/topup', (req, res) => {
  const { tujuan, produk } = req.body;
  res.json({
    status: 'success',
    message: `Top-up ke ${tujuan} untuk produk ${produk} berhasil (simulasi)`
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
