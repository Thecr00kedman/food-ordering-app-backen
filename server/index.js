import express from 'express'
import Connection from './Database/db.js';
import cors from 'cors'
import Routes from './Routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import { options } from './config.js';
import dotenv from 'dotenv'


const app = express();

dotenv.config()
const DB_USERNAME=process.env.DB_USERNAME
const DB_PASSWORD=process.env.DB_PASSWORD

app.use(cors({
    origin: ["https://foodzone-b1d68.web.app"],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE']

}))
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true , limit: "100mb"}))
app.use(bodyParser.json())

const swaggerdoc = swaggerJSDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerdoc));
app.use(cookieParser(
    
));


app.use('/',Routes);

const PORT= 8000;




Connection(DB_USERNAME,DB_PASSWORD);

app.listen(PORT,()=>console.log(`server is running at ${PORT}`))