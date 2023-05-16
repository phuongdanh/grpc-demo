// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_message_pb = require('./user_message_pb.js');

function serialize_protos_GetUserRequest(arg) {
  if (!(arg instanceof user_message_pb.GetUserRequest)) {
    throw new Error('Expected argument of type protos.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetUserRequest(buffer_arg) {
  return user_message_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetUserResponse(arg) {
  if (!(arg instanceof user_message_pb.GetUserResponse)) {
    throw new Error('Expected argument of type protos.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetUserResponse(buffer_arg) {
  return user_message_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateUserRequest(arg) {
  if (!(arg instanceof user_message_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type protos.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateUserRequest(buffer_arg) {
  return user_message_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateUserResponse(arg) {
  if (!(arg instanceof user_message_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type protos.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateUserResponse(buffer_arg) {
  return user_message_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UploadUserAvatarRequest(arg) {
  if (!(arg instanceof user_message_pb.UploadUserAvatarRequest)) {
    throw new Error('Expected argument of type protos.UploadUserAvatarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UploadUserAvatarRequest(buffer_arg) {
  return user_message_pb.UploadUserAvatarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UploadUserAvatarResponse(arg) {
  if (!(arg instanceof user_message_pb.UploadUserAvatarResponse)) {
    throw new Error('Expected argument of type protos.UploadUserAvatarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UploadUserAvatarResponse(buffer_arg) {
  return user_message_pb.UploadUserAvatarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  get: {
    path: '/protos.User/get',
    requestStream: false,
    responseStream: false,
    requestType: user_message_pb.GetUserRequest,
    responseType: user_message_pb.GetUserResponse,
    requestSerialize: serialize_protos_GetUserRequest,
    requestDeserialize: deserialize_protos_GetUserRequest,
    responseSerialize: serialize_protos_GetUserResponse,
    responseDeserialize: deserialize_protos_GetUserResponse,
  },
  update: {
    path: '/protos.User/update',
    requestStream: false,
    responseStream: false,
    requestType: user_message_pb.UpdateUserRequest,
    responseType: user_message_pb.UpdateUserResponse,
    requestSerialize: serialize_protos_UpdateUserRequest,
    requestDeserialize: deserialize_protos_UpdateUserRequest,
    responseSerialize: serialize_protos_UpdateUserResponse,
    responseDeserialize: deserialize_protos_UpdateUserResponse,
  },
  upload: {
    path: '/protos.User/upload',
    requestStream: true,
    responseStream: false,
    requestType: user_message_pb.UploadUserAvatarRequest,
    responseType: user_message_pb.UploadUserAvatarResponse,
    requestSerialize: serialize_protos_UploadUserAvatarRequest,
    requestDeserialize: deserialize_protos_UploadUserAvatarRequest,
    responseSerialize: serialize_protos_UploadUserAvatarResponse,
    responseDeserialize: deserialize_protos_UploadUserAvatarResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
