export function EllipseGlow() {
  return (
    <>
      <div className="absolute top-[10%] left-[-15%] w-137 h-137 rounded-full bg-accent-mint/10 blur-[140px] pointer-events-none z-0 mix-blend-screen opacity-50" />
      <div className="absolute top-[40%] right-[-15%] w-150 h-150 rounded-full bg-brand/10 blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-60" />
      <div className="absolute bottom-[20%] left-[-10%] w-md h-112 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none z-0" />
    </>
  );
}
