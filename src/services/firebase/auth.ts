import { getAuth } from 'firebase/auth';
import { app } from './connection';

const auth = getAuth(app);

export { auth };