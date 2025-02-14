import phone from "../assets/footerPhoneImg.png";
import mail from "../assets/footerMailImg.png";
import location from "../assets/footerLocationImg.png";
import itParklogo from "../assets/itparkLogo.png";
import oracleLogo from "../assets/oracleLogo.png";

function Footer() {
	const contacts = [
		{
			imgUrl: phone,
			text: "+ 998 (90) 968 7881",
		},
		{
			imgUrl: mail,
			text: "hello@opentech.uz",
		},
		{
			imgUrl: location,
			text: "Toshkent sh., Afrosiyob k. 8A",
		},
	];

	return (
		<footer className="bg-[#eeeeee] flex items-end justify-between px-62 pb-12">
			<section className="pt-28 text-[30px] font-bold">
				<h1 className="pb-10">Bizga qo'shiling !</h1>
				{contacts.map((contact) => {
					return (
						<div
							key={contact.text}
							className="flex pl-1 pt-3 items-center pb-3"
						>
							<img
								src={contact.imgUrl}
								alt={contact.text + "logo"}
							/>
							<p className="text-[25px] text-gray-600 pl-5 font-medium">
								{contact.text}
							</p>
						</div>
					);
				})}
			</section>
			<section className="flex flex-col justify-center gap-8 pb-4">
				<div>
					<img src={itParklogo} alt="IT Park logo" />
				</div>
				<div>
					<img src={oracleLogo} alt="Oracle logo" />
				</div>
			</section>
		</footer>
	);
}

export default Footer;
