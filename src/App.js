import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/layouts/Alert";
import { AlertProvider } from "./context/alert/AlertContect";
function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container 2xl:container xl:container lg:container md:container mx-auto px-4 py-10">
            <Alert />
            <Routes>
              <Route path="/" element={ <HomePage />}/>
              <Route path="/about" element={ <AboutPage /> } />
              <Route path="/user/:login" element={<UserPage />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
