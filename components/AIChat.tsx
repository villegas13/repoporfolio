import React from 'react';

const WhatsAppButton: React.FC = () => {
  // Configuración del botón
  const phoneNumber = "584129297604"; // Reemplaza con tu número (incluyendo código de país)
  const message = "Hola, vi tu portafolio y skills. Me gustaría consultar sobre tus servicios de desarrollo.";
  
  // URL codificada para WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de pulso animado detrás del botón */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
        
        {/* Icono de WhatsApp de FontAwesome */}
        <i className="fa-brands fa-whatsapp text-3xl relative z-10"></i>
        
        {/* Etiqueta flotante opcional que aparece al hacer hover */}
        <span className="absolute right-20 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          ¿Hablamos por WhatsApp?
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;