# Playwright UI Automation Tests

This repository contains UI automation tests built with **Playwright**, using  
https://practicetestautomation.com as a practice website.

The project focuses on validating common UI behaviors, login functionality, and
handling typical UI automation exceptions.

---
```
URL: https://practicetestautomation.com
OS : Windows 11
IDE : Visual Studio Code
```
---

## 🧪 Test Coverage

### 🔐 Authentication
- Login test scenarios

### ⚠️ UI Exception Handling
The following Selenium-style exceptions are covered and handled using Playwright best practices:
- NoSuchElementException
- ElementNotInteractableException
- InvalidElementStateException
- StaleElementReferenceException
- TimeoutException

Each test demonstrates the root cause of the issue and the correct automation approach to handle it.

---
## 📁 Project Structure

```
tests/
      ├─ login.spec.js # Login automation tests
      ├─ testexception.spec.js # UI exception handling scenarios
```
