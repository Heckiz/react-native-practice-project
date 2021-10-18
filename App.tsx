import "react-native-gesture-handler";
import React from "react";
import MainNav from "./src/navigator/MainNav";
import { AuthProvider } from "./src/context/auth/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <MainNav />
    </AuthProvider>
  );
};

export default App;
