export interface Scope {
  id: string;
  name: string;
  description: string;
}
export interface Role {
  id: string;
  name: string;
  description?: string;
  scopes: Array<Scope>;
}

export interface User {
  id: string | null;
  userId: string;
  fullName: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  isBlocked: boolean;
  isDelete: boolean;
  role: Role | null;
}

export const DEFAULT_USER: User = {
  birthday: 'acjhdcb',
  email: '',
  fullName: '',
  isActive: false,
  isBlocked: false,
  isDelete: false,
  phoneNumber: '',
  role: null,
  userId: '',
  id: null,
};

export const DEFAULT_SCOPE: Scope = {
  id: '',
  name: '',
  description: '',
};
