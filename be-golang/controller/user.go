package controller

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"os"

	"grpc-demo-golang/protos"
	"grpc-demo-golang/resource"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type User struct {
	protos.UnimplementedUserServer
}

func (s *User) Get(ctx context.Context, request *protos.GetUserRequest) (*protos.GetUserResponse, error) {
	user, err := resource.GetUser(request.GetId())
	if err != nil {
		newErr := status.Errorf(codes.NotFound, "Could not found user")
		return nil, newErr
	}

	return &protos.GetUserResponse{
		Data: marshalUser(user),
	}, nil
}

func (s *User) Update(ctx context.Context, request *protos.UpdateUserRequest) (*protos.UpdateUserResponse, error) {
	user, err := resource.UpdateUser(request.GetId(), request.GetName(), request.GetEmail())
	if err != nil {
		newErr := status.Errorf(codes.NotFound, "Could not found user")
		return nil, newErr
	}

	return &protos.UpdateUserResponse{
		Data: marshalUser(user),
	}, nil
}

func (*User) Upload(stream protos.User_UploadServer) error {
	imageData := bytes.Buffer{}
	var id int32
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			goto END
		}
		if err != nil {
			return err
		}
		id = req.GetId()
		chunk := req.GetImage()
		_, err = imageData.Write(chunk)
		if err != nil {
			return fmt.Errorf("cannot write chunk data: %v", err)
		}
	}
END:
	fileName := "../database/storage/avatar_" + fmt.Sprint(id) + ".png"
	file, err := os.Create(fileName)
	if err != nil {
		return fmt.Errorf("cannot create image file: %w", err)
	}
	_, err = imageData.WriteTo(file)
	if err != nil {
		return fmt.Errorf("cannot write image to file: %w", err)
	}
	stream.SendAndClose(&protos.UploadUserAvatarResponse{
		Url: fileName,
	})
	return nil
}

func marshalUser(user *resource.UserModel) *protos.UserMessage {
	return &protos.UserMessage{
		Id:     user.ID,
		Name:   user.Name,
		Email:  user.Email,
		Avatar: user.Avatar,
	}
}
