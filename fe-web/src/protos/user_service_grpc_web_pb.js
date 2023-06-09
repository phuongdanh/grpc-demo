/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: user_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var user_message_pb = require('./user_message_pb.js')
const proto = {};
proto.protos = require('./user_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.UserClient =
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
proto.protos.UserPromiseClient =
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
 *   !proto.protos.GetUserRequest,
 *   !proto.protos.GetUserResponse>}
 */
const methodDescriptor_User_get = new grpc.web.MethodDescriptor(
  '/protos.User/get',
  grpc.web.MethodType.UNARY,
  user_message_pb.GetUserRequest,
  user_message_pb.GetUserResponse,
  /**
   * @param {!proto.protos.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.User/get',
      request,
      metadata || {},
      methodDescriptor_User_get,
      callback);
};


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.User/get',
      request,
      metadata || {},
      methodDescriptor_User_get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.UpdateUserRequest,
 *   !proto.protos.UpdateUserResponse>}
 */
const methodDescriptor_User_update = new grpc.web.MethodDescriptor(
  '/protos.User/update',
  grpc.web.MethodType.UNARY,
  user_message_pb.UpdateUserRequest,
  user_message_pb.UpdateUserResponse,
  /**
   * @param {!proto.protos.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.User/update',
      request,
      metadata || {},
      methodDescriptor_User_update,
      callback);
};


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.User/update',
      request,
      metadata || {},
      methodDescriptor_User_update);
};


module.exports = proto.protos;

