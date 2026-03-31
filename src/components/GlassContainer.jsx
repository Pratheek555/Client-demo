export default function GlassContainer({ children }) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col overflow-hidden bg-transparent">
      <div className="relative z-10 flex min-h-[inherit] flex-col">{children}</div>
    </div>
  );
}
