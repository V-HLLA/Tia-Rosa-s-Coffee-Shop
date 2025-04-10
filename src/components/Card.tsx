import { CARD_CONTENTS } from "../lib/constants";

export default function Card() {
  return (
    <>
      {CARD_CONTENTS.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{
            animationDelay: `${index * 0.6}s`,
          }}
        >
          <img src={card.imageSrc} alt={card.imageAlt} />
          <h2 className="section-title">{card.title}</h2>
          <p className="description-title">{card.descriptionTitle}</p>
          <p className="description-text">{card.description}</p>
        </div>
      ))}
    </>
  );
}
