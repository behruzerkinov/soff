import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function mobileCards() {
	const cards = [
		{
			imgUrl: card1,
			title: "To'lovni tasdiqlash",
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
		<div>
			{cards.map((card) => {
				<div>
					<img src={card.imgUrl} alt={card.title + " logo"} />
					<p>{card.title}</p>
				</div>;
				<div>
					<p>{card.text}</p>
				</div>;
			})}
		</div>
	);
}

export default mobileCards;
