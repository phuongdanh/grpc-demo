package main

import (
	"fmt"
	"grpc-demo-golang/controller"
	"grpc-demo-golang/protos"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	initServer()
}

func initServer() {
	host := "0.0.0.0:7070"
	lis, err := net.Listen("tcp", (host))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	protos.RegisterAuthServer(s, &controller.Auth{})
	protos.RegisterUserServer(s, &controller.User{})
	fmt.Println("Server is running at:", host)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
		return
	}
}
