interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span
      style={{
        background: "var(--tag-bg)",
        border: "1px solid var(--tag-border)",
        color: "var(--tag-text)",
        fontSize: "0.68rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        padding: "0.25rem 0.75rem",
        display: "inline-block",
        fontFamily: "var(--font-inter)",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}
