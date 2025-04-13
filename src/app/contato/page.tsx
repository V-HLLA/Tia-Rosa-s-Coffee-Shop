import React, { Suspense } from "react";
import Contact from "../components/Contact";
import Loading from "../loading";

export default function ContactPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Contact />
    </Suspense>
  );
}
