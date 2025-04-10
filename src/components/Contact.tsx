export default function Contact() {
  return (
    <main className="main-container fade-in">
      <h1 className="section-title">Fale com a gente</h1>

      <div className="content-container">
        <section className="card-container fade-in">
          <h2 className="description-title">
            Estamos prontos para ouvir você!
          </h2>
          <p className="description-text">
            Tem alguma dúvida, sugestão ou deseja saber mais sobre nossos
            produtos e serviços? Preencha o formulário abaixo ou entre em
            contato pelos nossos canais oficiais. Será um prazer atender você!
          </p>
        </section>

        <section className="card-container fade-in">
          <h2 className="description-title">Informações de Contato</h2>
          <address className="description-text">
            <strong>Endereço:</strong> Av. das Cafeteiras, nº 123 - Brasília, DF
            <br />
            <strong>Telefone:</strong> (61) 9 9999-9999
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:contato@tiarosacoffee.com.br">
              contato@tiarosacoffee.com.br
            </a>
          </address>
        </section>

        <section className="card-container fade-in">
          <h2 className="description-title">Onde nos encontrar:</h2>
          <h2 className="description-title">Redes Sociais</h2>
          <ul className="description-text social-links">
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/tiarosacoffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tiarosacoffee
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/tiarosacoffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coffee Shops Tia Rosa
              </a>
            </li>
            <li>
              TikTok:{" "}
              <a
                href="https://www.tiktok.com/@tiarosacoffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tiarosacoffee
              </a>
            </li>
          </ul>
        </section>

        <section className="card-container fade-in map-container">
          <h2 className="description-title">Localização</h2>
          <iframe
            title="Localização da Tia Rosa Coffee"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15348.32149429825!2d-47.806836399999995!3d-15.904859649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a21d4f88603d5%3A0x5751b3bbc52f0802!2sPapuda%20-%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1743873735916!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </section>
      </div>
    </main>
  );
}
