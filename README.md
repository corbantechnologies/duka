# Duka Service API

## Features

### User Management & Authentication

- [x] Create New Account
- [x] Verify Account
- [x] User login
- [x] Sign in with Google
- [x] Password Reset
- [x] User detail

#### Endpoints

- `POST /api/auth/login/` - User Login
- `POST /api/auth/signup/vendor/` - Vendor Signup
- `POST /api/auth/signup/customer/` - Customer Signup
- `GET /api/auth/<str:id>/` - User Detail
- `POST /api/auth/password/reset/` - Forgot Password
- `POST /api/auth/password/new/` - Reset Password
- `POST /api/auth/google/redirect/` - Google Sign In
