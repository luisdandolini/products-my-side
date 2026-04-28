"use client";

import ErrorState from "@/src/shared/components/ErrorState";

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return <ErrorState reset={reset} />;
}
