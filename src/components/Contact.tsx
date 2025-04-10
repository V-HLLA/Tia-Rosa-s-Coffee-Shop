export default function Contact() {
  return (
    <>
      <main className="main-container fade-in">
        <h1 className="section-title">Fale com a gente</h1>
        <div className="content-container">
          <div className="card-container fade-in">
            <p className="description-title">
              Estamos prontos para ouvir você!
            </p>
            <p className="description-text">
              Tem alguma dúvida, sugestão ou deseja saber mais sobre nossos
              produtos e serviços? Preencha o formulário abaixo ou entre em
              contato pelos nossos canais oficiais. Será um prazer atender você!
            </p>
          </div>

          <div className="card-container fade-in">
            <p className="description-title">Informações de Contato:</p>
            <p className="description-text">
              Endereço: Av. das Cafeteiras, nº 123 - Brasília, DF Telefone: (61)
              9 9999-9999 E-mail: contato@tiarosacoffee.com.br
            </p>
          </div>

          <div className="card-container fade-in">
            <p className="description-title">Redes Sociais:</p>
            <p className="description-text">
              Siga e acompanhe nossas novidades: Instagram: @tiarosacoffee
              Facebook: Coffee Shops Tia Rosa TikTok: @tiarosacoffee
            </p>
          </div>

          <div className="card-container fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15348.32149429825!2d-47.806836399999995!3d-15.904859649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a21d4f88603d5%3A0x5751b3bbc52f0802!2sPapuda%20-%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1743873735916!5m2!1spt-BR!2sbr"
              width="300"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
