import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bikeRoutes from './modules/vehicle/vehicleRoute';
import rideRoutes from './modules/ride/rideRoutes';
import { routeConstrands } from './utils/route_constrands';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Throtl API up and running 🏍️🔥');
});

app.use(routeConstrands.vehicleRoute, bikeRoutes);
app.use(routeConstrands.rideRoute,rideRoutes );

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('MongoDB connected 🚀');
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
