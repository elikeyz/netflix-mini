import { InjectionToken } from '@angular/core';

export interface SessionStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): string;
}

export const SESSION_STORAGE_TOKEN = new InjectionToken<SessionStorage>('sessionStorage');
