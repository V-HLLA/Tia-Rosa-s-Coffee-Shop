import { CoffeeOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function MainContainer() {
  return (
    <>
      <main className="main-container fade-in">
        <h1 className="section-title">Bem-vindo a Tia Rosa's Coffee shop!</h1>

        {/* WELCOME SECTION */}
        <article className="content-container">
          <section className="card-container fade-in">
            <Image
              src="/coffee_shop_ambient.png"
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
          </section>

          {/* CTA SECTION */}
          <section className="card-container fade-in">
            <Image
              width={800}
              height={600}
              src="/signature_drinks.jpg"
              alt="Cafés da casa"
              className="card-image"
              priority={true}
            />
            <div className="cta-button">
              <Link
                href={"/produtos"}
                className="products-button animate-on-load"
              >
                Conheça os Cafés especiais da casa!
                <CoffeeOutlined className="coffee-icon-svg-cta" />
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
          </section>

          {/* VISUAL BREAK */}
          <section className="card-container fade-in">
            <Image
              width={800}
              height={600}
              src="/qr_code_sign.png"
              alt="QR code para o wifi"
              loading="lazy"
              className="card-image"
            />
          </section>

          {/* VISUAL DESCRIPTION */}
          <section className="card-container fade-in">
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
          </section>
        </article>

        {/* BOTTOM CONTAINER */}
        <article className="bottom-container">
          <section className="card-container fade-in">
            <h2 className="section-title">Colaboradores atentivos</h2>
            <p className="description-title">Qualidade que vem de dentro</p>
            <p className="description-text">
              Acreditamos que um atendimento excelente começa com uma equipe
              motivada. Por isso, investimos em tecnologia e no crescimento de
              cada colaborador, criando um ambiente onde todos evoluem juntos.
            </p>
          </section>
          <Image
            width={600}
            height={800}
            src="/baristas_vertical.png"
            alt="Baristas servindo café com grande prazer"
            className="card-container fade-in "
            loading="lazy"
          />
        </article>
      </main>
    </>
  );
}
