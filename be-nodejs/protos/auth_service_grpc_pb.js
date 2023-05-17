// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_message_pb = require('./auth_message_pb.js');

function serialize_protos_LoginRequest(arg) {
  if (!(arg instanceof auth_message_pb.LoginRequest)) {
    throw new Error('Expected argument of type protos.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_LoginRequest(buffer_arg) {
  return auth_message_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_LoginResponse(arg) {
  if (!(arg instanceof auth_message_pb.LoginResponse)) {
    throw new Error('Expected argument of type protos.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_LoginResponse(buffer_arg) {
  return auth_message_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  login: {
    path: '/protos.Auth/login',
    requestStream: false,
    responseStream: false,
    requestType: auth_message_pb.LoginRequest,
    responseType: auth_message_pb.LoginResponse,
    requestSerialize: serialize_protos_LoginRequest,
    requestDeserialize: deserialize_protos_LoginRequest,
    responseSerialize: serialize_protos_LoginResponse,
    responseDeserialize: deserialize_protos_LoginResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
