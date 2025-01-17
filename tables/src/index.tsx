import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClerkProvider } from "@clerk/clerk-react";
import { neobrutalism } from "@clerk/themes";
const CLERK_KEY = process.env.REACT_APP_CLERK_KEY as string;
console.log(CLERK_KEY);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={CLERK_KEY}
      appearance={{
        baseTheme: neobrutalism,
      }}
      afterSignOutUrl="/register"
      afterSignInUrl="/feed"
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
