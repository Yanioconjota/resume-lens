'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { TargetRoleSelector, type TargetRole } from '@/features/target-role';
import { ResumeDropzone, useResumeUpload } from '@/features/resume-upload';

export default function AnalyzePage() {
  const router = useRouter();
  const [targetRole, setTargetRole] = useState<TargetRole | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    file,
    isDragging,
    error: uploadError,
    handleFile,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    clearFile,
  } = useResumeUpload();

  const canAnalyze = file && targetRole && !isAnalyzing;

  const handleAnalyze = async () => {
    if (!file || !targetRole) return;

    setIsAnalyzing(true);
    setApiError(null);

    try {
      // For now, navigate to results with mock data
      // In the future, this will call the API
      router.push('/results');
    } catch (error) {
      setApiError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Analyze Your Resume"
        description="Select your target role and upload your resume to get personalized feedback."
      />

      <div className="space-y-8">
        {/* Step 1: Target Role */}
        <Card>
          <CardContent className="py-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                1
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                Choose Your Target Role
              </h2>
            </div>
            <TargetRoleSelector value={targetRole} onChange={setTargetRole} />
          </CardContent>
        </Card>

        {/* Step 2: Upload Resume */}
        <Card>
          <CardContent className="py-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                2
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                Upload Your Resume
              </h2>
            </div>
            <ResumeDropzone
              file={file}
              isDragging={isDragging}
              error={uploadError}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onFileSelect={handleFile}
              onClear={clearFile}
            />
          </CardContent>
        </Card>

        {/* API Error */}
        {apiError && (
          <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{apiError}</span>
            </div>
          </div>
        )}

        {/* Analyze Button */}
        <div className="flex justify-end">
          <Button
            size="lg"
            disabled={!canAnalyze}
            isLoading={isAnalyzing}
            onClick={handleAnalyze}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
          </Button>
        </div>

        {/* Help Text */}
        {!file && !targetRole && (
          <p className="text-center text-sm text-gray-500">
            Select a target role and upload your resume to get started.
          </p>
        )}
      </div>
    </div>
  );
}
