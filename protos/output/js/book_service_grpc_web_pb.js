/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: book_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var book_message_pb = require('./book_message_pb.js')
const proto = {};
proto.protos = require('./book_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.BookClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.BookPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.ListBookRequest,
 *   !proto.protos.ListBookResponse>}
 */
const methodDescriptor_Book_list = new grpc.web.MethodDescriptor(
  '/protos.Book/list',
  grpc.web.MethodType.UNARY,
  book_message_pb.ListBookRequest,
  book_message_pb.ListBookResponse,
  /**
   * @param {!proto.protos.ListBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  book_message_pb.ListBookResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.ListBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.BookClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Book/list',
      request,
      metadata || {},
      methodDescriptor_Book_list,
      callback);
};


/**
 * @param {!proto.protos.ListBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListBookResponse>}
 *     Promise that resolves to the response
 */
proto.protos.BookPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Book/list',
      request,
      metadata || {},
      methodDescriptor_Book_list);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.CreateBookRequest,
 *   !proto.protos.CreateBookResponse>}
 */
const methodDescriptor_Book_create = new grpc.web.MethodDescriptor(
  '/protos.Book/create',
  grpc.web.MethodType.UNARY,
  book_message_pb.CreateBookRequest,
  book_message_pb.CreateBookResponse,
  /**
   * @param {!proto.protos.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  book_message_pb.CreateBookResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.CreateBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.BookClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Book/create',
      request,
      metadata || {},
      methodDescriptor_Book_create,
      callback);
};


/**
 * @param {!proto.protos.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateBookResponse>}
 *     Promise that resolves to the response
 */
proto.protos.BookPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Book/create',
      request,
      metadata || {},
      methodDescriptor_Book_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.DeleteBookRequest,
 *   !proto.protos.DeleteBookResponse>}
 */
const methodDescriptor_Book_delete = new grpc.web.MethodDescriptor(
  '/protos.Book/delete',
  grpc.web.MethodType.UNARY,
  book_message_pb.DeleteBookRequest,
  book_message_pb.DeleteBookResponse,
  /**
   * @param {!proto.protos.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  book_message_pb.DeleteBookResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.DeleteBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.BookClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Book/delete',
      request,
      metadata || {},
      methodDescriptor_Book_delete,
      callback);
};


/**
 * @param {!proto.protos.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteBookResponse>}
 *     Promise that resolves to the response
 */
proto.protos.BookPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Book/delete',
      request,
      metadata || {},
      methodDescriptor_Book_delete);
};


module.exports = proto.protos;
