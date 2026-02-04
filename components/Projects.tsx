import React from 'react';

const Projects: React.FC = () => {
  // Centralizamos la información para evitar errores de sintaxis y facilitar cambios
  const projects = [
    {
      name: 'Cafica',
      url: 'https://www.caficamx.com/',
      image: 'web1.png',
      tags: ['WordPress', 'PHP 8.3']
    },
    {
      name: 'Rafael Ibañez',
      url: 'https://rafaelibanez.com.mx/',
      image: 'web2.png',
      tags: ['WordPress', 'Custom CSS']
    },
    {
      name: 'Que Hacer Fiscal',
      url: 'https://quehacerfiscal.com/',
      image: 'web3.png',
      tags: ['WordPress', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos destacados</h2>
            <p className="text-slate-600 max-w-2xl">
              Soluciones empresariales personalizadas y sistemas gestionados con <strong>WordPress</strong>.
            </p>
          </div>
          <div className="inline-flex items-center text-blue-600 font-semibold gap-2 hover:gap-3 transition-all cursor-pointer">
            <a href="https://github.com/villegas13/miportafolio">Explorar proyectos</a> <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-2xl mb-6 relative overflow-hidden border border-slate-100 shadow-sm">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                    style={{ backgroundImage: `url('/${project.image}')` }}
                  >
                    {/* Filtro para mejorar visibilidad */}
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-blue-600/10 transition-colors"></div>
                  </div>
                  
                  {/* Overlay de hover con icono */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/40">
                    <i className="fa-solid fa-arrow-up-right-from-square text-white text-2xl"></i>
                  </div>
                </a>
              </div>
              
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Desarrollo integral utilizando WordPress para una gestión de contenido eficiente y un diseño optimizado.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;