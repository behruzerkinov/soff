import bannerImg from "../assets/bannerImg.png";

function Banner() {
	return (
		<div className="bg-[#eeeeee] flex flex-col items-center px-52">
			<article className="pt-24">
				<img
					src={bannerImg}
					alt="website loaded open bank banner image"
				/>
			</article>
			<article className="pl-11 pt-6 pb-14">
				<p className="text-gray-800 font-bold text-[30px]">
					Open Banking Barcha banklar uchun yagona <br />
					foydalanuvchi interfeysi
				</p>
				<h1 className="text-gray-600 text-[25px] pt-4 tracking-[.2px] leading-10">
					Open Banking - bu yagona ruxsat nuqtasi orqali har xil
					banklarning xizmatlaridan foydalanish imkonini taqdim etgan
					holda, yuridik shaxslar va yakka tartibdagi tadbirkorlarga
					bank xizmatlarini masofadan ko'rsatishga mo'ljallangan
					omnikanal platforma.
				</h1>
			</article>

		</div>
	);
}

export default Banner;
