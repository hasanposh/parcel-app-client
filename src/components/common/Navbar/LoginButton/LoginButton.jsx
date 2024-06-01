const LoginButton = () => {
  return (
    <button href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block">
    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
    <span className="relative group-hover:text-white">Login</span>
    </button>
  );
};

export default LoginButton;
