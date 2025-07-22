const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-foreground">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        NeoSpectrum
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-8">
        A stunning dark theme collection for VS Code with three unique variants:
        Midnight, Mystic, and Glacier
      </p>
      <div className="flex gap-4">
        <a
          href="#preview"
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
        >
          Explore Themes
        </a>
        <a
          href="https://github.com/ikyyydev/neospectrum-theme"
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
