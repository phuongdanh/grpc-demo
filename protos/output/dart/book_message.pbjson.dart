///
//  Generated code. Do not modify.
//  source: book_message.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use bookMessageDescriptor instead')
const BookMessage$json = const {
  '1': 'BookMessage',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'title', '3': 2, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'image', '3': 3, '4': 1, '5': 9, '10': 'image'},
    const {'1': 'price', '3': 4, '4': 1, '5': 1, '10': 'price'},
    const {'1': 'author_id', '3': 5, '4': 1, '5': 5, '10': 'authorId'},
    const {'1': 'author', '3': 6, '4': 1, '5': 11, '6': '.protos.AuthorMessage', '10': 'author'},
  ],
};

/// Descriptor for `BookMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List bookMessageDescriptor = $convert.base64Decode('CgtCb29rTWVzc2FnZRIOCgJpZBgBIAEoBVICaWQSFAoFdGl0bGUYAiABKAlSBXRpdGxlEhQKBWltYWdlGAMgASgJUgVpbWFnZRIUCgVwcmljZRgEIAEoAVIFcHJpY2USGwoJYXV0aG9yX2lkGAUgASgFUghhdXRob3JJZBItCgZhdXRob3IYBiABKAsyFS5wcm90b3MuQXV0aG9yTWVzc2FnZVIGYXV0aG9y');
@$core.Deprecated('Use authorMessageDescriptor instead')
const AuthorMessage$json = const {
  '1': 'AuthorMessage',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `AuthorMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List authorMessageDescriptor = $convert.base64Decode('Cg1BdXRob3JNZXNzYWdlEg4KAmlkGAEgASgFUgJpZBISCgRuYW1lGAIgASgJUgRuYW1l');
@$core.Deprecated('Use listBookRequestDescriptor instead')
const ListBookRequest$json = const {
  '1': 'ListBookRequest',
};

/// Descriptor for `ListBookRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List listBookRequestDescriptor = $convert.base64Decode('Cg9MaXN0Qm9va1JlcXVlc3Q=');
@$core.Deprecated('Use listBookResponseDescriptor instead')
const ListBookResponse$json = const {
  '1': 'ListBookResponse',
  '2': const [
    const {'1': 'data', '3': 1, '4': 3, '5': 11, '6': '.protos.BookMessage', '10': 'data'},
  ],
};

/// Descriptor for `ListBookResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List listBookResponseDescriptor = $convert.base64Decode('ChBMaXN0Qm9va1Jlc3BvbnNlEicKBGRhdGEYASADKAsyEy5wcm90b3MuQm9va01lc3NhZ2VSBGRhdGE=');
@$core.Deprecated('Use createBookRequestDescriptor instead')
const CreateBookRequest$json = const {
  '1': 'CreateBookRequest',
  '2': const [
    const {'1': 'title', '3': 1, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'image', '3': 2, '4': 1, '5': 9, '10': 'image'},
    const {'1': 'price', '3': 3, '4': 1, '5': 1, '10': 'price'},
    const {'1': 'author_id', '3': 4, '4': 1, '5': 5, '10': 'authorId'},
  ],
};

/// Descriptor for `CreateBookRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createBookRequestDescriptor = $convert.base64Decode('ChFDcmVhdGVCb29rUmVxdWVzdBIUCgV0aXRsZRgBIAEoCVIFdGl0bGUSFAoFaW1hZ2UYAiABKAlSBWltYWdlEhQKBXByaWNlGAMgASgBUgVwcmljZRIbCglhdXRob3JfaWQYBCABKAVSCGF1dGhvcklk');
@$core.Deprecated('Use createBookResponseDescriptor instead')
const CreateBookResponse$json = const {
  '1': 'CreateBookResponse',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 11, '6': '.protos.BookMessage', '10': 'data'},
  ],
};

/// Descriptor for `CreateBookResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createBookResponseDescriptor = $convert.base64Decode('ChJDcmVhdGVCb29rUmVzcG9uc2USJwoEZGF0YRgBIAEoCzITLnByb3Rvcy5Cb29rTWVzc2FnZVIEZGF0YQ==');
@$core.Deprecated('Use deleteBookRequestDescriptor instead')
const DeleteBookRequest$json = const {
  '1': 'DeleteBookRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
  ],
};

/// Descriptor for `DeleteBookRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deleteBookRequestDescriptor = $convert.base64Decode('ChFEZWxldGVCb29rUmVxdWVzdBIOCgJpZBgBIAEoBVICaWQ=');
@$core.Deprecated('Use deleteBookResponseDescriptor instead')
const DeleteBookResponse$json = const {
  '1': 'DeleteBookResponse',
};

/// Descriptor for `DeleteBookResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deleteBookResponseDescriptor = $convert.base64Decode('ChJEZWxldGVCb29rUmVzcG9uc2U=');
