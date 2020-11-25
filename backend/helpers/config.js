require('dotenv').config();


const PORT=process.env.PORT;
let MONGODB_URL

const MONGODB_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

// switch (process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
    MONGODB_URL=process.env.MONGODB_URI_DEV;
} else if (process.env.NODE_ENV === "development") {
    MONGODB_URL=process.env.MONGODB_URI_PROD;
}



module.exports = {
    PORT,
    MONGODB_URL,
    MONGODB_OPTIONS
}