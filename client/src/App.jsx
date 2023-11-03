import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>

      <div class="bg-slate-800 w-full h-40  bottom-0">
        <div class="h-10 flex items-center justify-center">
          <div class="text-center">
            <h3 className="text-white	">Footer</h3>
          </div>
        </div>
      </div>

      </div>
    </BrowserRouter>
  );
}
