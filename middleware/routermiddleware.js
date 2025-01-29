import express from 'express';
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log('Router-Level Middleware');
  next();
});

router.get('/route', (req, res) => {
  res.send('This is a router-level middleware example.');
});

app.use('/api', router);

app.listen(3000, () => console.log('Server running on port 3000'));
