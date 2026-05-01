# Data Flow

## Request Flow

```
User Action          Client                  API                    Server
    │                   │                     │                        │
    │ Select Role       │                     │                        │
    ├──────────────────>│                     │                        │
    │                   │ Store in state      │                        │
    │                   │                     │                        │
    │ Upload File       │                     │                        │
    ├──────────────────>│                     │                        │
    │                   │ Validate (type/size)│                        │
    │                   │                     │                        │
    │ Click Analyze     │                     │                        │
    ├──────────────────>│                     │                        │
    │                   │ POST /api/analyze   │                        │
    │                   ├────────────────────>│                        │
    │                   │                     │ Validate FormData      │
    │                   │                     ├───────────────────────>│
    │                   │                     │                        │
    │                   │                     │ Extract Text           │
    │                   │                     ├───────────────────────>│
    │                   │                     │                        │
    │                   │                     │ AI: Parse Resume       │
    │                   │                     ├───────────────────────>│
    │                   │                     │                        │
    │                   │                     │ AI: Analyze Resume     │
    │                   │                     ├───────────────────────>│
    │                   │                     │                        │
    │                   │                     │ Validate Response      │
    │                   │                     ├───────────────────────>│
    │                   │                     │                        │
    │                   │ JSON Response       │                        │
    │                   │<────────────────────│                        │
    │                   │                     │                        │
    │ Navigate to       │                     │                        │
    │ Results           │                     │                        │
    │<──────────────────│                     │                        │
```

## State Management

### Client State
- Target role selection (React useState)
- File selection and validation (useResumeUpload hook)
- Analysis loading/error state (useResumeAnalysis hook)

### No Persistent State
- No database in MVP
- Files not stored server-side
- Results not persisted after page refresh

## API Contract

### Request: POST /api/analyze-resume

```
Content-Type: multipart/form-data

Fields:
- file: File (PDF, DOCX, or TXT)
- targetRole: string (one of TARGET_ROLES)
```

### Response: Success (200)

```json
{
  "parsedResume": { ... },
  "analysis": { ... }
}
```

### Response: Error (4xx/5xx)

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": { ... }
  }
}
```
