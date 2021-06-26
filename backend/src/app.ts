import express, { Application } from 'express';
import UserRoutes from './routes/UserRoutes';
import config from './config/config';
import logging from './config/logging';
import mongoose from 'mongoose';

const NAMESPACE: string = 'Fimmit Server';
const router: Application = express();

/** Connect to MongoDB */
mongoose.connect(config.mongo.url, config.mongo.options).then((result) => {
    logging.info(NAMESPACE, 'Mongo Connected');
}).catch((error) => {
    console.log(config.mongo.url);
    logging.error(NAMESPACE, error.message, error);
});

/** Parse the body of the request */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** API Routes */
router.use('/api/user', UserRoutes);

router.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));