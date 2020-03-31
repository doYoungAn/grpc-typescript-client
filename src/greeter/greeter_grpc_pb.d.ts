// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayStHello: IGreeterService_ISayStHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloResponse> {
    path: string; // "/greeter.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloResponse>;
}
interface IGreeterService_ISayStHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloResponse> {
    path: string; // "/greeter.Greeter/SayStHello"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
    sayStHello: grpc.handleClientStreamingCall<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
}

export interface IGreeterClient {
    sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayStHello(callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    sayStHello(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    sayStHello(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    sayStHello(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayStHello(callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    public sayStHello(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    public sayStHello(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
    public sayStHello(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientWritableStream<greeter_pb.HelloRequest>;
}
