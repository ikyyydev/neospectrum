const Navbar = () => {
  return (
    <nav className="w-full min-h-[50px] border-b border-gray-200 shadow">
      <div className="max-w-full mx-auto flex justify-center">
        <img
          src="/src/assets/NeoSpectrumLogo.png"
          alt="logo"
          width={100}
          height={100}
          className={"cursor-pointer"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
