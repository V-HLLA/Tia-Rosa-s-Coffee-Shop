import React, { Suspense } from "react";
import Products from "../components/Products";
import Loading from "../loading";

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Products />
    </Suspense>
  );
}
