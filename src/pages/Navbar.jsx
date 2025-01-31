import logo from "../assets/logo.png";
import uzbekFlag from "../assets/uzbekFlag.png";
import russianFlag from "../assets/russianFlag.png";

function Navbar() {
	return (
		<div className="flex items-center px-24">
			<nav className="flex items-center justify-between w-full py-8">
				<article className="flex">
					<section className="mr-12">
						<img src={logo} alt="open bank logo" />
					</section>
					<section>
						<ul className="flex gap-8">
							<li className="uppercase cursor-pointer relative group">
								maxsulot haqida
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group">
								web-dastur
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group">
								mobile dastur
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group">
								kompany haqida
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group">
								aloqa
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
						</ul>
					</section>
				</article>
				<article className="flex gap-6">
					<section className="flex">
						<img
							className="mr-2"
							src={russianFlag}
							alt="russia flag sircle shape"
						/>
						<span>Русский</span>
					</section>
					<section className="flex">
						<img
							className="mr-2"
							src={uzbekFlag}
							alt="uzbekistan flag sircle shape"
						/>
						<span>O`zbek</span>
					</section>
				</article>
			</nav>
		</div>
	);
}

export default Navbar;
