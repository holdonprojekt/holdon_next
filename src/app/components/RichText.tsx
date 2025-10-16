import type { ComponentPropsWithoutRef, ElementType } from "react";

type RichTextProps<T extends ElementType> = {
  html: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "dangerouslySetInnerHTML">;

export function RichText<T extends ElementType = "p">({
  html,
  as,
  className,
  ...rest
}: RichTextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      {...rest}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
