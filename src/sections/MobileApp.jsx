import mobileImg from "../assets/mobileImg.png";
import MobileCards from "../components/mobileCards";

function MobileApp() {
	return (
		<div className="pt-47">
			<article className="pl-63 pt-7">
				<p className="text-gray-800 font-bold text-[30px] leading-10">
					Dunyoning istalgan nuqtasidan bank xizmatlaridan <br />{" "}
					foydalanish imkoniyati
				</p>
				<h1 className="text-gray-600 text-[25px] pt-6 pr-10 leading-10 tracking-[.2px]">
					Open Banking mobil ilovasi - bu cho'ntakdagi bankdir. <br />{" "}
					Qayerda bo'lishingizdan qat'i nazar, bank mahsulotlaridan
					foydalana olasiz
				</h1>
			</article>
			<article className="mt-21 flex justify-center">
				<img
					src={mobileImg}
					alt="website loaded open bank banner image"
				/>
			</article>

			<MobileCards />
		</div>
	);
}

export default MobileApp;
