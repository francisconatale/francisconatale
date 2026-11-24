interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return <div className={"u-divider " + className} aria-hidden="true" />;
}
