import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export interface CodeblockContainerProps {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
}

/**
 * Codeblock Container
 *
 * Customizeable wrapper around Codeblock Header and Content. Default styling mimics Nextra's built-in Codeblocks
 */
export function CodeblockContainer({
  children,
  className,
}: CodeblockContainerProps) {
  return <div className={cn("mt-6 flex flex-col", className)}>{children}</div>;
}

CodeblockContainer.displayName = "CodeblockContainer";

export interface CodeblockContainerProps {
  children: React.ReactElement[] | React.ReactElement;
  fileName?: string;
  className?: string;
}

/**
 * Codeblock Header
 *
 * Fully customizeable Codeblock header. Default styling mimics Nextra's built-in Codeblocks
 */
export function CodeblockHeader({
  children,
  className,
}: CodeblockContainerProps) {
  return (
    <div
      className={cn(
        "flex h-12 items-center gap-2 rounded-t-md border border-b-0 border-gray-300 bg-gray-100 px-4 text-xs text-gray-700 contrast-more:border-gray-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 contrast-more:dark:border-gray-50",
        className,
      )}
    >
      {children}
    </div>
  );
}

CodeblockHeader.displayName = "CodeblockHeader";

interface CodeblockContentProps {
  html: TrustedHTML;
  className?: string;
}

/**
 * Codeblock Content
 *
 * Usage requires:
 * @param html returned by `highlightCode()`
 * @param ref for copying code content
 *
 * Default styling mimics Nextra's built-in Codeblocks
 */
export const CodeblockContent = forwardRef<
  HTMLDivElement,
  CodeblockContentProps
>(({ html, className }, ref) => {
  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
      className={cn(
        "overflow-x-auto rounded-b-md bg-white py-4 text-[.9em] subpixel-antialiased ring-1 ring-inset ring-gray-300 contrast-more:ring-gray-900 contrast-more:contrast-150 dark:bg-black dark:ring-neutral-700 contrast-more:dark:ring-gray-50 [&_span]:min-h-[21px] [&_span]:text-[var(--shiki-light)] dark:[&_span]:text-[var(--shiki-dark)]",
        className,
      )}
    />
  );
});

CodeblockContent.displayName = "CodeblockContent";

/**
 * Generic Codeblock
 *
 * Exports Container, Header, and Content to enable developers to completely
 * customize the styling
 */
export const Codeblock = {
  Container: CodeblockContainer,
  Header: CodeblockHeader,
  Content: CodeblockContent,
};
