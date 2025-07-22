const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary-foreground text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} NeoSpectrum Theme. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
