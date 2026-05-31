export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-white/20 border-t-accent rounded-full animate-spin" />
        <p className="text-xs tracking-widest uppercase text-muted animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
