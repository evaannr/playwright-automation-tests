// tests/testexception.spec.js
const { test, expect } = require('@playwright/test');

test('Test case 1: Berhasil menambahkan field row 2 (mengatasi NoSuchElementException)', async ({ page }) => {
  // 1. Buka halaman
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

  // 2. klik add button
  await page.click('#add_btn');

  // Tunggu sampai Row 2 input muncul
  await expect(page.locator('#row2')).toBeVisible({ timeout: 10000 });

  // 3. menampilkan pesan Row 2 was added
  await expect(page.locator('#confirmation')).toHaveText('Row 2 was added');

});

test('Test case 2: Berhasil input di row 2 (mengatasi ElementNotInteractableException)', async ({ page }) => {
  // 1. Buka halaman
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

  // 2. klik add button
  await page.click('#add_btn');

  // Tunggu sampai Row 2 input muncul
  await expect(page.locator('#row2')).toBeVisible({ timeout: 10000 });

  // 3. menampilkan pesan Row 2 was added
  await expect(page.locator('#confirmation')).toHaveText('Row 2 was added');

  // 4. input di row 2
  await page.locator('#row2 input').fill('sushi'); 

  // 5. klik save button
  await page.locator('button[name="Save"]:visible').click();

  // 6. menampilkan pesan Row 2 was saved
  await expect(page.locator('#confirmation')).toHaveText('Row 2 was saved');

});

test('Test case 3: Berhasil edit input di row 1 (mengatasi InvalidElementStateException)', async ({ page }) => {
  // 1. Buka halaman
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

  // Pastikan field ter-disable
  await expect(page.locator('#row1 input')).toBeDisabled();

  // 2. klik edit button (untuk enable input)
  await page.click('#edit_btn');

  // Pastikan field ter-enable
  await expect(page.locator('#row1 input')).toBeEnabled();

  // 3. Clear input field
  await page.locator('#row1 input').clear()

  // 4. input di row 1
  await page.locator('#row1 input').fill('sushi'); 

  // 5. klik save button
  await page.locator('button[name="Save"]:visible').click();

  // 6. verifikasi bahwa text berubah
  await expect(page.locator('#row1 input')).toHaveValue('sushi');

});

test('Test case 4: Memastikan text instruction hilang setelah klik Add button (mengatasi StaleElementReferenceException)', async ({ page }) => {
  // 1. Buka halaman
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

  // Pastikan text instruction ada
  await expect(page.locator('#instructions')).toBeVisible();

  // 2. klik add button
  await page.click('#add_btn');

  // Pastikan text instruction hilang
  await expect(page.locator('#instructions')).toBeHidden();

});

test('Test case 5: memastikan TimeoutException', async ({ page }) => {
  // 1. Buka halaman
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

  // 2. klik add button
  await page.click('#add_btn');

  // Tunggu sampai Row 2 input muncul
  await expect(page.locator('#row2')).toBeVisible({ timeout: 7000 });

});