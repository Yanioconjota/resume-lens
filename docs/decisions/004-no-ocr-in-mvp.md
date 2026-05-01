# ADR 004: No OCR in MVP

## Status
Accepted

## Context
Some users may upload scanned PDFs (images) instead of text-based PDFs.

## Decision
Do not support OCR in the MVP. Only process text-extractable documents.

## Rationale

### Why No OCR
- Adds significant complexity
- Requires additional services (Tesseract, cloud OCR)
- Increases processing time
- Edge case for initial target users
- Can be added later

### Mitigation
- Clear messaging about supported formats
- Validate that text can be extracted
- Return helpful error if file appears to be scanned
- Suggest users use text-based exports

## Supported Formats

| Format | Support |
|--------|---------|
| PDF (text-based) | Yes |
| PDF (scanned) | No |
| DOCX | Yes |
| TXT | Yes |
| DOC (legacy) | No |

## Consequences
- Some users with scanned PDFs cannot use the tool
- Simpler implementation for MVP
- Clear scope boundary
- Can revisit in future version
