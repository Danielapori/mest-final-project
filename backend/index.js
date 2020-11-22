const http = require('http')

const app = require('./app');


const server = http.createServer(app);


PORT = 5000;
server.listen(PORT, ()=> console.log(`Server Listening on 'localhost(127.0.0.1)' at PORT: ${PORT}`))