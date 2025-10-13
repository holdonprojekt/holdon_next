"use client";

import { useEffect } from "react";

export function ContextMenuBlocker({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handler);

    return () => {
      document.removeEventListener("contextmenu", handler);
    };
  }, []);

  return <>{children}</>;
}
