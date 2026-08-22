import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Identity from "./pages/Identity";
import Personal from "./pages/Personal";
import Missions from "./pages/Missions";
import Contact from "./components/Contact";


function PageWrapper({ children }) {
  return (
    <main className="page-route">
      {children}
    </main>
  );
}


function AppRoutes() {
  return (
    <>
      {/* Global navbar.
          Navbar tetap berada di luar sistem page transition. */}
      <Navbar />

      {/* Landing intro + route transitions */}
      <PageTransition />

      <Routes>

        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/identity"
          element={
            <PageWrapper>
              <Identity />
            </PageWrapper>
          }
        />

        <Route
          path="/personal"
          element={
            <PageWrapper>
              <Personal />
            </PageWrapper>
          }
        />

        <Route
          path="/missions"
          element={
            <PageWrapper>
              <Missions />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

      </Routes>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App;