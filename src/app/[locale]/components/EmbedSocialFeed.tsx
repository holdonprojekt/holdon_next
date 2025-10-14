"use client";

import { useEffect, useId } from "react";

const SCRIPT_SRC = "https://embedsocial.com/cdn/ht.js";

const SCRIPT_SELECTOR = `script[data-embedsocial="true"]`;

type EmbedSocialFeedProps = {
  locale: string;
  reference: string;
  className?: string;
};

export function EmbedSocialFeed({ locale, reference, className }: EmbedSocialFeedProps) {
  const containerId = useId();

  useEffect(() => {
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = "";
    }

    if (typeof window === "undefined") {
      return;
    }

    const existingScript = document.querySelector(SCRIPT_SELECTOR);

    if (existingScript instanceof HTMLScriptElement) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.dataset.embedsocial = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [containerId, locale]);

  return (
    <div
      id={containerId}
      className={className}
      data-ref={reference}
    />
  );
}
