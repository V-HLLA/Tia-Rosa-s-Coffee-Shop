import Image from "next/image";
import { CARD_CONTENTS } from "../../../lib/constants";

export default function Card() {
  return (
    <>
      {CARD_CONTENTS.map((card, index) => (
        <article
          key={index}
          className="card"
          style={{
            animationDelay: `${index * 0.6}s`,
          }}
        >
          <Image
            width={768}
            height={1283}
            src={card.imageSrc}
            alt={card.imageAlt}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mPkr2fAAIxDWRAAe5sFl9PNCGwAAAAASUVORK5CYII="
          />
          <h2 className="section-title">{card.title}</h2>
          <p className="description-title">{card.descriptionTitle}</p>
          <p className="description-text">{card.description}</p>
        </article>
      ))}
    </>
  );
}
