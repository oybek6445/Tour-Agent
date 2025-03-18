const express = require('express');
const connectDB = require('./db'); 
const tourRoutes = require('./routes/tourRoutes');
const guideRoutes = require('./routes/guideRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/tours', tourRoutes);
app.use('/guides', guideRoutes);
app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
