import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
// additional
const port = 5000
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.orabhw6.mongodb.net/`

// const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.orabhw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useUnifiedTopology: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
// export async function connectToCluster(uri) {
//     let mongoClient;

//     try {
//         mongoClient = new MongoClient(uri);
//         console.log('Connecting to MongoDB Atlas cluster...');
//         await mongoClient.connect();
//         console.log('Successfully connected to MongoDB Atlas!');

//         return mongoClient;
//     } catch (error) {
//         console.error('Connection to MongoDB Atlas failed!', error);
//         process.exit();
//     }
// }
