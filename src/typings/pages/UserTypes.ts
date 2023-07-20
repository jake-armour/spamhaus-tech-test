export interface IUserData {
  id: number;
  cc: string;
  name: string;
  "modified-by": string;
  "updated-ts": number;
}

export interface IEditAndCreateData {
  cc: string;
  name: string;
}
