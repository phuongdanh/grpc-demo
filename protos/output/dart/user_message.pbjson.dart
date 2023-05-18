///
//  Generated code. Do not modify.
//  source: user_message.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use userMessageDescriptor instead')
const UserMessage$json = const {
  '1': 'UserMessage',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'email', '3': 3, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'about', '3': 5, '4': 1, '5': 9, '10': 'about'},
    const {'1': 'avatar', '3': 6, '4': 1, '5': 9, '10': 'avatar'},
    const {'1': 'created_at', '3': 7, '4': 1, '5': 9, '10': 'createdAt'},
    const {'1': 'updated_at', '3': 8, '4': 1, '5': 9, '10': 'updatedAt'},
  ],
};

/// Descriptor for `UserMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List userMessageDescriptor = $convert.base64Decode('CgtVc2VyTWVzc2FnZRIOCgJpZBgBIAEoBVICaWQSEgoEbmFtZRgCIAEoCVIEbmFtZRIUCgVlbWFpbBgDIAEoCVIFZW1haWwSFAoFYWJvdXQYBSABKAlSBWFib3V0EhYKBmF2YXRhchgGIAEoCVIGYXZhdGFyEh0KCmNyZWF0ZWRfYXQYByABKAlSCWNyZWF0ZWRBdBIdCgp1cGRhdGVkX2F0GAggASgJUgl1cGRhdGVkQXQ=');
@$core.Deprecated('Use getUserRequestDescriptor instead')
const GetUserRequest$json = const {
  '1': 'GetUserRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
  ],
};

/// Descriptor for `GetUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getUserRequestDescriptor = $convert.base64Decode('Cg5HZXRVc2VyUmVxdWVzdBIOCgJpZBgBIAEoBVICaWQ=');
@$core.Deprecated('Use getUserResponseDescriptor instead')
const GetUserResponse$json = const {
  '1': 'GetUserResponse',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 11, '6': '.protos.UserMessage', '10': 'data'},
  ],
};

/// Descriptor for `GetUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getUserResponseDescriptor = $convert.base64Decode('Cg9HZXRVc2VyUmVzcG9uc2USJwoEZGF0YRgBIAEoCzITLnByb3Rvcy5Vc2VyTWVzc2FnZVIEZGF0YQ==');
@$core.Deprecated('Use updateUserRequestDescriptor instead')
const UpdateUserRequest$json = const {
  '1': 'UpdateUserRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'email', '3': 3, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'about', '3': 5, '4': 1, '5': 9, '10': 'about'},
  ],
};

/// Descriptor for `UpdateUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateUserRequestDescriptor = $convert.base64Decode('ChFVcGRhdGVVc2VyUmVxdWVzdBIOCgJpZBgBIAEoBVICaWQSEgoEbmFtZRgCIAEoCVIEbmFtZRIUCgVlbWFpbBgDIAEoCVIFZW1haWwSFAoFYWJvdXQYBSABKAlSBWFib3V0');
@$core.Deprecated('Use updateUserResponseDescriptor instead')
const UpdateUserResponse$json = const {
  '1': 'UpdateUserResponse',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 11, '6': '.protos.UserMessage', '10': 'data'},
  ],
};

/// Descriptor for `UpdateUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateUserResponseDescriptor = $convert.base64Decode('ChJVcGRhdGVVc2VyUmVzcG9uc2USJwoEZGF0YRgBIAEoCzITLnByb3Rvcy5Vc2VyTWVzc2FnZVIEZGF0YQ==');
@$core.Deprecated('Use uploadUserAvatarRequestDescriptor instead')
const UploadUserAvatarRequest$json = const {
  '1': 'UploadUserAvatarRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'image', '3': 2, '4': 1, '5': 12, '10': 'image'},
  ],
};

/// Descriptor for `UploadUserAvatarRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List uploadUserAvatarRequestDescriptor = $convert.base64Decode('ChdVcGxvYWRVc2VyQXZhdGFyUmVxdWVzdBIOCgJpZBgBIAEoBVICaWQSFAoFaW1hZ2UYAiABKAxSBWltYWdl');
@$core.Deprecated('Use uploadUserAvatarResponseDescriptor instead')
const UploadUserAvatarResponse$json = const {
  '1': 'UploadUserAvatarResponse',
  '2': const [
    const {'1': 'url', '3': 1, '4': 1, '5': 9, '10': 'url'},
  ],
};

/// Descriptor for `UploadUserAvatarResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List uploadUserAvatarResponseDescriptor = $convert.base64Decode('ChhVcGxvYWRVc2VyQXZhdGFyUmVzcG9uc2USEAoDdXJsGAEgASgJUgN1cmw=');
