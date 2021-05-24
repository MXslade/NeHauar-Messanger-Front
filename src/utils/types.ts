export interface IMessage {
  user: string;
  message: string;
}

export interface IChat {
  id: number;
  name?: string;
  messages?: IMessage[];
  imageSrc?: string;
  firstUserId: number;
  secondUserId: number;
  firstUser: IUser;
  secondUser: IUser;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
}

export interface IAuthenticateDto {
  username: string;
  password: string;
}

export interface IRegisterDto {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
