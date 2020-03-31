import grpc from 'grpc';
import path from 'path';
import { IGreeterService, GreeterClient, IGreeterClient } from './greeter/greeter_grpc_pb';
import { HelloRequest } from './greeter/greeter_pb';

const greeterClient = new GreeterClient('localhost:3001', grpc.credentials.createInsecure());
const helloRequest = new HelloRequest();
helloRequest.setName('안녕!!!');
greeterClient.sayHello(helloRequest, (err, res) => {
  console.log('err', err);
  console.log('res', res);
})

greeterClient.sayStHello((err, res) => {
  console.log('stream err', err);
  console.log('stream res', res);
})
