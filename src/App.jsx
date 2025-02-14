import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WebApp from "./sections/WebApp";
import MobileApp from "./sections/MobileApp";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
	return (
		<div style={{ fontFamily: "Manrope" }}>
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
