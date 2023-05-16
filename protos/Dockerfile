FROM golang:alpine3.16

WORKDIR /go/src

RUN apk update && apk add git
RUN apk add protoc

COPY go.mod go.sum ./

ARG CGO_ENABLED=0
ARG GOOS=linux

RUN go install github.com/cosmtrek/air@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest

RUN go mod tidy