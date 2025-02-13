export interface IUSERS {
  users: IUSER[];
}

export interface IUSER {
  name: string;
  userName: string;
  email: string;
  isActive: string;
  createdAt: string;
}

export interface ICREATEUSER extends Omit<IUSER, "isActive" | "createdAt"> {
  password: string;
}

export interface ILOGIN
  extends Omit<IUSER, "createdAt" | "isActive" | "name" | "email"> {
  password: string;
}

export interface IENCRYPT {
  text: string;
}
