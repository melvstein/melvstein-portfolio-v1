const AmbientBackground = () => {
  return (
    <div>
      <div className="fixed top-0 left-1/4 w-125 h-125 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
        <div className="fixed bottom-10 right-1/4 w-150 h-150 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
    </div>
  );
}

export default AmbientBackground;