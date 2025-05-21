// config.ts
// Loads environment variables for Playwright tests

export const BASE_URL = process.env.BASE_URL || 'http://localhost:4200';
export const LOGIN_URL = process.env.LOGIN_URL || '/login';
export const PROJECTS_URL = process.env.PROJECTS_URL || '/projects';
export const USERS_ADD_URL = process.env.USERS_ADD_URL || '/users/add';
export const USERS_URL = process.env.USERS_URL || '/users';
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '2222222@user.com';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '123@Dorrayan';
export const ADMIN_FIRST_NAME = process.env.ADMIN_FIRST_NAME || 'Auto Test';
export const ADMIN_LAST_NAME = process.env.ADMIN_LAST_NAME || 'User';
export const ADMIN_ROLE = process.env.ADMIN_ROLE || 'Admin';
export const ADMIN_TIMEZONE = process.env.ADMIN_TIMEZONE || 'Asia/Tehran (+03:30)';
export const ADMIN_PASSWORD_NEW = process.env.ADMIN_PASSWORD_NEW || '123@Dorrayan';
export const ADMIN_JOB_TITLE = process.env.ADMIN_JOB_TITLE || 'QA Engineer';
export const ADMIN_COMPANY = process.env.ADMIN_COMPANY || 'Dorrayan';
export const ADMIN_EMAIL_DOMAIN = process.env.ADMIN_EMAIL_DOMAIN || '@auto-test.com';
