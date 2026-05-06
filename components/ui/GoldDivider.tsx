"use client";

import { useSite } from "@/lib/context";

interface Props {
  className?: string;
  width?: string;
}

export function GoldDivider({ className = "", width = "60px" }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        style={{
          display: "block",
          height: "1px",
          width,
          background: "linear-gradient(90deg, #b58516, #ebbf5b)",
        }}
      />
      <span
        style={{
          display: "block",
          width: "5px",
          height: "5px",
          background: "#ebbf5b",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          display: "block",
          height: "1px",
          width: "20px",
          background: "linear-gradient(90deg, #ebbf5b, transparent)",
        }}
      />
    </div>
  );
}

export function SectionLabel({ label, labelAr }: { label: string; labelAr?: string }) {
  const { isAr } = useSite();
  const displayedLabel = isAr ? (labelAr ?? label) : label;

  return (
    <div className="flex flex-col gap-2 mb-6">
      <GoldDivider />
      <span className="eyebrow" style={{ color: "#b58516" }}>
        {displayedLabel}
      </span>
    </div>
  );
}
