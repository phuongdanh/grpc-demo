package controller

import (
	"context"

	"grpc-demo-golang/protos"
	"grpc-demo-golang/resource"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Auth struct {
	protos.UnimplementedAuthServer
}

const (
	ACCESS_TOKEN  = "000009897868668686098"
	REFRESH_TOKEN = "098756467564545549769"
)

func (s *Auth) Login(ctx context.Context, request *protos.LoginRequest) (*protos.LoginResponse, error) {
	user, err := resource.Login(request.GetEmail(), request.GetPassword())
	if err != nil {
		newErr := status.Errorf(codes.NotFound, err.Error())
		return nil, newErr
	}

	return &protos.LoginResponse{
		AccessToken:  ACCESS_TOKEN,
		RefreshToken: REFRESH_TOKEN,
		User:         marshalUser(user),
	}, nil
}
