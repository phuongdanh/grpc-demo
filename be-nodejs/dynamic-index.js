const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('protos/user_service.proto');
const packageObject = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(packageObject.protos.UserService.service, {
  list: (call, callback) => {
  },
  get: (call, callback) => {
  },
  create: (call, callback) => {
  },
});

const serverAddress = '0.0.0.0:50051';
server.bind(serverAddress, grpc.ServerCredentials.createInsecure());
server.start();
console.log(`gRPC server listening on ${serverAddress}`);
