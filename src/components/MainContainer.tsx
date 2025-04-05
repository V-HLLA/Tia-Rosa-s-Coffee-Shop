export default function MainContainer() {
  return (
    <>
      <main className="home-container">
        <h1 className="section-title">Bem-vindo ao Tia Rosa's Coffee shop!</h1>

        <div className="content-container">
          <div className="component-container">
            <img
              src="src\images\coffee_shop_ambient.png"
              alt="loja Tia Rosa's coffee shop"
            />
            <p className="description-title">
              Onde o aroma do café encontra a conexão perfeita.
            </p>
            <p className="description-text">
              Nossa cafeteria foi pensada para oferecer muito mais do que um bom
              café. Aqui, você encontra um ambiente acolhedor, internet de
              qualidade e um atendimento que valoriza cada detalhe da sua
              experiência.
            </p>
          </div>

          <div className="component-container">
            <img src="src\images\signature_drinks.jpg" alt="Cafés da casa" />
            <h2 className="section-title">
              Conheça os Cafés artesanais da casa!
            </h2>
            <p className="description-title">
              Café artesanal, feito com paixão
            </p>
            <p className="description-text">
              Selecionamos os melhores grãos para proporcionar um sabor único em
              cada xícara. Seja expresso, cappuccino ou filtrado, temos o café
              perfeito para cada momento do seu dia.
            </p>
          </div>

          <div className="component-container">
            <img src="src\images\qr_code_sign.png" alt="QR code para o wifi" />
          </div>

          <div className="component-container">
            <h2 className="section-title">Internet Premium - Wifi Gratis</h2>
            <p className="description-title">
              Conecte-se com qualidade com nosso QR code
            </p>
            <p className="description-text">
              Sabemos que uma boa conexão faz toda a diferença. Oferecemos
              internet rápida e estável, ideal para trabalhar, estudar ou curtir
              com conforto. Basta apontar a camera do seu celular para o QR code
              na plaquinha em cima da sua mesa!.
            </p>
          </div>
        </div>

        <div className="bottom-container">
          <div className="component-container ">
            <h2 className="section-title">Colaboradores atentivos</h2>
            <p className="description-title">Qualidade que vem de dentro</p>
            <p className="description-text">
              Acreditamos que um atendimento excelente começa com uma equipe
              motivada. Por isso, investimos em tecnologia e no crescimento de
              cada colaborador, criando um ambiente onde todos evoluem juntos.
            </p>
          </div>
          <img
            src="src\images\Baristas_vertical.png"
            alt="Baristas servindo café com grande prazer"
            className="component-container "
          />
        </div>
      </main>
    </>
  );
}
