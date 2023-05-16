const { BookController } = require('./controller/book');
var bookSv = require('./protos/book_service_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {
  var server = new grpc.Server();
  server.addService(bookSv.BookService, BookController);
  server.bindAsync('0.0.0.0:7071', grpc.ServerCredentials.createInsecure(), () => {
    console.log("server run at: '0.0.0.0:7071'")
    server.start();
  });
}

main();