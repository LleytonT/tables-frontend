export const NavBar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="pl-8">Tables</div>
      {/* <button
        className="login mr-2"
        onClick={e => {
          console.log("Login button clicked");
        }}
      >
        Login
      </button> */}
    </nav>
  );
};
