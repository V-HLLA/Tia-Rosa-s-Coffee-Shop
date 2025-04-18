import { SOCIAL_LINKS } from "../../../lib/socialMediaIcons";
import Location from "./Location";

export default function Contact() {
  return (
    <main className="main-container fade-in">
      <h1 className="section-title">Fale com a gente</h1>

      <article className="content-container">
        <section className="card-container fade-in">
          <h2 className="description-title">
            Estamos prontos para ouvir você!
          </h2>
          <p className="description-text">
            Tem alguma dúvida, sugestão ou deseja saber mais sobre nossos
            produtos e serviços? Entre em contato com a gente.
          </p>
        </section>

        <section className="card-container fade-in">
          <h2 className="description-title">Redes sociais:</h2>
          <ul className="description-text social-media-contact">
            {SOCIAL_LINKS.map(({ name, url, label, icon }) => (
              <li key={name} className="social-media-icons">
                {icon}
                {`${name}: `}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-container fade-in map-container">
          <h2 className="description-title">Localização</h2>
          <Location />
        </section>

        <section className="card-container fade-in">
          <h2 className="description-title">Informações de Contato</h2>
          <address className="description-text">
            <strong>Endereço:</strong> Setor Comercial Sul Q. 6 Quadra 8 Asa
            Sul, Brasília - DF, 70333-900
            <br />
            <strong>Telefone:</strong> (61) 9 98715-6775
            <br />
            <strong>Email:</strong> <span>contato@tiarosacoffee.com.br</span>
          </address>
        </section>
      </article>
    </main>
  );
}
