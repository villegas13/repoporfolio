
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experiencia Técnica</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un conjunto integral de herramientas enfocadas en ofrecer aplicaciones web escalables, seguras y fáciles de mantener.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <i className={`${skill.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{skill.category}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{skill.name}</h3>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-xs font-semibold text-slate-500">{skill.level}% Competencia</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
