export type Device = {
  id?: string;
  name: string;
  deviceType: 'LCDC' | 'IPC';
  ip: string;
  locationId: string;
  active: boolean;
  createdTime: number;
  createdBy: string;
  lastUpdateTime: number;
  lastUpdateBy: string;
};

export const DEFAULT_DEVICE: Device = {
  name: '',
  deviceType: 'LCDC',
  active: false,
  locationId: '',
  createdBy: '',
  createdTime: new Date().getTime(),
  ip: '',
  lastUpdateBy: '',
  lastUpdateTime: new Date().getTime(),
};
