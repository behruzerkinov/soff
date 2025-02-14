import logo from "../assets/logo.png";
import uzbekFlag from "../assets/uzbekFlag.png";
import russianFlag from "../assets/russianFlag.png";

function Navbar() {
	return (
		<div className="flex items-center px-33 pt-1">
			<nav className="flex items-center justify-between w-full pt-7 pb-7">
				<article className="flex">
					<section className="mr-12">
						<img
							src={logo}
							alt="open bank logo"
							className="mt-[-.5rem]"
						/>
					</section>
					<section>
						<ul className="flex gap-[30px] pl-3">
							<li className="uppercase cursor-pointer relative group text-[14px] font-semibold tracking-wider">
								maxsulot haqida
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group text-[14px] font-semibold tracking-wider">
								web-dastur
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group text-[14px] font-semibold tracking-wider">
								mobil dastur
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group text-[14px] font-semibold tracking-wider">
								kompaniya haqida
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
							<li className="uppercase cursor-pointer relative group text-[14px] font-semibold tracking-wider">
								aloqa
								<span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
						</ul>
					</section>
				</article>
				<article className="flex">
					<section className="flex items-center opacity-35 cursor-pointer">
						<img
							className="mr-2"
							src={russianFlag}
							alt="russia flag sircle shape"
						/>
						<span className="font-semibold text-[14px] uppercase">
							Русский
						</span>
					</section>
					<section className="flex items-center ml-8 cursor-pointer">
						<img
							className="mr-2"
							src={uzbekFlag}
							alt="uzbekistan flag sircle shape"
						/>
						<span className="font-semibold text-[14px] uppercase">
							O`zbek
						</span>
					</section>
				</article>
			</nav>
		</div>
	);
}

export default Navbar;
