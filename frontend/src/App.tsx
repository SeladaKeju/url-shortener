import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
