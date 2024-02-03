import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className={`${isDarkMode ? "dark" : ""} h-full w-full`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
            <ToastContainer position="bottom-right" />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
