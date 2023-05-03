import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//ALL DATA IMPORTS
import User from "./models/User.js";
import{dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat} from "./data/index.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transactions from "./models/Transaction.js"
import Transaction from "./models/Transaction.js";
import OverallStat  from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";


/* SETTING UP CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/**ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/**SETTING UP MONGOOSE */
const PORT = process.env.PORT || 9000;
//either set the StrictQuery option to true globally to suppress the warning in mongoose 7
mongoose.set('strictQuery',true);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    {/**TO AVOID DUPLICATE ERRORS WE ENTERED THE DATA ONCE */}
    //OverallStat.insertMany(dataOverallStat);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
    //User.insertMany(dataUser);
})
.catch((error) => console.log(`${error} did not connect`));