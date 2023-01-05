import "./App.css";

import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";
import Home from "./pages/Home";

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
