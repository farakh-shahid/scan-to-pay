export const PORT = 'port';
export const saltOrRounds = 10;
export const DESCENDING_ORDER = 'desc';
export const JWT_SECRET = 'JWT_SECRET';
export const JWT_EXPIRES_TIME = '5d';

export const SUCCESS_MESSAGES = {
  CREATEMESSAGE: (name: string) => `${name} has been created Successfully`,
  UPDATEMESSAGE: (name: string) => `${name} has been updated Successfully`,
  DELETEMESSAGE: (name: string) => `${name} has been deleted Successfully`,
};

export const ERROR_MESSAGES = {
  EMAIL_TAKEN: 'Email ALready Taken',
  NOT_FOUND: 'No record found for given ID',
  NOT_REGISTERED: 'You are Not Registered User',
  PASSWORD_EMAIL_INVALID: 'Email or Password is Invalid',
  SESSION_EXPIRED: 'Your Session has expired! Please sign In',
  FOREIGN_KEY_VIOLATION: 'Foreign key constraint violation.',
  TRANSACTION_ROLLBACK: 'Transaction rollback.',
  INVALID_INPUT_VALUE: 'Invalid input value.',
};

export const HTTP_METHOD = {
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  GET: 'GET',
};
