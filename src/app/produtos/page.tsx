import type { Metadata } from "next";
import Products from "./components/Products";

export const metadata: Metadata = {
  title: "Produtos - Tia Rosa's Coffee Shop",
  description: "Veja todos os produtos deliciosos da Tia Rosa!",
};

export default function ProductsPage() {
  return <Products />;
}
