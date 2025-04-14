import { SOCIAL_LINKS } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Social media links">
        <ul className="social-media">
          {SOCIAL_LINKS.map(({ name, url, label }) => (
            <li key={name}>
              <span>{name}: </span>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <address>
        <strong>Endereço:</strong> Setor Comercial Sul Q. 6 Quadra 8 <br />
        Asa Sul, Brasília - DF, 70333-900
      </address>
    </footer>
  );
}
