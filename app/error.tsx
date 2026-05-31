"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-8">
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">Something went wrong</h2>
      <p className="text-muted mb-8 text-center max-w-md">
        There was an unexpected error loading the portfolio data.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 border border-accent text-accent rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-black transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
