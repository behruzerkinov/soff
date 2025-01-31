import bannerImg from "../assets/bannerImg.png";

function Banner() {
	return (
		<div className="bg-gray-200">
			<article>
				<img
					src={bannerImg}
					alt="website loaded open bank banner image"
				/>
			</article>
			<article>
				<span className="text-black">
					Open Banking Barcha banklar uchun yagona foydalanuvchi
					interfeysi
				</span>
				<h1>
					Open Banking – bu yagona ruxsat nuqtasi orqali har xil
					banklarning xizmatlaridan foydalanish imkonini taqdim etgan
					holda, yuridik shaxslar va yakka tartibdagi tadbirkorlarga
					bank xizmatlarini masofadan koʻrsatishga moʻljallangan
					omnikanal platforma.
				</h1>
			</article>
		</div>
	);
}

export default Banner;
