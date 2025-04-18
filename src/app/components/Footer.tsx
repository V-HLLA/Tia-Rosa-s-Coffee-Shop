import GitHubIcon from "@mui/icons-material/GitHub";
import { SOCIAL_LINKS } from "../../lib/socialMediaIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <ul className="description-text social-media footer-socials">
          {SOCIAL_LINKS.map(({ name, url, label, icon }) => (
            <li
              key={name}
              className="social-media-icons social-media-links-footer"
            >
              {icon}
              {`${name}: `}
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
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
