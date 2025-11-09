import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 

function App() {
  return (
    <div>
      <Header />
      {/* The current page component (Home, Intro, or Contract) renders here */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;