export const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 rounded-full border-2 animate-spin"
        style={{
          borderColor: "rgba(6,182,212,0.2)",
          borderTopColor: "#06B6D4",
        }}
        role="status"
        aria-label="Loading"
      />
      <span className="text-xs text-slate-500 tracking-wide">Loading...</span>
    </div>
  );
};
