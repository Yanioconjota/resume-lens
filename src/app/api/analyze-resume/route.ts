import { NextResponse } from 'next/server';
import { mockAnalysisResult } from '@/test/mocks';
import { validateFile } from '@/server/validation';
import { extractText } from '@/server/parsing';
import { TARGET_ROLES, type TargetRole } from '@/lib/constants/targetRoles';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const targetRole = formData.get('targetRole') as string | null;

    if (!file) {
      return NextResponse.json(
        { error: { code: 'NO_FILE', message: 'No file provided' } },
        { status: 400 }
      );
    }

    if (!targetRole) {
      return NextResponse.json(
        { error: { code: 'NO_TARGET_ROLE', message: 'No target role provided' } },
        { status: 400 }
      );
    }

    if (!TARGET_ROLES.includes(targetRole as TargetRole)) {
      return NextResponse.json(
        { error: { code: 'INVALID_TARGET_ROLE', message: 'Invalid target role' } },
        { status: 400 }
      );
    }

    const validation = validateFile(file);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const extractedText = await extractText(file);

    if (!extractedText || extractedText.trim().length === 0) {
      return NextResponse.json(
        {
          error: {
            code: 'EMPTY_RESUME',
            message: 'Could not extract any text from the file. Please ensure the file contains readable text.',
          },
        },
        { status: 400 }
      );
    }

    // TODO: Replace with real AI analysis in Slice 6
    // For now, return mock data with extracted text info
    return NextResponse.json({
      ...mockAnalysisResult,
      analysis: {
        ...mockAnalysisResult.analysis,
        targetRole,
      },
      _debug: {
        extractedTextLength: extractedText.length,
        extractedTextPreview: extractedText.substring(0, 500) + (extractedText.length > 500 ? '...' : ''),
      },
    });
  } catch (error) {
    console.error('Error analyzing resume:', error);
    return NextResponse.json(
      {
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An error occurred while analyzing the resume',
        },
      },
      { status: 500 }
    );
  }
}
