export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Social media links">
        <ul className="social-media">
          <li>
            <span>Instagram: </span>
            <a
              href="https://www.instagram.com/tiarosacoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tiarosacoffee
            </a>
          </li>
          <li>
            <span>Facebook: </span>
            <a
              href="https://www.facebook.com/tiarosacoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tia Rosa's Coffee Shop
            </a>
          </li>
          <li>
            <span>TikTok: </span>
            <a
              href="https://www.tiktok.com/@tiarosacoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tiarosacoffee
            </a>
          </li>
        </ul>
      </nav>
      <address>
        <strong>Endereço:</strong> Setor Comercial Sul Q. 6 Quadra 8 <br />
        Asa Sul, Brasília - DF, 70333-900
      </address>
    </footer>
  );
}
