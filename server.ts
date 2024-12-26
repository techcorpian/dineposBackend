import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5001;
const MONGO_URI = 'mongodb://localhost:27017/dinepos';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
