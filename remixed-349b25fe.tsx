import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ArrowLeft, CheckCircle, Circle, Leaf, Beaker, Zap, Globe, ChevronRight, FileText, Lightbulb, Target, X, ClipboardList, Award, Trophy, Star, Flame, Brain, Sparkles } from 'lucide-react';

// Diagram Components
const LewisDotDiagram = () => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
    <h4 className="text-center font-semibold text-gray-700 mb-6">Lewis Dot Diagram Examples</h4>
    <div className="flex justify-around items-center flex-wrap gap-8">
      {[
        { symbol: 'H', dots: 1, name: 'Hydrogen' },
        { symbol: 'C', dots: 4, name: 'Carbon' },
        { symbol: 'N', dots: 5, name: 'Nitrogen' },
        { symbol: 'O', dots: 6, name: 'Oxygen' }
      ].map((element) => (
        <div key={element.symbol} className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">{element.symbol}</span>
              </div>
            </div>
            {/* Draw dots around the symbol */}
            {Array.from({ length: element.dots }).map((_, i) => {
              const angle = (i * 360) / 8 + 45; // Distribute evenly, starting from top-right
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 35 * Math.cos(rad);
              const y = 50 + 35 * Math.sin(rad);
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-red-500 rounded-full"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                />
              );
            })}
          </div>
          <p className="text-sm font-medium text-gray-600">{element.name}</p>
          <p className="text-xs text-gray-500">{element.dots} valence e⁻</p>
        </div>
      ))}
    </div>
  </div>
);

const BohrDiagram = () => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
    <h4 className="text-center font-semibold text-gray-700 mb-6">Bohr Diagram - Oxygen (8 protons, 8 neutrons, 8 electrons)</h4>
    <div className="flex justify-center">
      <div className="relative w-80 h-80">
        {/* Nucleus */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center shadow-lg z-10">
          <div className="text-center text-white">
            <div className="text-xs font-bold">8p⁺</div>
            <div className="text-xs font-bold">8n⁰</div>
          </div>
        </div>
        
        {/* First shell (2 electrons) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-3 border-blue-300"></div>
        {[0, 180].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 20 * Math.cos(rad);
          const y = 50 + 20 * Math.sin(rad);
          return (
            <div
              key={`shell1-${i}`}
              className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            />
          );
        })}
        
        {/* Second shell (6 electrons) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-3 border-green-300"></div>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          return (
            <div
              key={`shell2-${i}`}
              className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            />
          );
        })}
        
        {/* Labels */}
        <div className="absolute -right-12 top-1/3 text-xs font-semibold text-blue-600">Shell 1: 2e⁻</div>
        <div className="absolute -right-12 bottom-1/4 text-xs font-semibold text-green-600">Shell 2: 6e⁻</div>
      </div>
    </div>
  </div>
);

const EnergyPyramid = () => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
    <h4 className="text-center font-semibold text-gray-700 mb-6">Energy Pyramid (10% Energy Transfer)</h4>
    <div className="flex flex-col items-center gap-3">
      {[
        { level: 'Tertiary Consumers', energy: '54.7 kcal', width: 'w-32', color: 'from-red-400 to-red-500' },
        { level: 'Secondary Consumers', energy: '547 kcal', width: 'w-48', color: 'from-orange-400 to-orange-500' },
        { level: 'Primary Consumers', energy: '5,467 kcal', width: 'w-64', color: 'from-yellow-400 to-yellow-500' },
        { level: 'Producers', energy: '54,670 kcal', width: 'w-80', color: 'from-green-400 to-green-500' }
      ].map((tier, i) => (
        <div key={i} className={`${tier.width} h-16 bg-gradient-to-r ${tier.color} rounded-lg shadow-lg flex items-center justify-center text-white flex-col`}>
          <div className="font-bold text-sm">{tier.level}</div>
          <div className="text-xs">{tier.energy}</div>
        </div>
      ))}
    </div>
    <div className="mt-6 text-center">
      <div className="inline-block bg-blue-100 rounded-lg px-4 py-2">
        <p className="text-sm font-semibold text-blue-800">⚡ Only 10% of energy passes to the next level</p>
        <p className="text-xs text-blue-600 mt-1">90% lost as heat, movement, and waste</p>
      </div>
    </div>
  </div>
);

const CarbonCycle = () => (
  <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8">
    <h4 className="text-center font-semibold text-gray-700 mb-6">The Carbon Cycle</h4>
    <div className="relative h-80">
      {/* Central cycle */}
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Atmosphere */}
        <circle cx="200" cy="60" r="40" fill="#93C5FD" stroke="#3B82F6" strokeWidth="2"/>
        <text x="200" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">Atmosphere</text>
        <text x="200" y="75" textAnchor="middle" fontSize="10" fill="#1E40AF">CO₂</text>
        
        {/* Plants */}
        <circle cx="80" cy="150" r="40" fill="#86EFAC" stroke="#22C55E" strokeWidth="2"/>
        <text x="80" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">Plants</text>
        <text x="80" y="165" textAnchor="middle" fontSize="10" fill="#15803D">(Producers)</text>
        
        {/* Animals */}
        <circle cx="320" cy="150" r="40" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"/>
        <text x="320" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">Animals</text>
        <text x="320" y="165" textAnchor="middle" fontSize="10" fill="#92400E">(Consumers)</text>
        
        {/* Soil/Decomposers */}
        <circle cx="200" cy="240" r="40" fill="#A78BFA" stroke="#7C3AED" strokeWidth="2"/>
        <text x="200" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5B21B6">Soil</text>
        <text x="200" y="255" textAnchor="middle" fontSize="10" fill="#5B21B6">Decomposers</text>
        
        {/* Arrows with labels */}
        {/* Photosynthesis */}
        <path d="M 180 90 L 100 130" stroke="#22C55E" strokeWidth="2" fill="none" markerEnd="url(#arrowgreen)"/>
        <text x="130" y="105" fontSize="9" fill="#15803D" fontWeight="bold">Photosynthesis</text>
        
        {/* Respiration from plants */}
        <path d="M 100 110 L 180 70" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)"/>
        <text x="120" y="85" fontSize="9" fill="#1E40AF" fontWeight="bold">Respiration</text>
        
        {/* Consumption */}
        <path d="M 120 150 L 280 150" stroke="#F59E0B" strokeWidth="2" fill="none" markerEnd="url(#arroworange)"/>
        <text x="190" y="145" fontSize="9" fill="#92400E" fontWeight="bold">Eaten</text>
        
        {/* Respiration from animals */}
        <path d="M 300 110 L 220 70" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)"/>
        <text x="250" y="85" fontSize="9" fill="#1E40AF" fontWeight="bold">Respiration</text>
        
        {/* Death/Waste */}
        <path d="M 310 190 L 220 220" stroke="#7C3AED" strokeWidth="2" fill="none" markerEnd="url(#arrowpurple)"/>
        <text x="270" y="210" fontSize="9" fill="#5B21B6" fontWeight="bold">Death/Waste</text>
        
        {/* Decomposition */}
        <path d="M 180 220 L 180 100" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)"/>
        <text x="150" y="160" fontSize="9" fill="#1E40AF" fontWeight="bold">Decomposition</text>
        
        {/* Arrow markers */}
        <defs>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#22C55E" />
          </marker>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
          </marker>
          <marker id="arroworange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#F59E0B" />
          </marker>
          <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#7C3AED" />
          </marker>
        </defs>
      </svg>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
      <div className="bg-green-100 rounded-lg p-2">
        <span className="font-bold text-green-800">Photosynthesis:</span>
        <p className="text-green-700">CO₂ + H₂O → C₆H₁₂O₆ + O₂</p>
      </div>
      <div className="bg-blue-100 rounded-lg p-2">
        <span className="font-bold text-blue-800">Respiration:</span>
        <p className="text-blue-700">C₆H₁₂O₆ + O₂ → CO₂ + H₂O</p>
      </div>
    </div>
  </div>
);

const AtomicModels = () => (
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
    <h4 className="text-center font-semibold text-gray-700 mb-8">Evolution of Atomic Models</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Dalton - Solid Sphere */}
      <div className="text-center">
        <div className="bg-white rounded-xl p-6 shadow-md mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-24">
            <circle cx="50" cy="50" r="35" fill="#9333EA" opacity="0.8"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#7C3AED" strokeWidth="2"/>
          </svg>
        </div>
        <h5 className="font-bold text-purple-900 mb-1">Dalton (1803)</h5>
        <p className="text-xs text-purple-700">Solid Sphere</p>
        <p className="text-xs text-gray-600 mt-1">Indivisible ball</p>
      </div>

      {/* Thomson - Plum Pudding */}
      <div className="text-center">
        <div className="bg-white rounded-xl p-6 shadow-md mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-24">
            <circle cx="50" cy="50" r="35" fill="#F59E0B" opacity="0.3"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#F59E0B" strokeWidth="2"/>
            {/* Electrons scattered */}
            {[
              {x: 35, y: 35}, {x: 65, y: 35}, {x: 35, y: 50}, 
              {x: 65, y: 50}, {x: 35, y: 65}, {x: 65, y: 65},
              {x: 50, y: 42}, {x: 50, y: 58}
            ].map((pos, i) => (
              <circle key={i} cx={pos.x} cy={pos.y} r="3" fill="#DC2626"/>
            ))}
          </svg>
        </div>
        <h5 className="font-bold text-orange-900 mb-1">Thomson (1897)</h5>
        <p className="text-xs text-orange-700">Plum Pudding</p>
        <p className="text-xs text-gray-600 mt-1">Electrons in positive</p>
      </div>

      {/* Rutherford - Nuclear */}
      <div className="text-center">
        <div className="bg-white rounded-xl p-6 shadow-md mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-24">
            {/* Nucleus */}
            <circle cx="50" cy="50" r="8" fill="#DC2626"/>
            <circle cx="50" cy="50" r="8" fill="none" stroke="#991B1B" strokeWidth="1"/>
            {/* Electrons orbiting */}
            <circle cx="50" cy="50" r="30" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2"/>
            <circle cx="80" cy="50" r="3" fill="#3B82F6"/>
            <circle cx="20" cy="50" r="3" fill="#3B82F6"/>
            <circle cx="50" cy="20" r="3" fill="#3B82F6"/>
            <circle cx="50" cy="80" r="3" fill="#3B82F6"/>
          </svg>
        </div>
        <h5 className="font-bold text-red-900 mb-1">Rutherford (1911)</h5>
        <p className="text-xs text-red-700">Nuclear Model</p>
        <p className="text-xs text-gray-600 mt-1">Dense nucleus</p>
      </div>

      {/* Bohr - Planetary */}
      <div className="text-center">
        <div className="bg-white rounded-xl p-6 shadow-md mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-24">
            {/* Nucleus */}
            <circle cx="50" cy="50" r="6" fill="#DC2626"/>
            {/* Shell 1 */}
            <circle cx="50" cy="50" r="15" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
            <circle cx="65" cy="50" r="2.5" fill="#3B82F6"/>
            {/* Shell 2 */}
            <circle cx="50" cy="50" r="28" fill="none" stroke="#10B981" strokeWidth="1.5"/>
            <circle cx="78" cy="50" r="2.5" fill="#10B981"/>
            <circle cx="22" cy="50" r="2.5" fill="#10B981"/>
          </svg>
        </div>
        <h5 className="font-bold text-blue-900 mb-1">Bohr (1913)</h5>
        <p className="text-xs text-blue-700">Planetary Model</p>
        <p className="text-xs text-gray-600 mt-1">Energy levels</p>
      </div>
    </div>
    <div className="mt-6 bg-blue-100 rounded-lg p-4">
      <p className="text-sm text-blue-800 text-center">
        <span className="font-bold">Evolution:</span> From solid ball → embedded electrons → nuclear center → specific orbits
      </p>
    </div>
  </div>
);

const PeriodicTableDiagram = () => {
  const elements = [
    // Period 1
    { num: 1, sym: 'H', name: 'Hydrogen', type: 'nonmetal', group: 1, period: 1 },
    { num: 2, sym: 'He', name: 'Helium', type: 'noble', group: 18, period: 1 },
    // Period 2
    { num: 3, sym: 'Li', name: 'Lithium', type: 'alkali', group: 1, period: 2 },
    { num: 4, sym: 'Be', name: 'Beryllium', type: 'alkaline', group: 2, period: 2 },
    { num: 5, sym: 'B', name: 'Boron', type: 'metalloid', group: 13, period: 2 },
    { num: 6, sym: 'C', name: 'Carbon', type: 'nonmetal', group: 14, period: 2 },
    { num: 7, sym: 'N', name: 'Nitrogen', type: 'nonmetal', group: 15, period: 2 },
    { num: 8, sym: 'O', name: 'Oxygen', type: 'nonmetal', group: 16, period: 2 },
    { num: 9, sym: 'F', name: 'Fluorine', type: 'halogen', group: 17, period: 2 },
    { num: 10, sym: 'Ne', name: 'Neon', type: 'noble', group: 18, period: 2 },
    // Period 3
    { num: 11, sym: 'Na', name: 'Sodium', type: 'alkali', group: 1, period: 3 },
    { num: 12, sym: 'Mg', name: 'Magnesium', type: 'alkaline', group: 2, period: 3 },
    { num: 13, sym: 'Al', name: 'Aluminum', type: 'metal', group: 13, period: 3 },
    { num: 14, sym: 'Si', name: 'Silicon', type: 'metalloid', group: 14, period: 3 },
    { num: 15, sym: 'P', name: 'Phosphorus', type: 'nonmetal', group: 15, period: 3 },
    { num: 16, sym: 'S', name: 'Sulfur', type: 'nonmetal', group: 16, period: 3 },
    { num: 17, sym: 'Cl', name: 'Chlorine', type: 'halogen', group: 17, period: 3 },
    { num: 18, sym: 'Ar', name: 'Argon', type: 'noble', group: 18, period: 3 },
    // Period 4
    { num: 19, sym: 'K', name: 'Potassium', type: 'alkali', group: 1, period: 4 },
    { num: 20, sym: 'Ca', name: 'Calcium', type: 'alkaline', group: 2, period: 4 },
    { num: 21, sym: 'Sc', name: 'Scandium', type: 'transition', group: 3, period: 4 },
    { num: 22, sym: 'Ti', name: 'Titanium', type: 'transition', group: 4, period: 4 },
    { num: 23, sym: 'V', name: 'Vanadium', type: 'transition', group: 5, period: 4 },
    { num: 24, sym: 'Cr', name: 'Chromium', type: 'transition', group: 6, period: 4 },
    { num: 25, sym: 'Mn', name: 'Manganese', type: 'transition', group: 7, period: 4 },
    { num: 26, sym: 'Fe', name: 'Iron', type: 'transition', group: 8, period: 4 },
    { num: 27, sym: 'Co', name: 'Cobalt', type: 'transition', group: 9, period: 4 },
    { num: 28, sym: 'Ni', name: 'Nickel', type: 'transition', group: 10, period: 4 },
    { num: 29, sym: 'Cu', name: 'Copper', type: 'transition', group: 11, period: 4 },
    { num: 30, sym: 'Zn', name: 'Zinc', type: 'transition', group: 12, period: 4 },
    { num: 31, sym: 'Ga', name: 'Gallium', type: 'metal', group: 13, period: 4 },
    { num: 32, sym: 'Ge', name: 'Germanium', type: 'metalloid', group: 14, period: 4 },
    { num: 33, sym: 'As', name: 'Arsenic', type: 'metalloid', group: 15, period: 4 },
    { num: 34, sym: 'Se', name: 'Selenium', type: 'nonmetal', group: 16, period: 4 },
    { num: 35, sym: 'Br', name: 'Bromine', type: 'halogen', group: 17, period: 4 },
    { num: 36, sym: 'Kr', name: 'Krypton', type: 'noble', group: 18, period: 4 },
    // Period 5
    { num: 37, sym: 'Rb', name: 'Rubidium', type: 'alkali', group: 1, period: 5 },
    { num: 38, sym: 'Sr', name: 'Strontium', type: 'alkaline', group: 2, period: 5 },
    { num: 39, sym: 'Y', name: 'Yttrium', type: 'transition', group: 3, period: 5 },
    { num: 40, sym: 'Zr', name: 'Zirconium', type: 'transition', group: 4, period: 5 },
    { num: 41, sym: 'Nb', name: 'Niobium', type: 'transition', group: 5, period: 5 },
    { num: 42, sym: 'Mo', name: 'Molybdenum', type: 'transition', group: 6, period: 5 },
    { num: 43, sym: 'Tc', name: 'Technetium', type: 'transition', group: 7, period: 5 },
    { num: 44, sym: 'Ru', name: 'Ruthenium', type: 'transition', group: 8, period: 5 },
    { num: 45, sym: 'Rh', name: 'Rhodium', type: 'transition', group: 9, period: 5 },
    { num: 46, sym: 'Pd', name: 'Palladium', type: 'transition', group: 10, period: 5 },
    { num: 47, sym: 'Ag', name: 'Silver', type: 'transition', group: 11, period: 5 },
    { num: 48, sym: 'Cd', name: 'Cadmium', type: 'transition', group: 12, period: 5 },
    { num: 49, sym: 'In', name: 'Indium', type: 'metal', group: 13, period: 5 },
    { num: 50, sym: 'Sn', name: 'Tin', type: 'metal', group: 14, period: 5 },
    { num: 51, sym: 'Sb', name: 'Antimony', type: 'metalloid', group: 15, period: 5 },
    { num: 52, sym: 'Te', name: 'Tellurium', type: 'metalloid', group: 16, period: 5 },
    { num: 53, sym: 'I', name: 'Iodine', type: 'halogen', group: 17, period: 5 },
    { num: 54, sym: 'Xe', name: 'Xenon', type: 'noble', group: 18, period: 5 },
    // Period 6
    { num: 55, sym: 'Cs', name: 'Cesium', type: 'alkali', group: 1, period: 6 },
    { num: 56, sym: 'Ba', name: 'Barium', type: 'alkaline', group: 2, period: 6 },
    { num: 57, sym: 'La', name: 'Lanthanum', type: 'lanthanide', group: 3, period: 6 },
    { num: 72, sym: 'Hf', name: 'Hafnium', type: 'transition', group: 4, period: 6 },
    { num: 73, sym: 'Ta', name: 'Tantalum', type: 'transition', group: 5, period: 6 },
    { num: 74, sym: 'W', name: 'Tungsten', type: 'transition', group: 6, period: 6 },
    { num: 75, sym: 'Re', name: 'Rhenium', type: 'transition', group: 7, period: 6 },
    { num: 76, sym: 'Os', name: 'Osmium', type: 'transition', group: 8, period: 6 },
    { num: 77, sym: 'Ir', name: 'Iridium', type: 'transition', group: 9, period: 6 },
    { num: 78, sym: 'Pt', name: 'Platinum', type: 'transition', group: 10, period: 6 },
    { num: 79, sym: 'Au', name: 'Gold', type: 'transition', group: 11, period: 6 },
    { num: 80, sym: 'Hg', name: 'Mercury', type: 'transition', group: 12, period: 6 },
    { num: 81, sym: 'Tl', name: 'Thallium', type: 'metal', group: 13, period: 6 },
    { num: 82, sym: 'Pb', name: 'Lead', type: 'metal', group: 14, period: 6 },
    { num: 83, sym: 'Bi', name: 'Bismuth', type: 'metal', group: 15, period: 6 },
    { num: 84, sym: 'Po', name: 'Polonium', type: 'metalloid', group: 16, period: 6 },
    { num: 85, sym: 'At', name: 'Astatine', type: 'halogen', group: 17, period: 6 },
    { num: 86, sym: 'Rn', name: 'Radon', type: 'noble', group: 18, period: 6 },
    // Period 7
    { num: 87, sym: 'Fr', name: 'Francium', type: 'alkali', group: 1, period: 7 },
    { num: 88, sym: 'Ra', name: 'Radium', type: 'alkaline', group: 2, period: 7 },
    { num: 89, sym: 'Ac', name: 'Actinium', type: 'actinide', group: 3, period: 7 },
    { num: 104, sym: 'Rf', name: 'Rutherfordium', type: 'transition', group: 4, period: 7 },
    { num: 105, sym: 'Db', name: 'Dubnium', type: 'transition', group: 5, period: 7 },
    { num: 106, sym: 'Sg', name: 'Seaborgium', type: 'transition', group: 6, period: 7 },
    { num: 107, sym: 'Bh', name: 'Bohrium', type: 'transition', group: 7, period: 7 },
    { num: 108, sym: 'Hs', name: 'Hassium', type: 'transition', group: 8, period: 7 },
    { num: 109, sym: 'Mt', name: 'Meitnerium', type: 'transition', group: 9, period: 7 },
    { num: 110, sym: 'Ds', name: 'Darmstadtium', type: 'transition', group: 10, period: 7 },
    { num: 111, sym: 'Rg', name: 'Roentgenium', type: 'transition', group: 11, period: 7 },
    { num: 112, sym: 'Cn', name: 'Copernicium', type: 'transition', group: 12, period: 7 },
    { num: 113, sym: 'Nh', name: 'Nihonium', type: 'metal', group: 13, period: 7 },
    { num: 114, sym: 'Fl', name: 'Flerovium', type: 'metal', group: 14, period: 7 },
    { num: 115, sym: 'Mc', name: 'Moscovium', type: 'metal', group: 15, period: 7 },
    { num: 116, sym: 'Lv', name: 'Livermorium', type: 'metal', group: 16, period: 7 },
    { num: 117, sym: 'Ts', name: 'Tennessine', type: 'halogen', group: 17, period: 7 },
    { num: 118, sym: 'Og', name: 'Oganesson', type: 'noble', group: 18, period: 7 },
    // Lanthanides
    { num: 58, sym: 'Ce', name: 'Cerium', type: 'lanthanide' },
    { num: 59, sym: 'Pr', name: 'Praseodymium', type: 'lanthanide' },
    { num: 60, sym: 'Nd', name: 'Neodymium', type: 'lanthanide' },
    { num: 61, sym: 'Pm', name: 'Promethium', type: 'lanthanide' },
    { num: 62, sym: 'Sm', name: 'Samarium', type: 'lanthanide' },
    { num: 63, sym: 'Eu', name: 'Europium', type: 'lanthanide' },
    { num: 64, sym: 'Gd', name: 'Gadolinium', type: 'lanthanide' },
    { num: 65, sym: 'Tb', name: 'Terbium', type: 'lanthanide' },
    { num: 66, sym: 'Dy', name: 'Dysprosium', type: 'lanthanide' },
    { num: 67, sym: 'Ho', name: 'Holmium', type: 'lanthanide' },
    { num: 68, sym: 'Er', name: 'Erbium', type: 'lanthanide' },
    { num: 69, sym: 'Tm', name: 'Thulium', type: 'lanthanide' },
    { num: 70, sym: 'Yb', name: 'Ytterbium', type: 'lanthanide' },
    { num: 71, sym: 'Lu', name: 'Lutetium', type: 'lanthanide' },
    // Actinides
    { num: 90, sym: 'Th', name: 'Thorium', type: 'actinide' },
    { num: 91, sym: 'Pa', name: 'Protactinium', type: 'actinide' },
    { num: 92, sym: 'U', name: 'Uranium', type: 'actinide' },
    { num: 93, sym: 'Np', name: 'Neptunium', type: 'actinide' },
    { num: 94, sym: 'Pu', name: 'Plutonium', type: 'actinide' },
    { num: 95, sym: 'Am', name: 'Americium', type: 'actinide' },
    { num: 96, sym: 'Cm', name: 'Curium', type: 'actinide' },
    { num: 97, sym: 'Bk', name: 'Berkelium', type: 'actinide' },
    { num: 98, sym: 'Cf', name: 'Californium', type: 'actinide' },
    { num: 99, sym: 'Es', name: 'Einsteinium', type: 'actinide' },
    { num: 100, sym: 'Fm', name: 'Fermium', type: 'actinide' },
    { num: 101, sym: 'Md', name: 'Mendelevium', type: 'actinide' },
    { num: 102, sym: 'No', name: 'Nobelium', type: 'actinide' },
    { num: 103, sym: 'Lr', name: 'Lawrencium', type: 'actinide' },
  ];

  const getColor = (type) => {
    const colors = {
      alkali: 'bg-red-400 border-red-500',
      alkaline: 'bg-orange-400 border-orange-500',
      transition: 'bg-yellow-300 border-yellow-400',
      metal: 'bg-gray-400 border-gray-500',
      metalloid: 'bg-teal-400 border-teal-500',
      nonmetal: 'bg-blue-400 border-blue-500',
      halogen: 'bg-green-400 border-green-500',
      noble: 'bg-purple-400 border-purple-500',
      lanthanide: 'bg-pink-300 border-pink-400',
      actinide: 'bg-rose-300 border-rose-400'
    };
    return colors[type] || 'bg-gray-300 border-gray-400';
  };

  const renderElement = (el, size = 'normal') => {
    const sizeClasses = size === 'small' ? 'p-1' : 'p-2';
    const textSize = size === 'small' ? 'text-xs' : 'text-sm';
    
    return (
      <div className={`${getColor(el.type)} border-2 rounded ${sizeClasses} text-center flex flex-col justify-center hover:shadow-lg transition-shadow cursor-pointer`}>
        <div className={`${textSize} font-bold text-gray-800`}>{el.num}</div>
        <div className={`${size === 'small' ? 'text-sm' : 'text-lg'} font-bold text-gray-900`}>{el.sym}</div>
        {size !== 'small' && <div className="text-xs text-gray-700 truncate">{el.name}</div>}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4">
      <h4 className="text-center font-semibold text-gray-700 mb-4">Complete Periodic Table of Elements</h4>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-red-400 border border-red-500"></div>
          <span className="text-gray-700">Alkali</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-orange-400 border border-orange-500"></div>
          <span className="text-gray-700">Alkaline Earth</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-yellow-300 border border-yellow-400"></div>
          <span className="text-gray-700">Transition</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-gray-400 border border-gray-500"></div>
          <span className="text-gray-700">Post-transition</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-teal-400 border border-teal-500"></div>
          <span className="text-gray-700">Metalloid</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-blue-400 border border-blue-500"></div>
          <span className="text-gray-700">Nonmetal</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-green-400 border border-green-500"></div>
          <span className="text-gray-700">Halogen</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-purple-400 border border-purple-500"></div>
          <span className="text-gray-700">Noble Gas</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-pink-300 border border-pink-400"></div>
          <span className="text-gray-700">Lanthanide</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-rose-300 border border-rose-400"></div>
          <span className="text-gray-700">Actinide</span>
        </div>
      </div>

      {/* Main Periodic Table */}
      <div className="overflow-x-auto mb-4">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(18, minmax(50px, 1fr))', gap: '2px', minWidth: '900px'}}>
          {/* Period 1 */}
          {renderElement(elements.find(e => e.num === 1))}
          <div style={{gridColumn: 'span 16'}}></div>
          {renderElement(elements.find(e => e.num === 2))}

          {/* Period 2 */}
          {renderElement(elements.find(e => e.num === 3))}
          {renderElement(elements.find(e => e.num === 4))}
          <div style={{gridColumn: 'span 10'}}></div>
          {[5,6,7,8,9,10].map(n => renderElement(elements.find(e => e.num === n)))}

          {/* Period 3 */}
          {renderElement(elements.find(e => e.num === 11))}
          {renderElement(elements.find(e => e.num === 12))}
          <div style={{gridColumn: 'span 10'}}></div>
          {[13,14,15,16,17,18].map(n => renderElement(elements.find(e => e.num === n)))}

          {/* Period 4 */}
          {[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36].map(n => 
            renderElement(elements.find(e => e.num === n))
          )}

          {/* Period 5 */}
          {[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54].map(n => 
            renderElement(elements.find(e => e.num === n))
          )}

          {/* Period 6 */}
          {renderElement(elements.find(e => e.num === 55))}
          {renderElement(elements.find(e => e.num === 56))}
          {renderElement(elements.find(e => e.num === 57))}
          {[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86].map(n => 
            renderElement(elements.find(e => e.num === n))
          )}

          {/* Period 7 */}
          {renderElement(elements.find(e => e.num === 87))}
          {renderElement(elements.find(e => e.num === 88))}
          {renderElement(elements.find(e => e.num === 89))}
          {[104,105,106,107,108,109,110,111,112,113,114,115,116,117,118].map(n => 
            renderElement(elements.find(e => e.num === n))
          )}
        </div>
      </div>

      {/* Lanthanides and Actinides */}
      <div className="space-y-2">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(15, minmax(40px, 1fr))', gap: '2px', minWidth: '600px'}}>
          {[58,59,60,61,62,63,64,65,66,67,68,69,70,71].map(n => 
            renderElement(elements.find(e => e.num === n), 'small')
          )}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(15, minmax(40px, 1fr))', gap: '2px', minWidth: '600px'}}>
          {[90,91,92,93,94,95,96,97,98,99,100,101,102,103].map(n => 
            renderElement(elements.find(e => e.num === n), 'small')
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="bg-red-50 rounded-lg p-2 border border-red-200">
          <p className="font-bold text-red-800 mb-1">Group 1: Alkali Metals</p>
          <p className="text-red-700">Soft, highly reactive, 1 valence e⁻</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
          <p className="font-bold text-purple-800 mb-1">Group 18: Noble Gases</p>
          <p className="text-purple-700">Unreactive, full outer shell</p>
        </div>
      </div>
    </div>
  );
};

const studyLibrary = {
  flashcards: {
    id: 'flashcards',
    name: 'Flashcard Review',
    description: 'Interactive flashcards with visual aids for quick review and memorization',
    icon: Brain,
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'biology-flashcards',
        title: 'Biology Flashcards',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=400&fit=crop',
        flashcards: [
          { front: 'What are the three types of biodiversity?', back: 'Genetic diversity (variation within species), Species diversity (variety of species), and Ecosystem diversity (variety of ecosystems)' },
          { front: 'What does H.I.P.P.O.C stand for?', back: 'H - Habitat destruction\nI - Invasive species\nP - Pollution\nP - Population (human)\nO - Overharvesting\nC - Climate change' },
          { front: 'What is a biotic factor?', back: 'A living component of an ecosystem (plants, animals, bacteria, fungi)' },
          { front: 'What is an abiotic factor?', back: 'A non-living component of an ecosystem (sunlight, water, soil, temperature)' },
          { front: 'What is the 10% rule in energy transfer?', back: 'Only 10% of energy passes to the next trophic level. 90% is lost as heat, movement, and waste.' },
          { front: 'What is bioaccumulation?', back: 'The build-up of a substance (like a toxin) in a single organism over time' },
          { front: 'What is biomagnification?', back: 'The increase in concentration of a substance as you move up the food chain' },
          { front: 'What is photosynthesis?', back: 'The process where plants use CO₂ and water to make glucose and oxygen using sunlight\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
          { front: 'What is cellular respiration?', back: 'The process where organisms break down glucose with oxygen to release energy\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP' },
          { front: 'What is nitrogen fixation?', back: 'The conversion of atmospheric nitrogen (N₂) into ammonia (NH₃) by bacteria or lightning' },
          { front: 'What makes a species invasive?', back: 'A non-native species that causes harm by: rapid reproduction, outcompeting natives, lacking natural predators, and disrupting ecosystems' },
          { front: 'What is reforestation?', back: 'Planting trees in areas where they were previously cut down to restore ecosystems' },
          { front: 'What is bioremediation?', back: 'Adding organisms (like bacteria) that break down waste and improve soil/water quality' },
          { front: 'What are the 4 spheres of Earth?', back: 'Biosphere (living things), Atmosphere (air), Hydrosphere (water), Lithosphere (rocks/soil)' },
          { front: 'What is a sustainable ecosystem?', back: 'An ecosystem that can maintain itself over time with resources regenerating as fast as they are used' }
        ],
        notes: []
      },
      {
        id: 'chemistry-flashcards',
        title: 'Chemistry Flashcards',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=400&fit=crop',
        flashcards: [
          { front: 'What are the three subatomic particles?', back: 'Protons (+1 charge, in nucleus)\nNeutrons (0 charge, in nucleus)\nElectrons (-1 charge, in shells)' },
          { front: 'What is a pure substance?', back: 'Matter with uniform composition - either an element (one type of atom) or compound (bonded elements)' },
          { front: 'What is a homogeneous mixture?', back: 'A mixture that is uniform throughout - you cannot see the individual parts (solution)' },
          { front: 'What is a heterogeneous mixture?', back: 'A mixture where you can see different parts (mechanical mixture, suspension)' },
          { front: 'What is density?', back: 'Mass per unit volume\nD = m/V\nMeasured in g/cm³ or g/mL' },
          { front: 'What is a physical property?', back: 'A characteristic you can observe WITHOUT changing the substance (color, mass, density, melting point)' },
          { front: 'What is a chemical property?', back: 'How a substance reacts with OTHER substances (combustibility, reactivity, stability)' },
          { front: 'What are 5 signs of a chemical change?', back: 'Color change, gas production, temperature change, light production, precipitate forms' },
          { front: 'Who proposed the plum pudding model?', back: 'J.J. Thomson - discovered electrons and proposed positive material with embedded electrons' },
          { front: 'Who discovered the nucleus?', back: 'Ernest Rutherford - found dense positive nucleus with electrons orbiting around it' },
          { front: 'What did Bohr contribute?', back: 'Niels Bohr proposed that electrons orbit in specific energy levels/shells (planetary model)' },
          { front: 'How do you find the number of neutrons?', back: 'Neutrons = Mass number - Atomic number' },
          { front: 'What are valence electrons?', back: 'Electrons in the outermost shell that determine chemical behavior' },
          { front: 'What is an ion?', back: 'An atom with unequal protons and electrons\nCation = positive (lost electrons)\nAnion = negative (gained electrons)' },
          { front: 'What are isotopes?', back: 'Atoms of the same element with different numbers of neutrons (same protons, different mass)' },
          { front: 'What are alkali metals?', back: 'Group 1 elements: soft, highly reactive, shiny, 1 valence electron' },
          { front: 'What are halogens?', back: 'Group 17 elements: reactive non-metals, diatomic, gain 1 electron, form salts' },
          { front: 'What are noble gases?', back: 'Group 18 elements: unreactive, full valence shell (8 electrons), stable' },
          { front: 'What is the formula for density?', back: 'D = m/V\nWhere D = density, m = mass, V = volume' },
          { front: 'Will an object float or sink?', back: 'Float if object density < liquid density\nSink if object density > liquid density' }
        ],
        notes: []
      }
    ]
  },
  testReview: {
    id: 'testReview',
    name: 'Test Review Guide',
    description: 'Comprehensive guides covering everything you need to know for your tests',
    icon: Target,
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'biology-review',
        title: 'Biology Test - What You Need to Know',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Lesson 1: Biodiversity Types',
            emoji: '🌿',
            points: [
              'What are the three types of biodiversity? Provide an example of each',
              'Genetic, species, and ecosystem diversity'
            ]
          },
          {
            subtitle: 'Lesson 2: H.I.P.P.O.C Threats',
            emoji: '⚠️',
            points: [
              'Explain what each letter of H.I.P.P.O.C stands for',
              'Provide an example of each threat',
              'Describe one solution to address each threat'
            ]
          },
          {
            subtitle: 'Lesson 3: Ecosystem Factors',
            emoji: '🌍',
            points: [
              'Differentiate between biotic and abiotic factors',
              'Name 6 examples of each type',
              'Explain sustainable vs non-sustainable ecosystems',
              'Name and describe each of the 4 spheres',
              'Provide examples of interactions between spheres'
            ]
          },
          {
            subtitle: 'Lesson 4: Ecosystem Services & Types',
            emoji: '🎯',
            points: [
              'Explain what an ecosystem service is',
              'Give two examples of ecosystem services',
              'Difference between natural and artificial ecosystems',
              'Provide examples of each'
            ]
          },
          {
            subtitle: 'Lesson 5: Symbiosis & Relationships',
            emoji: '🤝',
            points: [
              'What is symbiosis?',
              'Different types of symbiotic relationships (mutualism, commensalism, parasitism)',
              'Give examples of each type'
            ]
          },
          {
            subtitle: 'Lesson 6: Food Chains & Energy',
            emoji: '🔗',
            points: [
              'What is a food chain?',
              'Practice aquatic and terrestrial food chains',
              'Include trophic levels and arrows for energy flow',
              'How much energy passes between levels? (10%)',
              'What happens to the other 90%?'
            ]
          },
          {
            subtitle: 'Lesson 7: Energy Pyramids',
            emoji: '🔺',
            points: [
              'Draw an energy pyramid for a food chain',
              'If producers have 54,670 kcal, calculate each level',
              'Explain bioaccumulation vs biomagnification',
              'Provide examples for each'
            ]
          },
          {
            subtitle: 'Lesson 8: Nutrient Cycles',
            emoji: '♻️',
            points: [
              'What are nutrients? Why are they important?',
              'Examples of reservoirs and transfer processes',
              'Outline Carbon cycle with flow diagram (reservoirs + processes)',
              'Know photosynthesis and cellular respiration (reactants + products)',
              'How do human activities affect these processes?',
              'Outline Nitrogen cycle with flow diagram'
            ]
          },
          {
            subtitle: 'Lesson 9: Invasive Species',
            emoji: '🦟',
            points: [
              'What are invasive species? What criteria defines them?',
              'Examples of invasive species',
              'For one species: origin, location where invasive, harm caused',
              'Describe strategies to control/manage invasive species'
            ]
          },
          {
            subtitle: 'Lesson 10: Climate Change & Restoration',
            emoji: '🌡️',
            points: [
              'What is climate change? Evidence that climate is changing?',
              'Worldwide impacts of climate change',
              'How to fix damaged ecosystems:',
              'Describe reforestation, bioaugmentation, and bioremediation'
            ]
          }
        ]
      },
      {
        id: 'chemistry-review',
        title: 'Chemistry Test - What You Need to Know',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Lesson 1: Safety + Lab Equipment',
            emoji: '🥽',
            points: [
              'Be familiar with WHMIS safety labels on chemical containers',
              'Know all lab safety rules',
              'Identify common lab equipment'
            ]
          },
          {
            subtitle: 'Lesson 2: Types of Matter',
            emoji: '🧪',
            points: [
              'Distinguish between pure substances and mixtures',
              'Heterogeneous mixtures: mechanical mixtures, suspensions, emulsions',
              'Homogeneous mixtures: solutions and alloys',
              'Be able to classify examples of each type'
            ]
          },
          {
            subtitle: 'Lesson 3: Properties of Matter',
            emoji: '⚖️',
            points: [
              'Distinguish chemical vs physical properties (with examples)',
              'Distinguish quantitative vs qualitative properties (with examples)',
              'Know how to solve density problems',
              'Describe how density changes when mass/volume increases or decreases',
              'Draw (plot) a line graph by hand from supplied data',
              'Use a mass vs volume graph to find density of an object'
            ]
          },
          {
            subtitle: 'Lesson 4: Physical/Chemical Changes',
            emoji: '🔬',
            points: [
              'Explain the meaning of physical change vs chemical change',
              'List evidence to look for when checking for chemical change',
              'Color change, gas production, temperature change, energy production, precipitate'
            ]
          },
          {
            subtitle: 'Lesson 5: Organization of Periodic Table',
            emoji: '📋',
            points: [
              'Identify properties and location of families: alkali metals, alkaline earth metals, halogens, noble gases',
              'List name and symbols for first 20 elements',
              'State properties of metals and non-metals',
              'Identify metals, non-metals, metalloids using Periodic Table'
            ]
          },
          {
            subtitle: 'Lesson 6: Models of the Atom',
            emoji: '🔭',
            points: [
              'Outline contributions of Dalton, Thomson, Rutherford, and Bohr',
              'Know the names of each scientist\'s atomic model',
              'Dalton: solid sphere, Thomson: plum pudding, Rutherford: nuclear, Bohr: planetary'
            ]
          },
          {
            subtitle: 'Lesson 7: Subatomic Particles + Bohr-Rutherford Diagrams',
            emoji: '⚛️',
            points: [
              'Explain electrons, protons, neutrons (charge and mass)',
              'Use periodic table to determine # of protons, neutrons, electrons',
              'Draw Bohr-Rutherford diagrams for first 20 elements',
              'Explain what an isotope is',
              'Recognize isotopes in a series of diagrams'
            ]
          },
          {
            subtitle: 'Lesson 8: Valence Electrons & Ions',
            emoji: '💫',
            points: [
              'Explain what valence electrons are',
              'Explain and draw Lewis dot diagrams for different elements',
              'Use periodic table to calculate protons, neutrons, electrons for ions',
              'Understand cations (positive) and anions (negative)'
            ]
          }
        ]
      }
    ]
  },
  practiceQuestions: {
    id: 'practiceQuestions',
    name: 'Practice Questions',
    description: 'Interactive quizzes with instant feedback and detailed explanations',
    icon: FileText,
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'biology-practice',
        title: 'Biology Practice Questions',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
        quiz: [
          {
            question: 'What are the three types of biodiversity?',
            options: ['Genetic, species, ecosystem', 'Plant, animal, microbe', 'Land, water, air', 'Producer, consumer, decomposer'],
            correct: 0,
            explanation: 'The three types are genetic diversity (variation within species), species diversity (variety of species), and ecosystem diversity (variety of ecosystems).'
          },
          {
            question: 'In H.I.P.P.O.C., what does the "H" stand for?',
            options: ['Human population', 'Habitat destruction', 'Hunting', 'Hazardous waste'],
            correct: 1,
            explanation: 'H stands for Habitat Destruction - the removal of living spaces that species need to survive.'
          },
          {
            question: 'Which is an example of a biotic factor?',
            options: ['Sunlight', 'Water', 'Bacteria', 'Temperature'],
            correct: 2,
            explanation: 'Bacteria are living organisms, making them biotic factors. Sunlight, water, and temperature are abiotic (non-living) factors.'
          },
          {
            question: 'How much energy is transferred between trophic levels?',
            options: ['50%', '25%', '10%', '90%'],
            correct: 2,
            explanation: 'Only about 10% of energy passes to the next trophic level. The remaining 90% is lost as heat, movement, and waste.'
          },
          {
            question: 'If producers have 50,000 kcal, how much energy do primary consumers get?',
            options: ['50,000 kcal', '25,000 kcal', '5,000 kcal', '500 kcal'],
            correct: 2,
            explanation: 'Primary consumers receive 10% of the producer energy: 50,000 × 0.10 = 5,000 kcal.'
          },
          {
            question: 'What is bioaccumulation?',
            options: ['Increase up food chain', 'Build-up in one organism', 'Energy transfer', 'Nutrient cycling'],
            correct: 1,
            explanation: 'Bioaccumulation is the build-up of a substance within a single organism over time, like mercury accumulating in a fish.'
          },
          {
            question: 'What process removes CO₂ from the atmosphere?',
            options: ['Respiration', 'Photosynthesis', 'Combustion', 'Decomposition'],
            correct: 1,
            explanation: 'Photosynthesis removes CO₂ from the atmosphere as plants convert it into glucose using sunlight.'
          },
          {
            question: 'In the nitrogen cycle, what converts N₂ into ammonia?',
            options: ['Photosynthesis', 'Respiration', 'Nitrogen fixation', 'Denitrification'],
            correct: 2,
            explanation: 'Nitrogen fixation (by bacteria or lightning) converts atmospheric N₂ into ammonia (NH₃) that plants can use.'
          },
          {
            question: 'Which is NOT a characteristic of invasive species?',
            options: ['Native to the area', 'Rapid reproduction', 'Outcompete natives', 'Disrupt ecosystems'],
            correct: 0,
            explanation: 'Invasive species are NOT native to the area - they are introduced from elsewhere and cause harm to native ecosystems.'
          },
          {
            question: 'What is bioremediation?',
            options: ['Planting trees', 'Adding helpful organisms', 'Using bacteria to break down toxins', 'Reducing pollution'],
            correct: 1,
            explanation: 'Bioremediation involves adding species that break down waste and improve soil/water quality to restore ecosystems.'
          }
        ],
        notes: []
      },
      {
        id: 'chemistry-practice',
        title: 'Chemistry Practice Questions',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=400&fit=crop',
        quiz: [
          {
            question: 'Which WHMIS symbol indicates a flammable substance?',
            options: ['Skull and crossbones', 'Flame', 'Exclamation mark', 'Test tube'],
            correct: 1,
            explanation: 'The flame symbol indicates flammable substances that catch fire easily from heat, sparks, or flames.'
          },
          {
            question: 'What type of mixture is salt water?',
            options: ['Heterogeneous', 'Homogeneous', 'Suspension', 'Mechanical'],
            correct: 1,
            explanation: 'Salt water is a homogeneous mixture (solution) - it is uniform throughout and you cannot see the individual parts.'
          },
          {
            question: 'Which is a chemical property?',
            options: ['Color', 'Density', 'Combustibility', 'Melting point'],
            correct: 2,
            explanation: 'Combustibility (ability to burn) is a chemical property because it describes how a substance reacts with other substances.'
          },
          {
            question: 'A substance has mass of 80g and volume of 20cm³. What is its density?',
            options: ['2 g/cm³', '4 g/cm³', '60 g/cm³', '100 g/cm³'],
            correct: 1,
            explanation: 'D = m/V = 80g / 20cm³ = 4 g/cm³'
          },
          {
            question: 'Which is evidence of a chemical change?',
            options: ['Melting', 'Breaking', 'Color change', 'Dissolving'],
            correct: 2,
            explanation: 'Color change is evidence of a chemical change. Melting, breaking, and dissolving are typically physical changes.'
          },
          {
            question: 'What is the symbol for potassium?',
            options: ['P', 'Po', 'K', 'Pt'],
            correct: 2,
            explanation: 'Potassium has the symbol K (from its Latin name Kalium). It is element #19.'
          },
          {
            question: 'Which scientist proposed the plum pudding model?',
            options: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'],
            correct: 1,
            explanation: 'J.J. Thomson proposed the plum pudding model after discovering electrons - positive material with embedded electrons.'
          },
          {
            question: 'An atom has 6 protons, 6 neutrons, and 6 electrons. What element is it?',
            options: ['Nitrogen', 'Carbon', 'Oxygen', 'Boron'],
            correct: 1,
            explanation: 'The number of protons determines the element. 6 protons = Carbon (C).'
          },
          {
            question: 'How many electrons can the second shell hold?',
            options: ['2', '4', '8', '18'],
            correct: 2,
            explanation: 'The second electron shell can hold a maximum of 8 electrons.'
          },
          {
            question: 'What is an ion with more electrons than protons called?',
            options: ['Cation', 'Anion', 'Isotope', 'Neutral'],
            correct: 1,
            explanation: 'An anion is a negatively charged ion that has gained electrons (more electrons than protons).'
          }
        ],
        notes: []
      }
    ]
  },
  worksheets: {
    id: 'worksheets',
    name: 'Practice Worksheets',
    description: 'Detailed practice problems with step-by-step answers you can reveal',
    icon: ClipboardList,
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'biology-worksheets',
        title: 'Biology Practice Worksheets',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Worksheet 1: Biodiversity & H.I.P.P.O.C',
            emoji: '📝',
            points: [
              '1. Define the three types of biodiversity and give an example of each.',
              '2. Create a diagram showing genetic diversity in dogs (3 different breeds).',
              '3. List all letters of H.I.P.P.O.C with full names and one example for each.',
              '4. Choose one H.I.P.P.O.C threat and propose 2 solutions to address it.',
              '5. Explain which H.I.P.P.O.C threat you think is most serious and why.'
            ],
            answers: [
              'Genetic diversity: variation within a species (e.g., different dog breeds) • Species diversity: variety of species in a habitat (e.g., coral reef fish) • Ecosystem diversity: variety of ecosystems in a region (e.g., forests, wetlands, grasslands)',
              'Draw three different dog breeds showing physical differences • Label traits like size, coat color, ear shape • Explain these are same species but different genes',
              'H = Habitat Destruction (deforestation) • I = Invasive Species (zebra mussels) • P = Pollution (oil spills) • P = Population/Human (urban sprawl) • O = Overharvesting (overfishing cod) • C = Climate Change (coral bleaching)',
              'Choose any threat • Example: Habitat Destruction → Solution 1: Protected areas/parks • Solution 2: Reforestation programs',
              'Answers vary • Should explain reasoning • Example: Climate change affects all ecosystems globally • Discuss long-term impacts'
            ]
          },
          {
            subtitle: 'Worksheet 2: Ecosystem Factors & Services',
            emoji: '📝',
            points: [
              '1. List 6 biotic factors and 6 abiotic factors in a forest ecosystem.',
              '2. Explain the difference between sustainable and non-sustainable ecosystems.',
              '3. Name the 4 spheres and give 2 examples for each.',
              '4. Describe 3 interactions between different spheres.',
              '5. Define ecosystem services and list one example from each category (provisioning, regulating, supporting, cultural).',
              '6. Compare natural vs artificial ecosystems with examples.'
            ],
            answers: [
              'Biotic: trees, deer, birds, insects, fungi, bacteria • Abiotic: sunlight, water, soil, air, temperature, rocks',
              'Sustainable: can maintain itself over time, resources regenerate, balanced ecosystem • Non-sustainable: resources depleted faster than replaced, imbalanced, eventually collapses',
              'Biosphere (plants, animals) • Atmosphere (air, oxygen) • Hydrosphere (oceans, rivers) • Lithosphere (rocks, soil)',
              'Example 1: Rain (atmosphere) waters plants (biosphere) • Example 2: Plants (biosphere) add oxygen to air (atmosphere) • Example 3: Rivers (hydrosphere) erode rocks (lithosphere)',
              'Ecosystem services = benefits from nature • Provisioning: food/water • Regulating: climate control • Supporting: nutrient cycling • Cultural: recreation/parks',
              'Natural: self-sustaining, biodiversity, no human maintenance (forest, coral reef) • Artificial: human-made, needs maintenance, limited diversity (farm, aquarium)'
            ]
          },
          {
            subtitle: 'Worksheet 3: Food Chains & Energy',
            emoji: '📝',
            points: [
              '1. Draw an aquatic food chain with 4 trophic levels. Label each level.',
              '2. Draw a terrestrial food chain with 4 trophic levels. Label each level.',
              '3. Add arrows to show energy flow direction in your food chains.',
              '4. Calculate: If producers have 100,000 kcal, how much energy does each level receive?',
              '5. Draw an energy pyramid for the calculation above.',
              '6. Explain where the "missing" 90% of energy goes at each level.',
              '7. Why can\'t food chains be infinitely long? Explain using energy transfer.'
            ],
            answers: [
              'Example: Phytoplankton → Small fish → Medium fish → Shark • Label: Producer → Primary consumer → Secondary consumer → Tertiary consumer',
              'Example: Grass → Grasshopper → Mouse → Snake • Label: Producer → Primary consumer → Secondary consumer → Tertiary consumer',
              'Arrows point from food source to consumer • Shows direction energy flows • Each arrow = "is eaten by"',
              'Producers: 100,000 kcal • Primary consumers: 10,000 kcal (10%) • Secondary consumers: 1,000 kcal (10%) • Tertiary consumers: 100 kcal (10%)',
              'Draw pyramid shape • Bottom largest (producers 100,000) • Each level smaller going up • Top smallest (tertiary 100)',
              '90% lost as heat from movement/metabolism • Used for life processes (breathing, moving) • Released as waste • Only 10% stored in body tissues',
              'Not enough energy left after several levels • By 4-5 levels, too little energy to support organisms • Would need massive producer base for tiny top predator population'
            ]
          },
          {
            subtitle: 'Worksheet 4: Bioaccumulation & Nutrient Cycles',
            emoji: '📝',
            points: [
              '1. Define bioaccumulation and biomagnification. Give an example of each.',
              '2. Draw a simple food chain and show how mercury concentration increases at each level.',
              '3. Draw the carbon cycle. Include: atmosphere, biosphere, lithosphere, hydrosphere.',
              '4. Label these processes on your carbon cycle: photosynthesis, respiration, combustion, decomposition, ocean uptake.',
              '5. Write the equation for photosynthesis (both word and chemical formula).',
              '6. Write the equation for cellular respiration (both word and chemical formula).',
              '7. How do humans affect the carbon cycle? List 3 ways.'
            ],
            answers: [
              'Bioaccumulation: toxin builds up in one organism over time (fish absorbs mercury from water) • Biomagnification: concentration increases up food chain (eagle has more mercury than fish it eats)',
              'Example: Plankton (0.01 ppm) → Small fish (0.1 ppm) → Large fish (1 ppm) → Bird (10 ppm) • Show concentration multiplies at each level',
              'Draw four reservoirs in boxes/circles • Atmosphere (CO₂ gas) • Biosphere (living things) • Lithosphere (fossil fuels, rocks) • Hydrosphere (dissolved CO₂ in water)',
              'Photosynthesis: CO₂ from atmosphere to plants • Respiration: CO₂ from organisms to atmosphere • Combustion: CO₂ from burning to atmosphere • Decomposition: CO₂ from dead matter to atmosphere/soil • Ocean uptake: CO₂ from atmosphere to ocean',
              'Word: Carbon dioxide + Water → Glucose + Oxygen • Chemical: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
              'Word: Glucose + Oxygen → Carbon dioxide + Water + Energy • Chemical: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'Burning fossil fuels (releases stored carbon) • Deforestation (less CO₂ absorbed) • Agriculture/livestock (releases methane and CO₂)'
            ]
          },
          {
            subtitle: 'Worksheet 5: Nitrogen Cycle & Restoration',
            emoji: '📝',
            points: [
              '1. Draw the nitrogen cycle with reservoirs labeled (atmosphere, soil, organisms, water).',
              '2. Label these processes: nitrogen fixation, nitrification, assimilation, ammonification, denitrification.',
              '3. Explain the role of bacteria in the nitrogen cycle.',
              '4. What are invasive species? List 3 characteristics.',
              '5. Choose one invasive species. State: origin, where it\'s invasive, harm caused, control methods.',
              '6. Define and give examples: reforestation, bioaugmentation, bioremediation.',
              '7. How does climate change affect ecosystems? List 4 impacts.'
            ],
            answers: [
              'Draw cycle showing: Atmosphere (N₂ gas) → Soil (NH₃, NO₃⁻) → Organisms (proteins) → back to atmosphere • Include arrows between reservoirs',
              'Nitrogen fixation: N₂ → NH₃ (atmosphere to soil) • Nitrification: NH₃ → NO₂⁻ → NO₃⁻ (in soil) • Assimilation: NO₃⁻ absorbed by plants • Ammonification: dead matter → NH₄⁺ • Denitrification: NO₃⁻ → N₂ (back to atmosphere)',
              'Bacteria perform most conversions • Rhizobium fixes nitrogen in plant roots • Nitrosomonas/Nitrobacter do nitrification • Decomposers do ammonification • Denitrifying bacteria return N₂ to air',
              'Invasive species: non-native organism that causes harm • Characteristics: rapid reproduction, outcompete natives, lack natural predators, disrupt food chains',
              'Example: Zebra mussels • Origin: Eastern Europe/Russia • Invasive: Great Lakes, North America • Harm: clog water pipes, outcompete native mussels, disrupt food chain • Control: drain/clean boats, chemical treatments',
              'Reforestation: planting trees where cut down (Amazon restoration) • Bioaugmentation: adding bacteria/organisms to break down toxins (oil spill cleanup) • Bioremediation: using organisms to improve soil/water quality (microbes filtering water)',
              'Rising temperatures change habitats • Extreme weather destroys ecosystems • Sea level rise floods coastal areas • Species migration/extinction • Coral bleaching • Changes in precipitation patterns'
            ]
          }
        ]
      },
      {
        id: 'chemistry-worksheets',
        title: 'Chemistry Practice Worksheets',
        image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Worksheet 1: Lab Safety & Matter Classification',
            emoji: '📝',
            points: [
              '1. Draw 5 WHMIS symbols and explain what each one means.',
              '2. List 5 important lab safety rules.',
              '3. Create a flow chart showing how matter is classified (pure substances, mixtures, etc.).',
              '4. Classify these: salt water, gold, pizza, air, H₂O, trail mix, brass.',
              '5. For each mixture above, identify if it\'s homogeneous or heterogeneous and explain why.'
            ],
            answers: [
              'Flame (flammable) • Skull/crossbones (poisonous) • Exclamation (irritant) • Test tube on hand (corrosive) • Circle with flame (oxidizer) • Draw symbols and explain hazards',
              'Wear safety goggles • Tie back long hair • No eating/drinking • Report accidents immediately • Know location of safety equipment • Read labels before using chemicals',
              'Matter → Pure substances (elements, compounds) and Mixtures (homogeneous, heterogeneous) • Show branching diagram',
              'Salt water: homogeneous mixture • Gold: element • Pizza: heterogeneous mixture • Air: homogeneous mixture • H₂O: compound • Trail mix: heterogeneous mixture • Brass: homogeneous mixture (alloy)',
              'Salt water: homogeneous, uniform throughout • Pizza: heterogeneous, see different parts • Air: homogeneous, uniform gas mixture • Trail mix: heterogeneous, see nuts/raisins • Brass: homogeneous, metal alloy is uniform'
            ]
          },
          {
            subtitle: 'Worksheet 2: Properties & Density',
            emoji: '📝',
            points: [
              '1. List 4 qualitative physical properties and 4 quantitative physical properties.',
              '2. List 3 chemical properties with examples.',
              '3. Solve: A rock has mass 150g and volume 50cm³. Find density.',
              '4. Solve: An object has density 2.5 g/mL and mass 75g. Find volume.',
              '5. Solve: A liquid has density 0.8 g/mL and volume 200mL. Find mass.',
              '6. Will an object with density 1.5 g/cm³ float or sink in water (1.0 g/cm³)? Explain.',
              '7. Describe how to find the volume of an irregular shaped object using water displacement.'
            ],
            answers: [
              'Qualitative: color, texture, odor, luster • Quantitative: mass, volume, density, melting point',
              'Combustibility: paper burns • Reactivity with acid: metals produce hydrogen • Stability: iron rusts in oxygen',
              'D = m/V = 150g / 50cm³ = 3 g/cm³',
              'V = m/D = 75g / 2.5 g/mL = 30 mL',
              'm = D × V = 0.8 g/mL × 200mL = 160g',
              'Sink • Object density (1.5) > water density (1.0) • Objects denser than liquid sink',
              'Measure initial water level in graduated cylinder • Carefully place object in water • Measure new water level • Volume = final level - initial level'
            ]
          },
          {
            subtitle: 'Worksheet 3: Physical & Chemical Changes',
            emoji: '📝',
            points: [
              '1. Define physical change and chemical change.',
              '2. List the 5 indicators of a chemical change.',
              '3. Classify these as physical or chemical: ice melting, wood burning, cutting paper, rusting nail, dissolving sugar, cooking egg, breaking glass, baking cake.',
              '4. For each chemical change above, state which indicator(s) you would observe.',
              '5. Explain why dissolving salt in water is a physical change, not chemical.',
              '6. Give 2 examples of chemical changes that produce gas.',
              '7. Give 2 examples of chemical changes that produce heat.'
            ],
            answers: [
              'Physical: same substance, different form, usually reversible (ice → water) • Chemical: new substance forms, difficult to reverse (burning wood → ash)',
              'Color change • Gas production/bubbles • Temperature change • Light production • Precipitate forms (solid in liquid)',
              'Physical: ice melting, cutting paper, dissolving sugar, breaking glass • Chemical: wood burning, rusting nail, cooking egg, baking cake',
              'Wood burning: light, heat, gas, color change • Rusting: color change • Cooking egg: color change, temperature • Baking cake: gas (bubbles), color, temperature',
              'Salt molecules separate but don\'t change • Can evaporate water and get salt back • No new substance formed • Reversible process',
              'Vinegar + baking soda → CO₂ bubbles • Antacid tablet in water → gas bubbles',
              'Combustion (burning wood) • Hand warmer packets • Neutralization reactions'
            ]
          },
          {
            subtitle: 'Worksheet 4: Periodic Table',
            emoji: '📝',
            points: [
              '1. Fill in the table: Elements 1-20 with names and symbols.',
              '2. Where are alkali metals located? List 3 properties.',
              '3. Where are halogens located? List 3 properties.',
              '4. Where are noble gases located? Why are they unreactive?',
              '5. List 5 properties of metals and 5 properties of non-metals.',
              '6. What are metalloids? Give 3 examples.',
              '7. Using the periodic table, identify these as metal, non-metal, or metalloid: Fe, Cl, Si, Na, O, B, Cu.'
            ],
            answers: [
              'H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca • Should know names and symbols for all',
              'Group 1, left side • Soft, highly reactive, shiny, low density, form +1 ions, react with water',
              'Group 17, right side before noble gases • Reactive non-metals, diatomic molecules, form salts, gain 1 electron, poisonous/toxic',
              'Group 18, far right column • Unreactive because full valence shell (8 electrons) • Stable, don\'t need to gain/lose electrons',
              'Metals: shiny, conductive, malleable, ductile, lose electrons • Non-metals: dull, insulators, brittle, gain electrons, lower melting points',
              'Metalloids: properties between metals and non-metals, semiconductors • Examples: Silicon (Si), Boron (B), Arsenic (As), Germanium (Ge)',
              'Fe: metal • Cl: non-metal • Si: metalloid • Na: metal • O: non-metal • B: metalloid • Cu: metal'
            ]
          },
          {
            subtitle: 'Worksheet 5: Atomic Structure',
            emoji: '📝',
            points: [
              '1. Draw and label the 4 atomic models: Dalton, Thomson, Rutherford, Bohr.',
              '2. Describe the contribution of each scientist to atomic theory.',
              '3. Complete the table for these atoms: C, O, Na, Mg, Cl (protons, neutrons, electrons).',
              '4. Draw Bohr-Rutherford diagrams for: H, He, C, N, O, Na, Mg.',
              '5. What are isotopes? Draw Bohr diagrams for Carbon-12 and Carbon-14.',
              '6. An atom has 17 protons, 18 neutrons, 17 electrons. What element is it? Draw its Bohr diagram.'
            ],
            answers: [
              'Dalton: solid sphere • Thomson: plum pudding (positive with electrons) • Rutherford: nucleus with orbiting electrons • Bohr: electrons in specific shells',
              'Dalton: atoms are indivisible spheres • Thomson: discovered electrons, positive material • Rutherford: discovered nucleus, mostly empty space • Bohr: electrons in energy levels/shells',
              'C: 6p, 6n, 6e • O: 8p, 8n, 8e • Na: 11p, 12n, 11e • Mg: 12p, 12n, 12e • Cl: 17p, 18n, 17e',
              'H: 1e in shell 1 • He: 2e in shell 1 • C: 2e in shell 1, 4e in shell 2 • N: 2e, 5e • O: 2e, 6e • Na: 2e, 8e, 1e • Mg: 2e, 8e, 2e',
              'Isotopes: same element, different neutrons • C-12: 6p, 6n, 6e • C-14: 6p, 8n, 6e • Both have 2e in shell 1, 4e in shell 2',
              'Chlorine (Cl) • 17 protons = atomic number 17 • Draw: nucleus with 17p 18n, shell 1: 2e, shell 2: 8e, shell 3: 7e'
            ]
          },
          {
            subtitle: 'Worksheet 6: Valence Electrons & Ions',
            emoji: '📝',
            points: [
              '1. What are valence electrons? Why are they important?',
              '2. Draw Lewis dot diagrams for: H, C, N, O, F, Na, Mg, Al, Cl.',
              '3. How many valence electrons does each group have? Groups 1, 2, 13-18.',
              '4. Define cation and anion. Give 2 examples of each.',
              '5. An ion has 11 protons, 12 neutrons, and 10 electrons. What is its charge? What element?',
              '6. Complete the table for these ions: Na⁺, Cl⁻, Mg²⁺, O²⁻ (protons, neutrons, electrons).',
              '7. Why do atoms form ions? Explain using the concept of stability.'
            ],
            answers: [
              'Electrons in outermost shell • Determine how atoms bond and react • Atoms want full outer shell for stability',
              'H: 1 dot • C: 4 dots • N: 5 dots • O: 6 dots • F: 7 dots • Na: 1 dot • Mg: 2 dots • Al: 3 dots • Cl: 7 dots',
              'Group 1: 1 valence e⁻ • Group 2: 2 • Group 13: 3 • Group 14: 4 • Group 15: 5 • Group 16: 6 • Group 17: 7 • Group 18: 8',
              'Cation: positive ion, lost electrons (Na⁺, Ca²⁺) • Anion: negative ion, gained electrons (Cl⁻, O²⁻)',
              'Charge: +1 (11 protons - 10 electrons) • Element: Sodium (Na) because 11 protons',
              'Na⁺: 11p, 12n, 10e • Cl⁻: 17p, 18n, 18e • Mg²⁺: 12p, 12n, 10e • O²⁻: 8p, 8n, 10e',
              'Atoms form ions to achieve stable electron configuration (full outer shell) • Metals lose electrons to empty outer shell • Non-metals gain electrons to fill outer shell • Noble gas configuration is most stable'
            ]
          }
        ]
      }
    ]
  },
  biology: {
    id: 'biology',
    name: 'Biology: Sustainable Ecosystems',
    description: 'Study biodiversity, food chains, nutrient cycles, and ecosystem restoration',
    icon: Leaf,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'biodiversity',
        title: 'Three Types of Biodiversity',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Genetic Diversity',
            emoji: '🧬',
            points: [
              'Variation of genes within a species',
              'Example: Different breeds of dogs',
              'Why it matters: Helps species adapt and survive'
            ]
          },
          {
            subtitle: 'Species Diversity',
            emoji: '🐠',
            points: [
              'Variety of species within a habitat',
              'Example: Variety of fish species in a coral reef',
              'More species = More stable ecosystem'
            ]
          },
          {
            subtitle: 'Ecosystem Diversity',
            emoji: '🌍',
            points: [
              'Variety of ecosystems in a region',
              'Example: Forests, wetlands, grasslands in an area',
              'Different ecosystems support different life forms'
            ]
          }
        ]
      },
      {
        id: 'hippoc',
        title: 'H.I.P.P.O.C. - Threats to Biodiversity',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'H - Habitat Destruction',
            emoji: '🏗️',
            points: [
              'Removes living spaces for species',
              'Example: Deforestation of Amazon rainforest',
              'Species cannot survive without homes'
            ]
          },
          {
            subtitle: 'I - Invasive Species',
            emoji: '🦟',
            points: [
              'Outsiders compete with native species',
              'Example: Zebra mussels in North American lakes',
              'Disrupts natural balance'
            ]
          },
          {
            subtitle: 'P - Pollution',
            emoji: '🏭',
            points: [
              'Toxic chemicals, waste, and noise',
              'Example: Oil spills in oceans',
              'Kills or harms organisms'
            ]
          },
          {
            subtitle: 'P - Population (Human)',
            emoji: '👥',
            points: [
              'Too many people = more resources used',
              'Example: Urban sprawl reduces wildlife space',
              'Less room for native animals'
            ]
          },
          {
            subtitle: 'O - Overharvesting',
            emoji: '🎣',
            points: [
              'Taking too much (fishing/hunting/logging)',
              'Example: Overfishing of Atlantic cod',
              'Depletes species faster than recovery'
            ]
          },
          {
            subtitle: 'C - Climate Change',
            emoji: '🌡️',
            points: [
              'Alters habitats and weather patterns',
              'Example: Coral bleaching from warming seas',
              'Species struggle to adapt'
            ]
          }
        ]
      },
      {
        id: 'factors',
        title: 'Biotic vs Abiotic Factors',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Biotic Factors (Living)',
            emoji: '🌱',
            points: [
              'Plants, animals, bacteria, fungi',
              'Algae, insects, microorganisms',
              'Note: Dying/decaying things are still biotic (e.g., decaying logs)'
            ]
          },
          {
            subtitle: 'Abiotic Factors (Non-living)',
            emoji: '☀️',
            points: [
              'Sunlight, temperature, water',
              'Soil, air, pH levels',
              'Physical and chemical components'
            ]
          }
        ]
      },
      {
        id: 'food-chains',
        title: 'Food Chains & Energy Transfer',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'The 10% Rule',
            emoji: '⚡',
            points: [
              'Only 10% of energy passes to next level',
              '90% lost as heat, movement, waste',
              'That is why food chains are limited in length!'
            ],
            diagram: 'energy-pyramid'
          },
          {
            subtitle: 'Energy Pyramid Example',
            emoji: '🔺',
            points: [
              'Producers: 54,670 kcal',
              'Primary consumers: 5,467 kcal (10%)',
              'Secondary consumers: 547 kcal (10%)',
              'Tertiary consumers: 54.7 kcal (10%)'
            ]
          },
          {
            subtitle: 'Key Points',
            emoji: '📌',
            points: [
              'Decomposers not included in energy pyramid',
              'Ecosystems can survive without consumers',
              'Producers are essential (initial energy source)',
              'Humans not included (can be anywhere in chain)'
            ]
          }
        ]
      },
      {
        id: 'bioaccumulation',
        title: 'Bioaccumulation & Biomagnification',
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Bioaccumulation',
            emoji: '🐟',
            points: [
              'Build-up of substance in organism over time',
              'Example: Mercury in fish',
              'Individual organism absorbs toxins'
            ]
          },
          {
            subtitle: 'Biomagnification',
            emoji: '🦅',
            points: [
              'Concentration increases up food chain',
              'Example: DDT in birds of prey',
              'Top predators affected most',
              'Small fish eat plankton → bigger fish eat small fish → concentration increases'
            ]
          }
        ]
      },
      {
        id: 'restoration',
        title: 'Restoration Techniques',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Bio-Augmentation (Fixes)',
            emoji: '🦠',
            points: [
              'Uses bacteria/fungi to neutralize toxins',
              'Example: 2010 BP oil spill cleanup',
              'Breaks down contaminants naturally'
            ]
          },
          {
            subtitle: 'Bio-Remediation (Adds)',
            emoji: '🌿',
            points: [
              'Adding species that break down waste',
              'Improves soil quality and cleans water',
              'Example: Microbes as natural water filtration'
            ]
          },
          {
            subtitle: 'Reforestation',
            emoji: '🌲',
            points: [
              'Planting trees where they were cut',
              'Prevents soil erosion',
              'Provides food, shelter, shade for wildlife'
            ]
          }
        ]
      },
      {
        id: 'carbon-cycle',
        title: 'Carbon Cycle',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Reservoirs',
            emoji: '💨',
            points: [
              'Atmosphere: CO₂ gas',
              'Biosphere: Living organisms',
              'Lithosphere: Fossil fuels, carbonate rocks',
              'Hydrosphere: Dissolved CO₂ in water'
            ]
          },
          {
            subtitle: 'Key Processes',
            emoji: '🔄',
            points: [
              'Photosynthesis: Plants absorb CO₂ → glucose',
              'Respiration: Organisms release CO₂',
              'Combustion: Burning fuels releases CO₂',
              'Decomposition: Dead matter releases CO₂',
              'Ocean uptake: Oceans absorb atmospheric CO₂'
            ],
            diagram: 'carbon-cycle'
          }
        ]
      },
      {
        id: 'nitrogen-cycle',
        title: 'Nitrogen Cycle',
        image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Nitrogen Fixation',
            emoji: '⚡',
            points: [
              'N₂ → ammonia (NH₃)',
              'Done by bacteria (Rhizobium) or lightning',
              'Makes nitrogen usable for plants'
            ]
          },
          {
            subtitle: 'Nitrification',
            emoji: '🔬',
            points: [
              'Ammonia → nitrite (NO₂⁻) by Nitrosomonas',
              'Nitrite → nitrate (NO₃⁻) by Nitrobacter',
              'Two-step bacterial process'
            ]
          },
          {
            subtitle: 'Assimilation & Ammonification',
            emoji: '🌱',
            points: [
              'Assimilation: Plants absorb nitrate from soil',
              'Ammonification: Decomposers release ammonium',
              'Returns nitrogen to soil'
            ]
          },
          {
            subtitle: 'Denitrification',
            emoji: '💨',
            points: [
              'Nitrate → N₂ gas',
              'By denitrifying bacteria',
              'Returns nitrogen to atmosphere'
            ]
          }
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry: Matter & Changes',
    description: 'Learn about atoms, periodic table, chemical properties, and reactions',
    icon: Beaker,
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'lab-safety',
        title: 'Lab Safety & WHMIS Symbols',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'General Safety Rules',
            emoji: '⚠️',
            points: [
              'Wear safety goggles when required',
              'Tie back long hair',
              'NO eating or drinking in lab',
              'Report all accidents immediately',
              'Know where safety equipment is located'
            ]
          },
          {
            subtitle: 'Key WHMIS Symbols to Know',
            emoji: '🔶',
            points: [
              'Explosive: Risk of exploding',
              'Flammable: Catches fire easily',
              'Corrosive: Burns skin and eyes',
              'Health Hazard: May cause serious health issues',
              'Environmental Hazard: Toxic to aquatic life'
            ]
          }
        ]
      },
      {
        id: 'matter',
        title: 'Classification of Matter',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Pure Substances',
            emoji: '✨',
            points: [
              'Elements: One type of atom (e.g., Gold, Oxygen)',
              'Compounds: Two+ elements bonded (e.g., H₂O, NaCl)',
              'Uniform composition throughout'
            ]
          },
          {
            subtitle: 'Homogeneous Mixtures',
            emoji: '🥤',
            points: [
              'Uniform throughout - cannot see parts',
              'Examples: Salt water, air, brass',
              'Also called solutions'
            ]
          },
          {
            subtitle: 'Heterogeneous Mixtures',
            emoji: '🥗',
            points: [
              'Can see different parts',
              'Suspensions: Particles settle (muddy water)',
              'Mechanical: Parts clearly visible (trail mix)'
            ]
          }
        ]
      },
      {
        id: 'separation',
        title: 'Separation Methods',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Common Methods',
            emoji: '🔬',
            points: [
              'Filtration: Solid from liquid (sand from water)',
              'Distillation: Different boiling points (water from salt)',
              'Evaporation: Dissolved solid from liquid (get salt)',
              'Magnetism: Magnetic from non-magnetic (iron from sand)',
              'Chromatography: Dissolved substances (separate dyes)'
            ]
          }
        ]
      },
      {
        id: 'changes',
        title: 'Physical vs Chemical Changes',
        image: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Physical Changes',
            emoji: '❄️',
            points: [
              'Same substance, different appearance',
              'Usually reversible',
              'Examples: Ice melting, cutting paper, dissolving sugar'
            ]
          },
          {
            subtitle: 'Chemical Changes - Look For',
            emoji: '🔥',
            points: [
              'Color change (iron rusting)',
              'Gas production/bubbles (vinegar + baking soda)',
              'Temperature change (hand warmers)',
              'Light production (fireworks)',
              'Precipitate forms (solid in liquid)',
              'Difficult/impossible to reverse'
            ]
          }
        ]
      },
      {
        id: 'density',
        title: 'Density Calculations',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'The Formula',
            emoji: '📐',
            points: [
              'D = m/V',
              'D = Density (g/cm³ or g/mL)',
              'm = Mass (grams)',
              'V = Volume (cm³ or mL)'
            ]
          },
          {
            subtitle: 'Triangle Trick',
            emoji: '🔺',
            points: [
              'Top: m (mass)',
              'Bottom left: D (density)',
              'Bottom right: V (volume)',
              'Cover what you are solving for!'
            ]
          },
          {
            subtitle: 'Floating Rule',
            emoji: '🛟',
            points: [
              'Object floats if density < liquid density',
              'Object sinks if density > liquid density',
              'Example: Ice (0.92) floats on water (1.0)'
            ]
          }
        ]
      },
      {
        id: 'properties',
        title: 'Physical & Chemical Properties',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Physical Properties',
            emoji: '👁️',
            points: [
              'Qualitative: Color, texture, odor, state, luster, malleability, ductility',
              'Quantitative: Mass, volume, density, melting/boiling point, solubility',
              'Observable WITHOUT changing the substance'
            ]
          },
          {
            subtitle: 'Chemical Properties',
            emoji: '⚗️',
            points: [
              'Combustibility: Ability to burn',
              'Reactivity with acids (metals produce hydrogen gas)',
              'Stability: Reactivity with oxygen (e.g., iron rusting)',
              'How substance reacts with OTHER substances'
            ]
          }
        ]
      },
      {
        id: 'periodic-table',
        title: 'Periodic Table Organization',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Element Families',
            emoji: '👨‍👩‍👧‍👦',
            points: [
              'Alkali Metals (Group 1): Soft, highly reactive, form basic solutions',
              'Alkaline-Earth Metals (Group 2): Form +2 ions, basic oxides',
              'Halogens (Group 17): Reactive non-metals, diatomic, form salts',
              'Noble Gases (Group 18): Full valence shells, almost unreactive'
            ],
            diagram: 'periodic-table'
          },
          {
            subtitle: 'Metals vs Non-metals',
            emoji: '🔧',
            points: [
              'Metals: Shiny, conductive, malleable, lose electrons (Na, Fe, Cu)',
              'Non-metals: Dull, poor conductors, brittle, gain electrons (O, S, Cl)',
              'Metalloids: Between metals/non-metals, semiconductors (Si, B, As)'
            ]
          }
        ]
      },
      {
        id: 'atomic-models',
        title: 'Atomic Models Through History',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Dalton - Solid Sphere',
            emoji: '⚪',
            points: [
              'Billiard ball model',
              'Atoms are indivisible solid spheres',
              'First modern atomic theory'
            ],
            diagram: 'atomic-models'
          },
          {
            subtitle: 'Thomson - Plum Pudding',
            emoji: '🍮',
            points: [
              'Discovered electrons',
              'Positive material with embedded electrons',
              'Like raisins in pudding'
            ]
          },
          {
            subtitle: 'Rutherford - Nuclear Model',
            emoji: '🎯',
            points: [
              'Dense positive nucleus discovered',
              'Electrons orbit around nucleus',
              'Mostly empty space'
            ]
          },
          {
            subtitle: 'Bohr - Planetary Model',
            emoji: '🪐',
            points: [
              'Electrons orbit in specific energy levels',
              'Like planets around the sun',
              'Energy levels = shells'
            ]
          }
        ]
      },
      {
        id: 'subatomic',
        title: 'Subatomic Particles & Bohr Diagrams',
        image: 'https://images.unsplash.com/photo-1635070041409-e5e34c1a6ff9?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'The Three Particles',
            emoji: '⚛️',
            points: [
              'Protons: Positive (+1), mass ≈ 1 amu, in nucleus',
              'Neutrons: Neutral (0), mass ≈ 1 amu, in nucleus',
              'Electrons: Negative (-1), negligible mass, in shells'
            ]
          },
          {
            subtitle: 'Using the Periodic Table',
            emoji: '📊',
            points: [
              'Atomic number = # protons = # electrons (neutral atom)',
              'Mass number ≈ atomic mass (rounded)',
              'Neutrons = Mass number - Atomic number'
            ]
          },
          {
            subtitle: 'Bohr-Rutherford Diagrams',
            emoji: '🎨',
            points: [
              'Nucleus in center (protons + neutrons)',
              '1st shell: max 2 electrons',
              '2nd shell: max 8 electrons',
              '3rd shell: max 8 electrons (for first 20 elements)'
            ],
            diagram: 'bohr'
          },
          {
            subtitle: 'Isotopes',
            emoji: '🔄',
            points: [
              'Same element, different neutron count',
              'Same protons, different mass numbers',
              'Example: Carbon-12 vs Carbon-14'
            ]
          }
        ]
      },
      {
        id: 'valence-ions',
        title: 'Valence Electrons & Ions',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Valence Electrons',
            emoji: '🌟',
            points: [
              'Electrons in outermost shell',
              'Determine chemical behavior',
              'Shown in Lewis dot diagrams'
            ]
          },
          {
            subtitle: 'Lewis Dot Diagrams',
            emoji: '•',
            points: [
              'Element symbol with dots around it',
              'Each dot = one valence electron',
              'Shows how atoms will bond'
            ],
            diagram: 'lewis'
          },
          {
            subtitle: 'Ions - Charged Atoms',
            emoji: '⚡',
            points: [
              'Cations: Positive (lost electrons), protons > electrons',
              'Anions: Negative (gained electrons), electrons > protons',
              'Protons NEVER change (determines element)',
              'Electrons = protons - charge'
            ]
          }
        ]
      }
    ]
  },
  physics: {
    id: 'physics',
    name: 'Physics: Electricity',
    description: 'Explore static electricity, circuits, current, and electrical power',
    icon: Zap,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'static',
        title: 'Static Electricity',
        image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'How It Works',
            emoji: '⚡',
            points: [
              'Caused by transfer of electrons',
              'Like charges repel',
              'Opposite charges attract',
              'Created by friction, conduction, induction'
            ]
          }
        ]
      },
      {
        id: 'current',
        title: 'Current Electricity & Ohms Law',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Key Concepts',
            emoji: '🔋',
            points: [
              'Current: Flow of electrons (measured in Amperes)',
              'Voltage: Electrical pressure (measured in Volts)',
              'Resistance: Opposition to flow (measured in Ohms)',
              'Ohms Law: V = I × R'
            ]
          }
        ]
      },
      {
        id: 'circuits',
        title: 'Electric Circuits',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Series Circuits',
            emoji: '➡️',
            points: [
              'One path for electricity',
              'If one bulb burns out, all go out',
              'Current same everywhere',
              'Voltage divides among components'
            ]
          },
          {
            subtitle: 'Parallel Circuits',
            emoji: '🔀',
            points: [
              'Multiple paths for electricity',
              'If one bulb burns out, others stay on',
              'Voltage same across branches',
              'Current divides among paths'
            ]
          }
        ]
      },
      {
        id: 'power',
        title: 'Electrical Energy & Power',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Power Basics',
            emoji: '💡',
            points: [
              'Power measured in Watts (W)',
              'P = V × I',
              'Energy consumption over time',
              'Higher wattage = more energy used'
            ]
          }
        ]
      }
    ]
  },
  space: {
    id: 'space',
    name: 'Space: Exploration',
    description: 'Discover the solar system, space technology, and the universe',
    icon: Globe,
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200&h=600&fit=crop',
    sections: [
      {
        id: 'solar-system',
        title: 'The Solar System',
        image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Inner Planets (Rocky)',
            emoji: '🪨',
            points: [
              'Mercury - Closest to Sun, extreme temperatures',
              'Venus - Hottest planet, thick atmosphere',
              'Earth - Our home, only known life',
              'Mars - Red planet, has polar ice caps'
            ]
          },
          {
            subtitle: 'Outer Planets (Gas Giants)',
            emoji: '🌪️',
            points: [
              'Jupiter - Largest planet, Great Red Spot',
              'Saturn - Famous rings',
              'Uranus - Tilted on its side',
              'Neptune - Coldest planet, strong winds'
            ]
          }
        ]
      },
      {
        id: 'space-tech',
        title: 'Space Technology',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Key Milestones',
            emoji: '🚀',
            points: [
              'Sputnik 1 - First artificial satellite (1957)',
              'Apollo 11 - First moon landing (1969)',
              'Hubble Telescope - Deep space observations',
              'ISS - International Space Station'
            ]
          }
        ]
      },
      {
        id: 'universe',
        title: 'The Universe',
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop',
        notes: [
          {
            subtitle: 'Big Stuff',
            emoji: '🌌',
            points: [
              'Our galaxy: Milky Way',
              'Contains billions of stars',
              'Big Bang Theory - Universe origin',
              'Universe still expanding'
            ]
          }
        ]
      }
    ]
  }
};

// Achievement definitions
const achievements = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first section',
    icon: Star,
    color: 'from-blue-400 to-blue-600',
    requirement: (stats) => stats.sectionsCompleted >= 1
  },
  {
    id: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Complete 5 sections',
    icon: BookOpen,
    color: 'from-green-400 to-green-600',
    requirement: (stats) => stats.sectionsCompleted >= 5
  },
  {
    id: 'scholar',
    name: 'Scholar',
    description: 'Complete 10 sections',
    icon: Brain,
    color: 'from-purple-400 to-purple-600',
    requirement: (stats) => stats.sectionsCompleted >= 10
  },
  {
    id: 'master',
    name: 'Master Student',
    description: 'Complete all sections',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600',
    requirement: (stats) => stats.sectionsCompleted >= stats.totalSections
  },
  {
    id: 'quiz-ace',
    name: 'Quiz Ace',
    description: 'Get 5 quiz questions correct',
    icon: Target,
    color: 'from-pink-400 to-pink-600',
    requirement: (stats) => stats.quizCorrect >= 5
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Complete a quiz with 100% accuracy',
    icon: Sparkles,
    color: 'from-amber-400 to-amber-600',
    requirement: (stats) => stats.perfectQuizzes >= 1
  },
  {
    id: 'dedicated',
    name: 'Dedicated Learner',
    description: 'Complete 3 quizzes',
    icon: Flame,
    color: 'from-orange-400 to-orange-600',
    requirement: (stats) => stats.quizzesCompleted >= 3
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'View all subjects',
    icon: Globe,
    color: 'from-teal-400 to-teal-600',
    requirement: (stats) => stats.subjectsViewed >= stats.totalSubjects
  },
  {
    id: 'worksheet-warrior',
    name: 'Worksheet Warrior',
    description: 'Reveal 20 worksheet answers',
    icon: ClipboardList,
    color: 'from-indigo-400 to-indigo-600',
    requirement: (stats) => stats.worksheetAnswersRevealed >= 20
  },
  {
    id: 'search-expert',
    name: 'Search Expert',
    description: 'Use search 10 times',
    icon: Search,
    color: 'from-cyan-400 to-cyan-600',
    requirement: (stats) => stats.searchesPerformed >= 10
  }
];

export default function ScienceStudyLibrary() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [readSections, setReadSections] = useState(new Set());
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [revealedAnswers, setRevealedAnswers] = useState(new Set());
  
  // Flashcard state
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardStats, setFlashcardStats] = useState({ known: 0, learning: 0 });
  
  // Achievement tracking
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [stats, setStats] = useState({
    sectionsCompleted: 0,
    totalSections: 0,
    quizCorrect: 0,
    quizzesCompleted: 0,
    perfectQuizzes: 0,
    subjectsViewed: new Set(),
    totalSubjects: Object.keys(studyLibrary).length,
    worksheetAnswersRevealed: 0,
    searchesPerformed: 0
  });

  // Calculate total sections on mount
  useEffect(() => {
    const total = Object.values(studyLibrary).reduce((sum, subject) => sum + subject.sections.length, 0);
    setStats(prev => ({ ...prev, totalSections: total }));
  }, []);

  // Initialize totalSections immediately to prevent achievement glitch
  const [totalSectionsCalculated, setTotalSectionsCalculated] = useState(false);
  
  useEffect(() => {
    if (!totalSectionsCalculated) {
      const total = Object.values(studyLibrary).reduce((sum, subject) => sum + subject.sections.length, 0);
      setStats(prev => ({ ...prev, totalSections: total }));
      setTotalSectionsCalculated(true);
    }
  }, [totalSectionsCalculated]);

  // Check for new achievements whenever stats change
  useEffect(() => {
    achievements.forEach(achievement => {
      if (!unlockedAchievements.has(achievement.id) && achievement.requirement(stats)) {
        setUnlockedAchievements(prev => new Set([...prev, achievement.id]));
        setNewAchievement(achievement);
        setTimeout(() => setNewAchievement(null), 5000);
      }
    });
  }, [stats, unlockedAchievements]);

  const toggleRead = (sectionId) => {
    const newRead = new Set(readSections);
    if (newRead.has(sectionId)) {
      newRead.delete(sectionId);
      setStats(prev => ({ ...prev, sectionsCompleted: prev.sectionsCompleted - 1 }));
    } else {
      newRead.add(sectionId);
      setStats(prev => ({ ...prev, sectionsCompleted: prev.sectionsCompleted + 1 }));
    }
    setReadSections(newRead);
  };

  const toggleAnswer = (noteIndex, pointIndex) => {
    const key = `${noteIndex}-${pointIndex}`;
    const newRevealed = new Set(revealedAnswers);
    if (newRevealed.has(key)) {
      newRevealed.delete(key);
      setStats(prev => ({ ...prev, worksheetAnswersRevealed: Math.max(0, prev.worksheetAnswersRevealed - 1) }));
    } else {
      newRevealed.add(key);
      setStats(prev => ({ ...prev, worksheetAnswersRevealed: prev.worksheetAnswersRevealed + 1 }));
    }
    setRevealedAnswers(newRevealed);
  };

  const startQuiz = (section) => {
    setCurrentQuiz(section);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore({ correct: 0, total: 0 });
    setAnsweredQuestions([]);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleCheckAnswer = () => {
    const isCorrect = selectedAnswer === currentQuiz.quiz[currentQuestion].correct;
    setShowExplanation(true);
    setAnsweredQuestions([...answeredQuestions, { 
      questionIndex: currentQuestion, 
      selectedAnswer, 
      isCorrect 
    }]);
    if (isCorrect) {
      setQuizScore({ ...quizScore, correct: quizScore.correct + 1, total: quizScore.total + 1 });
      setStats(prev => ({ ...prev, quizCorrect: prev.quizCorrect + 1 }));
    } else {
      setQuizScore({ ...quizScore, total: quizScore.total + 1 });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuiz.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      const isPerfect = quizScore.correct + 1 === currentQuiz.quiz.length;
      setStats(prev => ({ 
        ...prev, 
        quizzesCompleted: prev.quizzesCompleted + 1,
        perfectQuizzes: isPerfect ? prev.perfectQuizzes + 1 : prev.perfectQuizzes
      }));
      setCurrentQuiz(null);
      setSelectedSection(null);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      setStats(prev => ({ ...prev, searchesPerformed: prev.searchesPerformed + 1 }));
      
      const results = [];
      const searchLower = value.toLowerCase();
      
      Object.values(studyLibrary).forEach(subject => {
        subject.sections.forEach(section => {
          // Check section title
          if (section.title.toLowerCase().includes(searchLower)) {
            results.push({
              type: 'section',
              subject: subject,
              section: section,
              title: section.title,
              match: 'Section Title',
              relevance: section.title.toLowerCase().indexOf(searchLower) === 0 ? 3 : 2
            });
          }
          
          // Check note subtitles and content
          section.notes.forEach(note => {
            if (note.subtitle.toLowerCase().includes(searchLower)) {
              results.push({
                type: 'note',
                subject: subject,
                section: section,
                title: `${section.title} - ${note.subtitle}`,
                match: 'Topic',
                relevance: note.subtitle.toLowerCase().indexOf(searchLower) === 0 ? 3 : 2
              });
            }
            
            // Check points for matches
            note.points.forEach(point => {
              if (point.toLowerCase().includes(searchLower)) {
                results.push({
                  type: 'content',
                  subject: subject,
                  section: section,
                  title: `${section.title} - ${note.subtitle}`,
                  preview: point.substring(0, 80) + (point.length > 80 ? '...' : ''),
                  match: 'Content',
                  relevance: 1
                });
              }
            });
          });
        });
      });
      
      // Sort by relevance and remove duplicates
      const uniqueResults = [];
      const seen = new Set();
      
      results
        .sort((a, b) => b.relevance - a.relevance)
        .forEach(result => {
          const key = `${result.section.id}-${result.type}`;
          if (!seen.has(key)) {
            seen.add(key);
            uniqueResults.push(result);
          }
        });
      
      setSearchResults(uniqueResults.slice(0, 8)); // Limit to 8 results
      setShowSearchDropdown(uniqueResults.length > 0);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const handleSearchResultClick = (result) => {
    setSelectedSubject(result.subject);
    setSelectedSection(result.section);
    setSearchTerm('');
    setShowSearchDropdown(false);
    setStats(prev => ({ 
      ...prev, 
      subjectsViewed: new Set([...prev.subjectsViewed, result.subject.id])
    }));
  };

  const handleFlashcardKnown = () => {
    setFlashcardStats(prev => ({ ...prev, known: prev.known + 1 }));
    handleNextFlashcard();
  };

  const handleFlashcardLearning = () => {
    setFlashcardStats(prev => ({ ...prev, learning: prev.learning + 1 }));
    handleNextFlashcard();
  };

  const handleNextFlashcard = () => {
    if (currentFlashcard < selectedSection.flashcards.length - 1) {
      setCurrentFlashcard(currentFlashcard + 1);
      setIsFlipped(false);
    } else {
      // Flashcards completed
      setCurrentFlashcard(0);
      setIsFlipped(false);
      setSelectedSection(null);
    }
  };

  const handlePreviousFlashcard = () => {
    if (currentFlashcard > 0) {
      setCurrentFlashcard(currentFlashcard - 1);
      setIsFlipped(false);
    }
  };

  // Achievement notification popup
  const AchievementPopup = ({ achievement }) => {
    if (!achievement) return null;
    
    const Icon = achievement.icon;
    
    return (
      <div className="fixed top-4 right-4 z-50 animate-bounce">
        <div className={`bg-gradient-to-r ${achievement.color} rounded-2xl shadow-2xl p-6 text-white max-w-sm border-4 border-white`}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4" />
                <p className="text-xs font-bold uppercase tracking-wider">Achievement Unlocked!</p>
              </div>
              <h3 className="text-xl font-bold">{achievement.name}</h3>
              <p className="text-white/90 text-sm">{achievement.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Achievements modal
  const AchievementsModal = () => {
    if (!showAchievements) return null;
    
    const unlockedCount = unlockedAchievements.size;
    const totalCount = achievements.length;
    const progress = (unlockedCount / totalCount) * 100;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Achievements</h2>
              </div>
              <button
                onClick={() => setShowAchievements(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/90">Progress: {unlockedCount} of {totalCount}</p>
                <p className="font-bold">{Math.round(progress)}%</p>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map(achievement => {
                const isUnlocked = unlockedAchievements.has(achievement.id);
                const Icon = achievement.icon;
                
                return (
                  <div
                    key={achievement.id}
                    className={`rounded-xl p-6 border-2 transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-md'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isUnlocked
                          ? `bg-gradient-to-r ${achievement.color}`
                          : 'bg-gray-300'
                      }`}>
                        <Icon className={`w-8 h-8 ${isUnlocked ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-lg font-bold ${isUnlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                            {achievement.name}
                          </h3>
                          {isUnlocked && <CheckCircle className="w-5 h-5 text-green-500" />}
                        </div>
                        <p className={`text-sm ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                          {achievement.description}
                        </p>
                        {!isUnlocked && (
                          <p className="text-xs text-gray-400 mt-2">🔒 Locked</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Flashcard interface
  if (selectedSection && selectedSection.flashcards && selectedSection.flashcards.length > 0) {
    const flashcard = selectedSection.flashcards[currentFlashcard];
    const progress = ((currentFlashcard + 1) / selectedSection.flashcards.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <button
            onClick={() => {
              setSelectedSection(null);
              setCurrentFlashcard(0);
              setIsFlipped(false);
              setFlashcardStats({ known: 0, learning: 0 });
            }}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Exit Flashcards
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedSection.title}</h2>
                <p className="text-gray-600">Card {currentFlashcard + 1} of {selectedSection.flashcards.length}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Progress</p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs text-green-600">Known: {flashcardStats.known}</p>
                    <p className="text-xs text-yellow-600">Learning: {flashcardStats.learning}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className={`bg-gradient-to-r ${selectedSubject.gradient} h-2 rounded-full transition-all`}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Flashcard */}
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative w-full h-96 cursor-pointer perspective-1000 mb-6"
              style={{ perspective: '1000px' }}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute w-full h-full bg-gradient-to-br ${selectedSubject.gradient} rounded-2xl shadow-2xl flex items-center justify-center p-8 backface-hidden`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-4 font-semibold uppercase tracking-wide">Question</p>
                    <h3 className="text-3xl font-bold text-white leading-relaxed">{flashcard.front}</h3>
                    <p className="text-white/70 mt-6 text-sm">Click to reveal answer</p>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center p-8 backface-hidden border-4 border-gray-200"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Answer</p>
                    <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed whitespace-pre-line">{flashcard.back}</h3>
                    <p className="text-gray-400 mt-6 text-sm">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation and response buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePreviousFlashcard}
                disabled={currentFlashcard === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-300 transition-all"
              >
                ← Previous
              </button>

              {isFlipped && (
                <div className="flex gap-3">
                  <button
                    onClick={handleFlashcardLearning}
                    className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition-all"
                  >
                    Still Learning
                  </button>
                  <button
                    onClick={handleFlashcardKnown}
                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all"
                  >
                    I Know This!
                  </button>
                </div>
              )}

              <button
                onClick={handleNextFlashcard}
                disabled={currentFlashcard === selectedSection.flashcards.length - 1}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-300 transition-all"
              >
                Next →
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${selectedSubject.gradient} rounded-2xl p-6 text-white`}>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl font-bold">Study Tip</h3>
            </div>
            <p className="text-white/90">
              Flashcards work best with spaced repetition. Review cards you marked "Still Learning" more frequently!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quiz interface
  if (currentQuiz) {
    const question = currentQuiz.quiz[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;
    const progress = ((currentQuestion + 1) / currentQuiz.quiz.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <button
            onClick={() => {
              setCurrentQuiz(null);
              setSelectedSection(null);
            }}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Exit Quiz
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{currentQuiz.title}</h2>
                <p className="text-gray-600">Question {currentQuestion + 1} of {currentQuiz.quiz.length}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Score</p>
                <p className="text-2xl font-bold text-gray-800">{quizScore.correct}/{quizScore.total}</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className={`bg-gradient-to-r ${selectedSubject.gradient} h-2 rounded-full transition-all`}
                style={{ width: `${progress}%` }}
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>

            <div className="space-y-3 mb-6">
              {question.options.map((option, idx) => {
                let buttonStyle = 'border-gray-200 bg-white hover:border-gray-400';
                
                if (showExplanation) {
                  if (idx === question.correct) {
                    buttonStyle = 'border-green-500 bg-green-50';
                  } else if (idx === selectedAnswer) {
                    buttonStyle = 'border-red-500 bg-red-50';
                  }
                } else if (selectedAnswer === idx) {
                  buttonStyle = 'border-blue-500 bg-blue-50';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(idx)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${buttonStyle} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        showExplanation && idx === question.correct
                          ? 'border-green-500 bg-green-500'
                          : showExplanation && idx === selectedAnswer
                          ? 'border-red-500 bg-red-500'
                          : selectedAnswer === idx
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {((showExplanation && idx === question.correct) || (!showExplanation && selectedAnswer === idx)) && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                        {showExplanation && idx === selectedAnswer && idx !== question.correct && (
                          <X className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-blue-50 border-2 border-blue-200'}`}>
                <div className="flex items-start gap-3">
                  <Lightbulb className={`w-6 h-6 flex-shrink-0 ${isCorrect ? 'text-green-600' : 'text-blue-600'}`} />
                  <div>
                    <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                      {isCorrect ? '✓ Correct!' : 'Explanation:'}
                    </p>
                    <p className="text-gray-700">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {!showExplanation ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className={`w-full py-3 bg-gradient-to-r ${selectedSubject.gradient} text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all`}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className={`w-full py-3 bg-gradient-to-r ${selectedSubject.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
              >
                {currentQuestion < currentQuiz.quiz.length - 1 ? 'Next Question →' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Section view
  if (selectedSection && selectedSubject) {
    const section = selectedSection;
    const isRead = readSections.has(section.id);
    const hasQuiz = section.quiz && section.quiz.length > 0;
    const isWorksheet = selectedSubject.id === 'worksheets';

    // If this is a quiz section, show quiz interface
    if (hasQuiz && !currentQuiz) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-5xl mx-auto p-4 md:p-6">
            <button
              onClick={() => setSelectedSection(null)}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to {selectedSubject.name}
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-xl">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedSubject.gradient} opacity-60`} />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-4xl font-bold text-white mb-2">{section.title}</h1>
                <p className="text-white/90 text-lg">{section.quiz.length} practice questions</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Practice?</h2>
                <p className="text-gray-600 mb-8">
                  Test your knowledge with {section.quiz.length} practice questions. 
                  Each question includes detailed explanations to help you learn!
                </p>
                <button
                  onClick={() => startQuiz(section)}
                  className={`px-8 py-4 bg-gradient-to-r ${selectedSubject.gradient} text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5`}
                >
                  Start Practice Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto p-4 md:p-6">
          <button
            onClick={() => setSelectedSection(null)}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {selectedSubject.name}
          </button>

          <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-xl">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${selectedSubject.gradient} opacity-60`} />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-bold text-white mb-2">{section.title}</h1>
            </div>
          </div>

          <div className="mb-6 flex justify-end">
            <button
              onClick={() => toggleRead(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isRead
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              {isRead ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              {isRead ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>

          <div className="space-y-6">
            {section.notes.map((note, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${selectedSubject.gradient} p-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{note.emoji}</span>
                    <h2 className="text-2xl font-bold text-white">{note.subtitle}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {note.points.map((point, pointIdx) => (
                      <div key={pointIdx}>
                        <div className="flex items-start gap-3 group">
                          <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${selectedSubject.gradient} flex-shrink-0`} />
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                            {point}
                          </p>
                        </div>
                        
                        {/* Show answer button for worksheets */}
                        {isWorksheet && note.answers && note.answers[pointIdx] && (
                          <div className="ml-5 mt-2">
                            <button
                              onClick={() => toggleAnswer(idx, pointIdx)}
                              className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                            >
                              {revealedAnswers.has(`${idx}-${pointIdx}`) ? '▼ Hide Answer' : '▶ Click to Reveal Answer'}
                            </button>
                            
                            {revealedAnswers.has(`${idx}-${pointIdx}`) && (
                              <div className="mt-2 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
                                <div className="space-y-1">
                                  {note.answers[pointIdx].split(' • ').map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <span className="text-teal-600 font-bold">•</span>
                                      <span className="text-gray-700">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {note.diagram && (
                    <div className="mt-6">
                      {note.diagram === 'lewis' && <LewisDotDiagram />}
                      {note.diagram === 'bohr' && <BohrDiagram />}
                      {note.diagram === 'energy-pyramid' && <EnergyPyramid />}
                      {note.diagram === 'carbon-cycle' && <CarbonCycle />}
                      {note.diagram === 'atomic-models' && <AtomicModels />}
                      {note.diagram === 'periodic-table' && <PeriodicTableDiagram />}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 bg-gradient-to-r ${selectedSubject.gradient} rounded-2xl p-6 text-white`}>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl font-bold">Study Tip</h3>
            </div>
            <p className="text-white/90">
              Try explaining these concepts to someone else or writing them out from memory. 
              This helps solidify your understanding!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Subject view
  if (selectedSubject) {
    const subject = selectedSubject;
    const completedCount = subject.sections.filter(s => readSections.has(s.id)).length;
    const progress = (completedCount / subject.sections.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto p-4 md:p-6">
          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </button>

          <div className="relative h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${subject.gradient} opacity-70`} />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <subject.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{subject.name}</h1>
                  <p className="text-white/90 text-lg">
                    {subject.sections.length} sections • {completedCount} completed
                  </p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-full h-3 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {subject.sections.map((section) => {
              const isRead = readSections.has(section.id);
              
              return (
                <div
                  key={section.id}
                  onClick={() => setSelectedSection(section)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${subject.gradient} opacity-60`} />
                    {isRead && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{section.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {section.notes && section.notes.length > 0 ? `${section.notes.length} topics` : 
                       section.quiz && section.quiz.length > 0 ? `${section.quiz.length} questions` : 
                       'View content'}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Introduction modal
  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Welcome to Your Study Library!</h1>
                <p className="text-slate-300">Grade 9 Science • Appleby College</p>
                <p className="text-slate-400 text-sm mt-1">Created by Dean Concepcion</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Why This Was Made
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This interactive study library was created by <span className="font-semibold">Dean Concepcion</span> specifically to help Grade 9 students at Appleby College prepare for their Science tests more effectively. Instead of scattered notes across different pages, everything is organized in one place with clear sections, visual aids, and practice questions tailored to the Appleby curriculum.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're reviewing for Biology's ecosystem concepts, Chemistry's atomic structure, or tackling practice questions, this tool makes studying more organized and less overwhelming—designed with Appleby Grade 9 students in mind.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                How to Use This Library
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Browse Subjects</h3>
                    <p className="text-gray-700 text-sm">Click on any subject card (Biology, Chemistry, etc.) to view all the topics inside.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Study Sections</h3>
                    <p className="text-gray-700 text-sm">Each section has visual notes with key points. Mark sections as complete to track your progress!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Practice & Review</h3>
                    <p className="text-gray-700 text-sm">Try the Test Review Guide and Practice Questions sections to test your knowledge with instant feedback.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Search Anything</h3>
                    <p className="text-gray-700 text-sm">Use the search bar to quickly find specific topics, concepts, or keywords across all subjects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Complete Worksheets</h3>
                    <p className="text-gray-700 text-sm">Work through practice worksheets with questions designed to reinforce your understanding of each topic.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-6 text-white mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Pro Tip</h3>
                  <p className="text-white/90 text-sm">
                    Start with the Test Review Guide to see what you need to know, then dive into specific topics. Use the practice questions to test yourself before the actual test!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIntro(false)}
              className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Let's Get Started! 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main library view
  const subjects = Object.values(studyLibrary);

  // Filter subjects and sections based on search
  const filteredSubjects = subjects.filter(subject => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Search in subject name and description
    if (subject.name.toLowerCase().includes(searchLower)) return true;
    
    // Search in section titles
    const hasMatchingSection = subject.sections.some(section => 
      section.title.toLowerCase().includes(searchLower)
    );
    if (hasMatchingSection) return true;
    
    // Search in section notes content
    const hasMatchingContent = subject.sections.some(section =>
      section.notes.some(note =>
        note.subtitle.toLowerCase().includes(searchLower) ||
        note.points.some(point => point.toLowerCase().includes(searchLower))
      )
    );
    if (hasMatchingContent) return true;
    
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <AchievementPopup achievement={newAchievement} />
      <AchievementsModal />
      
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-1">Science Study Library</h1>
                <p className="text-slate-300">Grade 9 • Appleby College</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Visual study notes organized by subject with progress tracking
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-2xl font-bold">{readSections.size}</p>
                  <p className="text-xs text-slate-400">Sections Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search topics, concepts, keywords..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => searchTerm && setShowSearchDropdown(true)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-800 bg-white shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setShowSearchDropdown(false);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          
          {/* Search Dropdown */}
          {showSearchDropdown && searchResults.length > 0 && (
            <div className="absolute w-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto">
              <div className="p-3 bg-gray-50 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-600">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              {searchResults.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSearchResultClick(result)}
                  className="w-full p-4 text-left hover:bg-blue-50 border-b border-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${result.subject.gradient} flex items-center justify-center flex-shrink-0`}>
                      <result.subject.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase">
                          {result.match}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {result.subject.name}
                        </span>
                      </div>
                      
                      <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                        {result.title}
                      </p>
                      
                      {result.preview && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.preview}
                        </p>
                      )}
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {searchTerm && (
          <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="text-blue-800">
              <span className="font-semibold">Found {filteredSubjects.length} subject(s)</span> matching "{searchTerm}"
            </p>
          </div>
        )}

        {filteredSubjects.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
            <p className="text-gray-500">Try searching for different keywords like "biodiversity", "density", or "atoms"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSubjects.map((subject) => {
              const completedCount = subject.sections.filter(s => readSections.has(s.id)).length;
              const progress = (completedCount / subject.sections.length) * 100;

              return (
                <div
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
                  }}
                >
                  <div 
                    className={`relative h-56 bg-gradient-to-br ${subject.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                    style={{
                      boxShadow: 'inset 0 -2px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                    
                    <div className="flex justify-end relative z-10">
                      <div 
                        className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all"
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                        }}
                      >
                        <subject.icon className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{subject.name}</h2>
                      <p className="text-white/95 text-sm drop-shadow-md">{subject.description}</p>
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {completedCount} of {subject.sections.length} completed
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`bg-gradient-to-r ${subject.gradient} h-full transition-all duration-500 shadow-lg`}
                        style={{ 
                          width: `${progress}%`,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}