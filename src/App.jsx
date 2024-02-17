// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import RootLayout from './layouts/RootLayout';
import { RegionProvider } from './components/RegionContext'; // Import the RegionProvider
import { createContext , useState } from 'react';

export const ThemeContext = createContext(null);


function App() {
    const [theme, setTheme]= useState("light");

    const toggleTheme = () =>{
        setTheme((curr)=> (curr === "light" ? "dark": "light"));
    };

  return (
    <ThemeContext.Provider value ={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <Router>
        <RegionProvider>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="country/:name" element={<CountryPage />} />
            </Route>
          </Routes>
        </RegionProvider>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
