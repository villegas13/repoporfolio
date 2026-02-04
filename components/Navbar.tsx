import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Opciones del menú
  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  // Función para abrir WhatsApp (misma lógica que en Contact.tsx)
  const handleWhatsAppClick = () => {
    const phoneNumber = "584129297604"; // Número extraído de Contact.tsx
    const text = "*Hola!* Vi tu portafolio y me gustaría obtener más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight z-50">
          <span className="text-slate-900">Desarrollador </span>
          <span className="text-blue-600">Web</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Botón Contactar Escritorio */}
          <button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#20ba5a] transition-all shadow-lg flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Contactar
          </button>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button 
          className="md:hidden z-50 p-2 text-slate-800"
          onClick={toggleMenu}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden flex flex-col items-center justify-center`}>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* Botón Contactar Móvil */}
            <button 
              onClick={() => {
                handleWhatsAppClick();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl text-xl"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;