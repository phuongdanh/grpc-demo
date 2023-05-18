///
//  Generated code. Do not modify.
//  source: user_service.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'user_message.pb.dart' as $2;
export 'user_service.pb.dart';

class UserClient extends $grpc.Client {
  static final _$get =
      $grpc.ClientMethod<$2.GetUserRequest, $2.GetUserResponse>(
          '/protos.User/get',
          ($2.GetUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $2.GetUserResponse.fromBuffer(value));
  static final _$update =
      $grpc.ClientMethod<$2.UpdateUserRequest, $2.UpdateUserResponse>(
          '/protos.User/update',
          ($2.UpdateUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $2.UpdateUserResponse.fromBuffer(value));
  static final _$upload = $grpc.ClientMethod<$2.UploadUserAvatarRequest,
          $2.UploadUserAvatarResponse>(
      '/protos.User/upload',
      ($2.UploadUserAvatarRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $2.UploadUserAvatarResponse.fromBuffer(value));

  UserClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$2.GetUserResponse> get($2.GetUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$get, request, options: options);
  }

  $grpc.ResponseFuture<$2.UpdateUserResponse> update(
      $2.UpdateUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$update, request, options: options);
  }

  $grpc.ResponseFuture<$2.UploadUserAvatarResponse> upload(
      $async.Stream<$2.UploadUserAvatarRequest> request,
      {$grpc.CallOptions? options}) {
    return $createStreamingCall(_$upload, request, options: options).single;
  }
}

abstract class UserServiceBase extends $grpc.Service {
  $core.String get $name => 'protos.User';

  UserServiceBase() {
    $addMethod($grpc.ServiceMethod<$2.GetUserRequest, $2.GetUserResponse>(
        'get',
        get_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $2.GetUserRequest.fromBuffer(value),
        ($2.GetUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$2.UpdateUserRequest, $2.UpdateUserResponse>(
        'update',
        update_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $2.UpdateUserRequest.fromBuffer(value),
        ($2.UpdateUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$2.UploadUserAvatarRequest,
            $2.UploadUserAvatarResponse>(
        'upload',
        upload,
        true,
        false,
        ($core.List<$core.int> value) =>
            $2.UploadUserAvatarRequest.fromBuffer(value),
        ($2.UploadUserAvatarResponse value) => value.writeToBuffer()));
  }

  $async.Future<$2.GetUserResponse> get_Pre(
      $grpc.ServiceCall call, $async.Future<$2.GetUserRequest> request) async {
    return get(call, await request);
  }

  $async.Future<$2.UpdateUserResponse> update_Pre($grpc.ServiceCall call,
      $async.Future<$2.UpdateUserRequest> request) async {
    return update(call, await request);
  }

  $async.Future<$2.GetUserResponse> get(
      $grpc.ServiceCall call, $2.GetUserRequest request);
  $async.Future<$2.UpdateUserResponse> update(
      $grpc.ServiceCall call, $2.UpdateUserRequest request);
  $async.Future<$2.UploadUserAvatarResponse> upload($grpc.ServiceCall call,
      $async.Stream<$2.UploadUserAvatarRequest> request);
}
