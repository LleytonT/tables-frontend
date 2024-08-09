import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="pl-8 flex items-center">
        <Link to="/">
          <img src="icon.png" alt="Icon" className="mr-2 h-6" />
        </Link>
        Tables
      </div>

      <div className="flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button
              className="button relative mr-2"
              onClick={(e) => {
                console.log("Login button clicked");
              }}
            >
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button
              className="button relative mr-2"
              onClick={(e) => {
                console.log("Signn up button clicked");
              }}
            >
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button
              className="button relative mr-2"
              onClick={(e) => {
                console.log("Sign out button clicked");
              }}
            >
              Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
