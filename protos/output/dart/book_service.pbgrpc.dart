///
//  Generated code. Do not modify.
//  source: book_service.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'book_message.pb.dart' as $1;
export 'book_service.pb.dart';

class BookClient extends $grpc.Client {
  static final _$list =
      $grpc.ClientMethod<$1.ListBookRequest, $1.ListBookResponse>(
          '/protos.Book/list',
          ($1.ListBookRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $1.ListBookResponse.fromBuffer(value));
  static final _$create =
      $grpc.ClientMethod<$1.CreateBookRequest, $1.CreateBookResponse>(
          '/protos.Book/create',
          ($1.CreateBookRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $1.CreateBookResponse.fromBuffer(value));
  static final _$delete =
      $grpc.ClientMethod<$1.DeleteBookRequest, $1.DeleteBookResponse>(
          '/protos.Book/delete',
          ($1.DeleteBookRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $1.DeleteBookResponse.fromBuffer(value));

  BookClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$1.ListBookResponse> list($1.ListBookRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$list, request, options: options);
  }

  $grpc.ResponseFuture<$1.CreateBookResponse> create(
      $1.CreateBookRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$create, request, options: options);
  }

  $grpc.ResponseFuture<$1.DeleteBookResponse> delete(
      $1.DeleteBookRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$delete, request, options: options);
  }
}

abstract class BookServiceBase extends $grpc.Service {
  $core.String get $name => 'protos.Book';

  BookServiceBase() {
    $addMethod($grpc.ServiceMethod<$1.ListBookRequest, $1.ListBookResponse>(
        'list',
        list_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.ListBookRequest.fromBuffer(value),
        ($1.ListBookResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.CreateBookRequest, $1.CreateBookResponse>(
        'create',
        create_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.CreateBookRequest.fromBuffer(value),
        ($1.CreateBookResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.DeleteBookRequest, $1.DeleteBookResponse>(
        'delete',
        delete_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.DeleteBookRequest.fromBuffer(value),
        ($1.DeleteBookResponse value) => value.writeToBuffer()));
  }

  $async.Future<$1.ListBookResponse> list_Pre(
      $grpc.ServiceCall call, $async.Future<$1.ListBookRequest> request) async {
    return list(call, await request);
  }

  $async.Future<$1.CreateBookResponse> create_Pre($grpc.ServiceCall call,
      $async.Future<$1.CreateBookRequest> request) async {
    return create(call, await request);
  }

  $async.Future<$1.DeleteBookResponse> delete_Pre($grpc.ServiceCall call,
      $async.Future<$1.DeleteBookRequest> request) async {
    return delete(call, await request);
  }

  $async.Future<$1.ListBookResponse> list(
      $grpc.ServiceCall call, $1.ListBookRequest request);
  $async.Future<$1.CreateBookResponse> create(
      $grpc.ServiceCall call, $1.CreateBookRequest request);
  $async.Future<$1.DeleteBookResponse> delete(
      $grpc.ServiceCall call, $1.DeleteBookRequest request);
}
