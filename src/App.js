import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./service/Theme";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css"
import LogoutPage from "./pages/LogoutPage";



function App() {
  const [theme, setTheme] = useState("light")
  const ToggleTheme = () => {
    setTheme((curr)=>(curr ==="light" ? "dark": "light"));
  }
  return (
   
      <div className="App">
        <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route >
              <Route path="/" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Route>
          </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
 
  )
}

export default App
