import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import style from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";

SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("tsx", tsx);

export function CodeBlock({
  children,
  language,
  className,
  highlightLines = [],
}: {
  children: string;
  language: "ts" | "tsx";
  className?: string;
  /** [1, "3-5"] */
  highlightLines?: (number | string)[];
}) {
  const linesToHighlight = parseHighlightLines(highlightLines);

  return (
    <div className={className}>
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          borderRadius: "0.5rem",
        }}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={(lineNumber) => {
          const style: React.CSSProperties = {
            display: "block",
            // width: "fit-content",
          };
          if (linesToHighlight.has(lineNumber)) {
            style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }
          return { style };
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function parseHighlightLines(highlightLines: (number | string)[]): Set<number> {
  const linesToHighlight = new Set<number>();

  highlightLines.forEach((line) => {
    if (typeof line === "number") {
      linesToHighlight.add(line);
    } else if (typeof line === "string") {
      const [start, end] = line.split("-").map(Number);
      if (!start || !end || isNaN(start) || isNaN(end)) {
        console.warn(`Invalid line range: ${line}`);
        return;
      }
      for (let i = start; i <= end; i++) {
        linesToHighlight.add(i);
      }
    }
  });

  return linesToHighlight;
}
