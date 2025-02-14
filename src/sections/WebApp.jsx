import webAppImg from "../assets/webAppImg.png";

function WebApp() {
	return (
		<div className="flex flex-col pt-31 px-52 w-full">
			<article className="px-11 pt-6">
				<p className="text-gray-800 font-bold text-[30px]">
					Bir nechta internet-banking o'rniga yagona Web-ilova
				</p>
				<h1 className="text-gray-600 text-[25px] pt-6 pr-3 leading-10 tracking-[.2px]">
					“Open Banking” web-ilovasi – bu buxgalteringizning ishini
					soddalashtiruvchi qulay interfeys. Mazkur interfeys sizni
					har xil internet-bankinglar orasida almashish zaruratidan
					xalos etadi, shunchaki bitta ilovaga kirib, barcha
					hisobvaraqlardan foydalanish imkoniyatiga ega bo'ling.
					Kontragentga, byudjetga, ish haqi loyihasi bo'yicha
					kompaniya xodimlariga to'lov topshiriqnomalarini yaratish
					jarayonini ancha soddalashtiradi.
				</h1>
			</article>
			<article className="pl-11 pt-6">
				<p className="text-gray-800 font-bold text-[30px]">
					Kontragentni tekshirish
				</p>
				<h1 className="text-gray-600 text-[25px] pt-6 pr-3 leading-10 tracking-[.2px]">
					Shartnoma tuzishdan oldin kontragentning ishonchli
					ekanligini tekshiring
				</h1>
			</article>
			<article className="pl-11 pt-6">
				<p className="text-gray-800 font-bold text-[30px]">
					Yordamchi ma'lumotdan foydalanish
				</p>
				<h1 className="text-gray-600 text-[25px] pt-6 pr-10 leading-10 tracking-[.2px]">
					Valyuta kurslari, qayta moliyalash stavkasi, MHTEKM, BHM va
					boshqa ko'plab ma'lumotlar bir joyda jamlangan
				</h1>
			</article>
			<article className="mt-28 scale-107">
				<img
					src={webAppImg}
					alt="website loaded open bank banner image"
				/>
			</article>
		</div>
	);
}

export default WebApp;
