// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('user melakukan login dengan kredensial yang benar', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL berubah ke halaman sukses
  await expect(page).toHaveURL(/.*logged-in-successfully/);

  // 5. (Opsional) Cek teks di halaman sukses
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});

test('user melakukan login dengan password yang salah', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password yang salah
  await page.fill('#username', 'student');
  await page.fill('#password', '1230987');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL tidak berubah ke halaman sukses
  await expect(page).not.toHaveURL(/.*logged-in-successfully/);

  // 5. Muncul pesan error
  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
})

test('user melakukan login dengan username yang salah', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password yang salah
  await page.fill('#username', 'usernamesalah');
  await page.fill('#password', 'Password123');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL tidak berubah ke halaman sukses
  await expect(page).not.toHaveURL(/.*logged-in-successfully/);

  // 5. Muncul pesan error
  await expect(page.locator('#error')).toHaveText('Your username is invalid!');
})

test('user melakukan login dengan username kosong', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password yang salah
  await page.fill('#username', '');
  await page.fill('#password', 'Password123');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL tidak berubah ke halaman sukses
  await expect(page).not.toHaveURL(/.*logged-in-successfully/);

  // 5. Muncul pesan error
  await expect(page.locator('#error')).toHaveText('Your username is invalid!');
})

test('user melakukan login dengan password kosong', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password yang salah
  await page.fill('#username', 'student');
  await page.fill('#password', '');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL tidak berubah ke halaman sukses
  await expect(page).not.toHaveURL(/.*logged-in-successfully/);

  // 5. Muncul pesan error
  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
})

test('user berhasil melakukan logout', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Isi username & password yang benar
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // 3. Klik tombol login
  await page.click('#submit');

  // 4. Verifikasi: URL ke halaman sukses
  await expect(page).toHaveURL(/.*logged-in-successfully/);

  // 5. Muncul pesan berhasil
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  //6. Klik tombol logout
  await page.click('text=Log out');

  //7. Verifikasi: URL ke halaman login
  await expect(page).toHaveURL(/.*practice-test-login/);

  //8. Muncul halaman Test login
  await expect(page.locator('h2')).toHaveText('Test login');

})