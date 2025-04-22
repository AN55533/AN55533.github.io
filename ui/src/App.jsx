import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import About from "./components/About";
import Skills from "./components/Skills";

import Footer from "./components/Footer";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

import Indexpage from "./Pages/Indexpage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/" element={<Indexpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/pojects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Footer />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
