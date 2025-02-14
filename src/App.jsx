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

// TODO
// 1. pixel perfect needed
// 2. href nav link ulash

export default App;
