# Notes App API Documentation

## Base URL

```
http://localhost:5000
```

## Authentication Endpoints

### 1. Register User

**POST** `/api/auth/register`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
}
```

---

### 2. Login User

**POST** `/api/auth/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
}
```

---

### 3. Get Profile

**GET** `/api/auth/me`

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2026-01-13T..."
  }
}
```

---

### 4. Update Profile

**PUT** `/api/auth/profile`

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "John Updated",
  "email": "john.new@example.com"
}
```

---

## Notes Endpoints (All require authentication)

### 5. Create Note

**POST** `/api/notes`

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "title": "My First Note",
  "content": "This is the content of my note",
  "tags": ["personal", "important"],
  "color": "#ffeb3b"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {
    "_id": "note_id",
    "title": "My First Note",
    "content": "This is the content of my note",
    "tags": ["personal", "important"],
    "color": "#ffeb3b",
    "user": "user_id",
    "createdAt": "2026-01-13T...",
    "updatedAt": "2026-01-13T..."
  }
}
```

---

### 6. Get All Notes

**GET** `/api/notes`

**Headers:**

```
Authorization: Bearer <token>
```

**Query Parameters (Optional):**

- `search` - Search in title and content (e.g., `?search=important`)
- `tags` - Filter by tags (e.g., `?tags=personal,work`)

**Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "note_id_1",
      "title": "Note 1",
      "content": "Content 1",
      "tags": ["personal"],
      "color": "#ffeb3b",
      "createdAt": "2026-01-13T..."
    },
    {
      "_id": "note_id_2",
      "title": "Note 2",
      "content": "Content 2",
      "tags": ["work"],
      "color": "#4caf50",
      "createdAt": "2026-01-12T..."
    }
  ]
}
```

---

### 7. Get Single Note

**GET** `/api/notes/:id`

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "note_id",
    "title": "My Note",
    "content": "Note content",
    "tags": ["personal"],
    "color": "#ffeb3b",
    "user": "user_id",
    "createdAt": "2026-01-13T...",
    "updatedAt": "2026-01-13T..."
  }
}
```

---

### 8. Update Note

**PUT** `/api/notes/:id`

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body (all fields optional):**

```json
{
  "title": "Updated Title",
  "content": "Updated content",
  "tags": ["updated"],
  "color": "#ff5722"
}
```

---

### 9. Delete Note

**DELETE** `/api/notes/:id`

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "message": "Note deleted successfully",
  "data": {}
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common Status Codes:**

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (not authorized to access resource)
- `404` - Not Found
- `500` - Server Error

---

## How to Test

### Using PowerShell (Windows):

**1. Register:**

```powershell
$body = @{ name="Test User"; email="test@test.com"; password="test123" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method POST -Body $body -ContentType "application/json"
```

**2. Login & Save Token:**

```powershell
$body = @{ email="test@test.com"; password="test123" } | ConvertTo-Json
$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" -Method POST -Body $body -ContentType "application/json"
$token = $response.data.token
```

**3. Create Note:**

```powershell
$headers = @{ Authorization="Bearer $token" }
$body = @{ title="My Note"; content="Hello World"; tags=@("test") } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/notes" -Method POST -Headers $headers -Body $body -ContentType "application/json"
```

**4. Get All Notes:**

```powershell
$headers = @{ Authorization="Bearer $token" }
Invoke-RestMethod -Uri "http://localhost:5000/api/notes" -Method GET -Headers $headers
```
