# Authentication Docs
The Authentication app is located in the `backend/authentication` directory and Mainy focuses on the authentication process for incoming requests.

For endpoints that require authentication, the `Authorization: Bearer <Access Token>` header must be included in the request.

## User Registration
```
curl -X POST http://127.0.0.1:8000/api/auth/register/ \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com", "password": "password123", "password2": "password123"}'

```
if success return the Success message and `201` Status code fails `400` status code and json errors.

```
RESPONCE<201>{
    "message": "User registered successfully"
},
RESPONCE<400>{
    "email": [
        "A user with that email already exists."
    ]
}
```

## User Login

```
curl -X POST http://127.0.0.1:8000/api/auth/login/ \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com", "password": "password123"}'

```
if success return the Success message and `202` Accepted Status code fails `401` status code and json error messages.

```
Responce<202>{
    "error": "Invalid credentials"
},
Responce<401>{
    "refresh": "...",
    "access": "..."
}
```

## Generate Refersh Token

```
curl -X POST http://127.0.0.1:8000/api/auth/token/refresh/ \
     -H "Content-Type: application/json" \
     -d '{"refresh": "current_refresh_token_here"}'

```

## Grab the data after Login
1. follow the step user Registration
2. follow the step user Login
3. Get the access token and send `GET` Request to `/api/test/`
```
curl -X GET http://127.0.0.1:8000/api/auth/test-login/ \
    -H "Authorization: Bearer < Access Token >" 

RESPONSE<200>{
    "user": "testuser",
    "status": "Login Successfull"
}

Fails,
1: RESPONSE<401>{
    "detail": "Given token not valid for any token type",
    "code": "token_not_valid",
    "messages": [
        {
            "token_class": "AccessToken",
            "token_type": "access",
            "message": "Token is invalid"
        }
    ]
},
2: RESPONSE<401>{
    "detail": "Authentication credentials were not provided."
}...
```



