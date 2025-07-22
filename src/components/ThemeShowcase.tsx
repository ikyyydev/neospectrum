const ThemeShowcase = () => {
  const themes = [
    {
      name: "Midnight",
      description: "Deep, rich dark theme with vibrant accents",
      gradient: "from-blue-900 to-purple-900",
      accent: "border-blue-500",
    },
    {
      name: "Mystic",
      description: "Mystical dark theme with ethereal highlights",
      gradient: "from-purple-900 to-pink-900",
      accent: "border-purple-500",
    },
    {
      name: "Glacier",
      description: "Cool, icy dark theme with crisp contrasts",
      gradient: "from-cyan-900 to-blue-900",
      accent: "border-cyan-500",
    },
  ];

  return (
    <section id="showcase" className="py-20 px-4 bg-secondary-foreground">
      <h2 className="text-4xl font-bold text-center mb-12">Theme Variants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className={`p-6 rounded-lg bg-gradient-to-br ${theme.gradient} border-2 ${theme.accent} hover:scale-105 transition-transform`}
          >
            <h3 className="text-2xl font-bold mb-3">{theme.name}</h3>
            <p className="text-gray-300">{theme.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeShowcase;
