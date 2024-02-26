import { atom } from 'nanostores';
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

export const sidebarCollasped = atom(true);
