
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Desarrollador backend especializado
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Arquitectura de soluciones robustas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">PHP y MySQL</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Desarrollo sistemas backend de alto rendimiento con PHP moderno y arquitecturas MySQL optimizadas. Combino rigor técnico con una interfaz de usuario sencilla mediante Tailwind y Bootstrap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Ver mis proyectos
            </a>
            <a 
              href="#skills" 
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              Mi pila tecnológica
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-php text-2xl"></i>
              <span className="font-mono text-sm">PHP 8.3</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-database text-xl"></i>
              <span className="font-mono text-sm">MySQL 8.0</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-laravel text-xl"></i>
              <span className="font-mono text-sm">Laravel</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-wind text-xl"></i>
              <span className="font-mono text-sm">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-wordpress text-xl"></i>
              <span className="font-mono text-sm">WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
