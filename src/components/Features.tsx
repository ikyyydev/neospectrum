const Features = () => {
  const features = [
    {
      title: "Carefully Crafted",
      description:
        "Each color has been thoughtfully selected for optimal contrast and readability",
    },
    {
      title: "Syntax Highlighting",
      description: "Enhanced syntax highlighting for better code comprehension",
    },
    {
      title: "UI Consistency",
      description: "Consistent UI elements across all theme variants",
    },
    {
      title: "Eye Comfort",
      description:
        "Designed for extended coding sessions with minimal eye strain",
    },
  ];

  return (
    <section className="py-20 px-4 bg-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
