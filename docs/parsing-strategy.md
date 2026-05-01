# Parsing Strategy

## Overview

Text extraction from uploaded files before AI processing.

## Supported Formats

### PDF
- Library: `pdf-parse`
- Extracts text from text-based PDFs
- Does not support scanned/image PDFs
- Preserves basic structure

### DOCX
- Library: `mammoth`
- Extracts text content
- Ignores formatting/styles
- Handles modern Word documents

### TXT
- Direct text reading
- UTF-8 encoding assumed
- No parsing required

## Text Normalization

After extraction, text is normalized:

1. **Whitespace cleanup**
   - Collapse multiple spaces
   - Normalize line endings
   - Trim leading/trailing whitespace

2. **Character normalization**
   - Convert smart quotes to regular quotes
   - Handle special characters
   - Remove control characters

3. **Section detection** (future)
   - Identify common section headers
   - Preserve structure hints for AI

## Error Handling

| Scenario | Action |
|----------|--------|
| Empty file | Return error |
| No extractable text | Return error with suggestion |
| Encoding issues | Attempt UTF-8, fallback to Latin-1 |
| Corrupted file | Return error |

## File Validation

Before parsing:
1. Check file extension
2. Check MIME type
3. Check file size
4. Attempt extraction

## Future Enhancements

- OCR for scanned documents
- DOC (legacy Word) support
- RTF support
- Better structure preservation
