import Image from "next/image";
import coffee_shop_ambient from "../../images/coffee_shop_ambient.png";
import signature_drinks from "../../images/signature_drinks.jpg";
import qr_code_sign from "../../images/qr_code_sign.png";
import Baristas_vertical from "../../images/Baristas_vertical.png";
import Link from "next/link";

export default function MainContainer() {
  return (
    <>
      <main className="main-container fade-in">
        <h1 className="section-title">Bem-vindo ao Tia Rosa's Coffee shop!</h1>

        {/* WELCOME SECTION */}
        <div className="content-container">
          <div className="card-container fade-in">
            <Image
              src={coffee_shop_ambient}
              alt="loja Tia Rosa's coffee shop"
              width={800}
              height={600}
              priority={true}
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

          {/* CTA SECTION */}
          <div className="card-container fade-in">
            <Image
              width={800}
              height={600}
              src={signature_drinks}
              alt="Cafés da casa"
            />
            <div className="cta-button">
              <Link
                href={"/produtos"}
                className="products-button animate-on-load"
              >
                Conheça os Cafés especiais da casa!
                <Image
                  width={80}
                  height={60}
                  alt="icone da logo"
                  src="/coffee_ico.svg"
                />
              </Link>
            </div>
            <p className="description-title">
              Café especial da casa, feito com paixão com gostinho de amor!
            </p>
            <p className="description-text">
              Selecionamos os melhores grãos para proporcionar um sabor único em
              cada xícara. Seja expresso, cappuccino ou filtrado, temos o café
              perfeito para cada momento do seu dia.
            </p>
          </div>

          {/* VISUAL BREAK */}
          <div className="card-container fade-in">
            <Image
              width={800}
              height={600}
              src={qr_code_sign}
              alt="QR code para o wifi"
              loading="lazy"
            />
          </div>

          {/* VISUAL DESCRIPTION */}
          <div className="card-container fade-in">
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

        {/* BOTTOM CONTAINER */}
        <div className="bottom-container">
          <div className="card-container fade-in">
            <h2 className="section-title">Colaboradores atentivos</h2>
            <p className="description-title">Qualidade que vem de dentro</p>
            <p className="description-text">
              Acreditamos que um atendimento excelente começa com uma equipe
              motivada. Por isso, investimos em tecnologia e no crescimento de
              cada colaborador, criando um ambiente onde todos evoluem juntos.
            </p>
          </div>
          <Image
            width={600}
            height={800}
            src={Baristas_vertical}
            alt="Baristas servindo café com grande prazer"
            className="card-container fade-in "
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
}
