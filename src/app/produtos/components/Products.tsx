import Link from "next/link";
import CardsComponent from "./CardsComponent";

export default function Products() {
  return (
    <>
      <main className="main-container fade-in">
        <h2 className="section-title">Nossos Cafés especiais da casa:</h2>
        <CardsComponent />
        <Link href={"/contato"} className="contact-button animate-button">
          Venha conhecer a nossa loja {"->"}
        </Link>
      </main>
    </>
  );
}
