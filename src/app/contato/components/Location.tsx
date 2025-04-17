"use client";
import { useState } from "react";

export default function Location() {
  const [iframeLoading, setIframeLoading] = useState(true);

  setTimeout(() => {
    setIframeLoading(false);
  }, 300);

  return (
    <div className="iframe-wrapper">
      {iframeLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      <iframe
        title="Localização da Tia Rosa Coffee"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15348.32149429825!2d-47.806836399999995!3d-15.904859649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a21d4f88603d5%3A0x5751b3bbc52f0802!2sPapuda%20-%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1743873735916!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={false}
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => {
          setIframeLoading(false);
        }}
        loading="eager"
      ></iframe>
    </div>
  );
}
