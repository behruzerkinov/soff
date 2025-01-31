import Navbar from "./pages/Navbar";
import Banner from "./pages/Banner";
import WebApp from "./pages/WebApp";
import MobileApp from "./pages/MobileApp";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<WebApp />
			<MobileApp />
			<About />
			<Footer />
		</div>
	);
}

export default App;
