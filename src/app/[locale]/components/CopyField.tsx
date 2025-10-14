"use client";

import { useState } from "react";

type CopyFieldProps = {
  label: string;
  value: string;
  copyLabel?: string;
  copiedLabel?: string;
};

export function CopyField({ label, value, copyLabel = "Copy", copiedLabel = "Copied" }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 5000);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-md shadow-black/5">
      <span className="text-xs font-sans uppercase tracking-wide text-gray-600">{label}</span>
      <div className="flex items-center justify-between gap-4">
        <span className="break-all text-base font-medium text-black">{value}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-sans uppercase tracking-wide text-black transition-colors hover:border-black/30 hover:bg-white/90"
          aria-label={`${copied ? copiedLabel : copyLabel} ${label}`}
        >
          {copied ? (
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          <span className="text-xs">{copied ? copiedLabel : copyLabel}</span>
        </button>
      </div>
    </div>
  );
}
