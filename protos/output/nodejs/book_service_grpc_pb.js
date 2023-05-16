// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_message_pb = require('./book_message_pb.js');

function serialize_protos_CreateBookRequest(arg) {
  if (!(arg instanceof book_message_pb.CreateBookRequest)) {
    throw new Error('Expected argument of type protos.CreateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateBookRequest(buffer_arg) {
  return book_message_pb.CreateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateBookResponse(arg) {
  if (!(arg instanceof book_message_pb.CreateBookResponse)) {
    throw new Error('Expected argument of type protos.CreateBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateBookResponse(buffer_arg) {
  return book_message_pb.CreateBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteBookRequest(arg) {
  if (!(arg instanceof book_message_pb.DeleteBookRequest)) {
    throw new Error('Expected argument of type protos.DeleteBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteBookRequest(buffer_arg) {
  return book_message_pb.DeleteBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteBookResponse(arg) {
  if (!(arg instanceof book_message_pb.DeleteBookResponse)) {
    throw new Error('Expected argument of type protos.DeleteBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteBookResponse(buffer_arg) {
  return book_message_pb.DeleteBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListBookRequest(arg) {
  if (!(arg instanceof book_message_pb.ListBookRequest)) {
    throw new Error('Expected argument of type protos.ListBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListBookRequest(buffer_arg) {
  return book_message_pb.ListBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListBookResponse(arg) {
  if (!(arg instanceof book_message_pb.ListBookResponse)) {
    throw new Error('Expected argument of type protos.ListBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListBookResponse(buffer_arg) {
  return book_message_pb.ListBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookService = exports.BookService = {
  list: {
    path: '/protos.Book/list',
    requestStream: false,
    responseStream: false,
    requestType: book_message_pb.ListBookRequest,
    responseType: book_message_pb.ListBookResponse,
    requestSerialize: serialize_protos_ListBookRequest,
    requestDeserialize: deserialize_protos_ListBookRequest,
    responseSerialize: serialize_protos_ListBookResponse,
    responseDeserialize: deserialize_protos_ListBookResponse,
  },
  create: {
    path: '/protos.Book/create',
    requestStream: false,
    responseStream: false,
    requestType: book_message_pb.CreateBookRequest,
    responseType: book_message_pb.CreateBookResponse,
    requestSerialize: serialize_protos_CreateBookRequest,
    requestDeserialize: deserialize_protos_CreateBookRequest,
    responseSerialize: serialize_protos_CreateBookResponse,
    responseDeserialize: deserialize_protos_CreateBookResponse,
  },
  delete: {
    path: '/protos.Book/delete',
    requestStream: false,
    responseStream: false,
    requestType: book_message_pb.DeleteBookRequest,
    responseType: book_message_pb.DeleteBookResponse,
    requestSerialize: serialize_protos_DeleteBookRequest,
    requestDeserialize: deserialize_protos_DeleteBookRequest,
    responseSerialize: serialize_protos_DeleteBookResponse,
    responseDeserialize: deserialize_protos_DeleteBookResponse,
  },
};

exports.BookClient = grpc.makeGenericClientConstructor(BookService);
