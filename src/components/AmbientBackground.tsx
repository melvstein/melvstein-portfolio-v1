const AmbientBackground = () => {
  return (
    <div>
      <div className="fixed top-0 left-1/4 w-125 h-125 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10 will-change-transform"></div>
        <div className="fixed bottom-10 right-1/4 w-150 h-150 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none -z-10 will-change-transform"></div>
    </div>
  );
}

export default AmbientBackground;