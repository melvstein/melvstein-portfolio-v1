"use client";

import { cn } from "@/lib/utils";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

interface JsonBlockProps {
  data: Record<string, JsonValue>;
  className?: string;
  showLineNumbers?: boolean;
}

const isLinkable = (s: string) =>
  /^(https?:\/\/|mailto:|\/)/.test(s);

const renderValue = (value: JsonValue, indent: number): React.ReactNode => {
  if (value === null) return <span className="text-rose-400">null</span>;
  if (typeof value === "string") {
    if (isLinkable(value)) {
      return (
        <span className="text-secondary">
          &quot;
          <a
            href={value}
            target={value.startsWith("http") ? "_blank" : undefined}
            rel={value.startsWith("http") ? "noopener noreferrer" : undefined}
            className="underline decoration-secondary/40 hover:decoration-secondary transition-colors"
          >
            {value}
          </a>
          &quot;
        </span>
      );
    }
    return <span className="text-secondary">&quot;{value}&quot;</span>;
  }
  if (typeof value === "number")
    return <span className="text-amber-400">{value}</span>;
  if (typeof value === "boolean")
    return <span className="text-purple-400">{String(value)}</span>;

  if (Array.isArray(value)) {
    if (value.length === 0)
      return <span className="text-muted-foreground">[]</span>;
    return (
      <>
        <span className="text-muted-foreground">[</span>
        {value.map((item, i) => (
          <div key={i} style={{ paddingLeft: (indent + 1) * 16 }}>
            {renderValue(item, indent + 1)}
            {i < value.length - 1 && <span className="text-muted-foreground">,</span>}
          </div>
        ))}
        <div style={{ paddingLeft: indent * 16 }}>
          <span className="text-muted-foreground">]</span>
        </div>
      </>
    );
  }

  const entries = Object.entries(value);
  if (entries.length === 0)
    return <span className="text-muted-foreground">{"{}"}</span>;
  return (
    <>
      <span className="text-muted-foreground">{"{"}</span>
      {entries.map(([k, v], i) => (
        <div key={k} style={{ paddingLeft: (indent + 1) * 16 }}>
          <span className="text-primary">&quot;{k}&quot;</span>
          <span className="text-muted-foreground">: </span>
          {renderValue(v, indent + 1)}
          {i < entries.length - 1 && <span className="text-muted-foreground">,</span>}
        </div>
      ))}
      <div style={{ paddingLeft: indent * 16 }}>
        <span className="text-muted-foreground">{"}"}</span>
      </div>
    </>
  );
};

export const JsonBlock = ({ data, className, showLineNumbers = false }: JsonBlockProps) => {
  const content = renderValue(data, 0);
  const lineCount = JSON.stringify(data, null, 2).split("\n").length;

  return (
    <pre
      className={cn(
        "font-mono text-sm bg-primary/10 backdrop-blur-md border border-primary/10 rounded-md p-4 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent",
        className
      )}
    >
      <div className="flex">
        {showLineNumbers && (
          <div className="select-none pr-4 text-slate-600 text-right">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}
        <div className="flex-1">{content}</div>
      </div>
    </pre>
  );
};
