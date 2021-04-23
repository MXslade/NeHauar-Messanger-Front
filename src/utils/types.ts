export interface IMessage {
  user: string;
  message: string;
}

export interface IChat {
  id: number;
  name: string;
  messages: IMessage[];
  imageSrc: string;
}
