import React from "react";

export default function PoliticaCompra() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Políticas de Uso y Garantías</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Generalidades</h2>
        <p>
          Estas políticas aplican a todos los productos digitales vendidos a través de la plataforma Olimpus Creators, comercializados mediante Hotmart.
          Al acceder o comprar nuestros productos, el usuario acepta los términos aquí descritos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Plataforma de Pago</h2>
        <p>
          Todas las transacciones son procesadas por Hotmart. Por lo tanto, los términos de compra, reembolso y soporte técnico relacionados con pagos están sujetos a las políticas de Hotmart, disponibles en su sitio oficial: 
          <a 
            href="https://www.hotmart.com/legal/es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.hotmart.com/legal/es
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Garantía de Satisfacción</h2>
        <p>
          Conforme a la política de Hotmart, el cliente tiene derecho a solicitar el reembolso total de su compra dentro de los primeros 7 días corridos después de la compra.
          Pasado este período, no se aceptan devoluciones, salvo que se indique lo contrario en la página del producto.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Licencia de Uso</h2>
        <p>
          Los productos digitales adquiridos en Olimpus Creators son para uso personal e intransferible.
          Está prohibida su distribución, reproducción o reventa sin autorización expresa y por escrito.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Soporte y Contacto</h2>
        <p>
          Para dudas, problemas técnicos o consultas relacionadas con el contenido adquirido, puede comunicarse con nuestro equipo de soporte desde el área de miembros o escribiéndonos a soporte@olimpuscreators.com.
        </p>
      </section>

      <p className="text-sm text-center text-gray-500 mt-10">
        Última actualización: Abril 2025 | Olimpus Creators
      </p>
    </div>
  );
}