import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Configuración de tu número de WhatsApp (usa el código de país sin el símbolo +)
    const phoneNumber = "584129297604"; 
    
    // 2. Estructura del mensaje con formato para WhatsApp
    const text = `*Nuevo Mensaje del Portafolio*\n\n` +
                 `*Nombre:* ${formData.name}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Mensaje:* ${formData.message}`;

    // 3. Crear la URL de la API de WhatsApp y abrirla en una nueva pestaña
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    // Opcional: Limpiar el formulario después de enviar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Hablemos de tu próximo emprendimiento</h2>
            <p className="text-slate-400 mb-8">
              Estoy disponible para proyectos en PHP, MySQL y WordPress. ¡Envíame un mensaje!
            </p>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Tu nombre</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tu nombre aquí"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Resumen del proyecto</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Cuéntame sobre tus requerimientos..."
                  required
                ></textarea>
              </div>
              
              {/* Botón actualizado para WhatsApp con color característico y nuevo icono */}
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;