import { InjectionToken } from '@angular/core';

export interface SessionStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): string;
}

export let SESSION_STORAGE_TOKEN = new InjectionToken<SessionStorage>('sessionStorage');
