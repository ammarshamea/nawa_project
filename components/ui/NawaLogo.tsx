interface Props {
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Fill parent height; width follows aspect ratio (for hero beside headlines) */
  matchParentHeight?: boolean;
}

const ASPECT = 3071.73 / 2933.13;

export default function NawaLogo({
  height = 52,
  className = "",
  style = {},
  matchParentHeight = false,
}: Props) {
  const width = Math.round(height * ASPECT);
  if (matchParentHeight) {
    return (
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/nawa_logo.svg`}
        alt="Nawah Real Estate Development — نواة التطوير العقاري"
        className={className}
        style={{
          display: "block",
          objectFit: "contain",
          height: "100%",
          width: "auto",
          maxHeight: "100%",
          ...style,
        }}
        draggable={false}
      />
    );
  }
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/nawa_logo.svg`}
      alt="Nawah Real Estate Development — نواة التطوير العقاري"
      width={width}
      height={height}
      className={className}
      style={{ display: "block", objectFit: "contain", ...style }}
      draggable={false}
    />
  );
}
