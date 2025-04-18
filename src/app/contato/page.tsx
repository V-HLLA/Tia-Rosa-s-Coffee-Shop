import { Metadata } from "next";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Contato - Tia Rosa's Coffee Shop",
  description:
    "Entre em contato com a Tia Rosa para tirar dúvidas ou veja a localização da nossa loja!",
};

export default function ContactPage() {
  return <Contact />;
}
