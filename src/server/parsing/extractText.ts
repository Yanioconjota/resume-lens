import { extractTextFromPdf } from './extractTextFromPdf';
import { extractTextFromDocx } from './extractTextFromDocx';
import { extractTextFromTxt } from './extractTextFromTxt';
import { normalizeExtractedText } from './normalizeExtractedText';

export type SupportedMimeType =
  | 'application/pdf'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'text/plain';

export async function extractText(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const mimeType = file.type as SupportedMimeType;

  let rawText: string;

  switch (mimeType) {
    case 'application/pdf':
      rawText = await extractTextFromPdf(buffer);
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      rawText = await extractTextFromDocx(buffer);
      break;
    case 'text/plain':
      rawText = await extractTextFromTxt(buffer);
      break;
    default:
      throw new Error(`Unsupported file type: ${mimeType}`);
  }

  return normalizeExtractedText(rawText);
}
