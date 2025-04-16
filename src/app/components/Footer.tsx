import { SOCIAL_LINKS } from "../../lib/constants";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-media">
        {SOCIAL_LINKS.map(({ name, url, label }) => (
          <li key={name} className="social-media-links-footer">
            <span>{name}: </span>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-contacts">
        <address>
          Endereço: Setor Comercial Sul Quadra 8
          <br />
          Asa Sul, Brasília - DF, 70333-900
        </address>
        <span className="github-account">
          Created and designed by{" "}
          <a
            href="https://github.com/V-HLLA"
            target="_blank"
            rel="noopener noreferrer"
          >
            V-HLLA
          </a>
          <GitHubIcon />
        </span>
      </div>
    </footer>
  );
}
