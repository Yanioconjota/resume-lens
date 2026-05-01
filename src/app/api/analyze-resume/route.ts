import { NextResponse } from 'next/server';
import { mockAnalysisResult } from '@/test/mocks';

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

    // TODO: Implement actual file parsing and AI analysis
    // For now, return mock data
    return NextResponse.json({
      ...mockAnalysisResult,
      analysis: {
        ...mockAnalysisResult.analysis,
        targetRole,
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
