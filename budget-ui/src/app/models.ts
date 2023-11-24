
export interface User {
  username: String;
  password: String;
  firstName: String;
  lastName: String;
    email: String;
}

export interface ServerResponse {
  success: boolean,
  message: string
  body: any
}

export interface LoginRequest {
  username: String;
  password: String;
}

export interface Transaction {
  title: String;
  amount: BigInt;
  categoryId: String,
  createdDate: String
}
