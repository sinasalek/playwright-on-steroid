import { ADMIN_COMPANY, ADMIN_EMAIL, ADMIN_EMAIL_DOMAIN, ADMIN_FIRST_NAME, ADMIN_JOB_TITLE, ADMIN_LAST_NAME, ADMIN_PASSWORD, ADMIN_PASSWORD_NEW, ADMIN_ROLE, ADMIN_TIMEZONE, LOGIN_URL, PROJECTS_URL, USERS_ADD_URL, USERS_URL, BASE_URL } from '@/config/config';
import { expect, Page, test } from '@playwright/test';
test.use({ ignoreHTTPSErrors: true });

async function adminLogin(page: Page) {
    await page.goto(`${BASE_URL}${LOGIN_URL}`);
    await page.locator('input[formcontrolname="email"]').fill(ADMIN_EMAIL);
    await page.locator('input[formcontrolname="password"]').fill(ADMIN_PASSWORD);
    await page.getByText('Login').click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(`${BASE_URL}${PROJECTS_URL}`);
}

async function createAdminAccount(page: Page) {
    await page.goto(`${BASE_URL}${USERS_ADD_URL}`);
    await page.locator('input[formcontrolname="first_name"]').fill(ADMIN_FIRST_NAME);
    await page.locator('input[formcontrolname="last_name"]').fill(ADMIN_LAST_NAME);
    await page.locator('ng-select[ng-reflect-placeholder="Select Role"]')
        .locator('input').click();
    await page.getByText(ADMIN_ROLE).click();
    await page.locator('ng-select[ng-reflect-placeholder="Time Zone"]')
        .locator('input').click();
    await page.getByText(ADMIN_TIMEZONE).click();

    const randomEmail = Math.floor(Math.random() * 1000000) + ADMIN_EMAIL_DOMAIN;

    await page.locator('input[formcontrolname="email"]').fill(randomEmail);
    await page.locator('input[formcontrolname="password"]').fill(ADMIN_PASSWORD_NEW);
    await page.locator('input[formcontrolname="confirm_password"]').fill(ADMIN_PASSWORD_NEW);
    await page.locator('input[formcontrolname="job_title"]').fill(ADMIN_JOB_TITLE);
    await page.locator('input[formcontrolname="company"]').fill(ADMIN_COMPANY);
    await page.getByText('Save').click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(`${BASE_URL}${USERS_URL}`);
}


test('admin login', async ({ page }) => {
    await adminLogin(page);
});

test('create admin account', async ({ page }) => {
    await adminLogin(page);
    await createAdminAccount(page);
    // Add further steps for new admin account here
});