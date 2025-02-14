import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function mobileCards() {
	const cards = [
		{
			imgUrl: card1,
			title: `To'lovni tasdiqlash`,
			text: "To'lov topshiriqnomasini tezkor tasdiqlash yoki rad etish",
		},
		{
			imgUrl: card2,
			title: "Kreditga online ariza",
			text: "Hech qanday navbatlarsiz va bankka bormasdan istalgan bank-hamkorda kredit ochish uchun ariza bering",
		},
		{
			imgUrl: card3,
			title: "Tranzaksiya tarixi",
			text: "Hisobvaraqlaringizga pul mablag'larining tushishi va ularning yechilishini kuzatib boring",
		},
		{
			imgUrl: card4,
			title: "Korporativ kartalar",
			text: "Korporativ kartalardan pullaringizning sarf etilishini nazorat qiling",
		},
	];

	return (
		<div className="px-60 pt-20 grid grid-cols-2">
			{cards.map((card) => {
				return (
					<div key={card.title} className="pt-3 pl-4 pb-12">
						<div className="flex items-center">
							<img src={card.imgUrl} alt={card.title + " logo"} className="mr-4" />
							<p className="text-[25px] font-bold w-35 leading-8">{card.title}</p>
						</div>
						<div>
							<p className="text-[25px] pr-10 pt-4 text-gray-600 w-[95%] leading-10">{card.text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default mobileCards;
