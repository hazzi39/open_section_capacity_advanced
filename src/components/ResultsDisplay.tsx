import React from 'react';
import { SteelSection } from '../types';
import { Save } from 'lucide-react';

interface Props {
  section: SteelSection | null;
  onSave: () => void;
}

export const ResultsDisplay: React.FC<Props> = ({ section, onSave }) => {
  if (!section) return null;

  const formatValue = (value: number | undefined) => {
    if (value === undefined) return null;
    return Number(value.toPrecision(3)).toString();
  };

  const renderPropertyLabel = (key: string) => {
    switch (key) {
      case 'Phi_Mxx_kNm':
        return 'φMₓₓ (kN⋅m)';
      case 'Phi_Mxy_kNm':
        return 'φMₓᵧ (kN⋅m)';
      case 'Phi_Vv_kN':
        return 'φVᵥ (kN)';
      case 'Phi_Msx_kNm':
        return 'φMₛₓ (kN⋅m)';
      case 'Phi_Msy_kNm':
        return 'φMₛᵧ (kN⋅m)';
      case 'Phi_Msxf_kNm':
        return 'φMₛₓf (kN⋅m)';
      case 'Phi_Msxs_kNm':
        return 'φMₛₓₛ (kN⋅m)';
      case 'Phi_Vy_kN':
        return 'φVᵧ (kN)';
      case 'Phi_Msyf_kNm':
        return 'φMₛᵧf (kN⋅m)';
      case 'Phi_Msys_kNm':
        return 'φMₛᵧₛ (kN⋅m)';
      case 'Phi_MsyR_kNm':
        return 'φMₛᵧᵣ (kN⋅m)';
      case 'Phi_MsyL_kNm':
        return 'φMₛᵧₗ (kN⋅m)';
      default:
        return key;
    }
  };

  const renderValue = (key: keyof SteelSection, value: number | undefined) => {
    if (value === undefined || key === 'Section' || key === 'Designation') return null;
    
    return (
      <div className="mb-4" key={key}>
        <label className="block text-sm font-medium text-gray-700">
          {renderPropertyLabel(key)}
        </label>
        <div className="mt-1 text-lg font-semibold text-indigo-600">
          {formatValue(value)}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(section).map(([key, value]) => {
          if (key === 'Section' || key === 'Designation') return null;
          if (typeof value === 'number') {
            return renderValue(key as keyof SteelSection, value);
          }
          return null;
        })}
      </div>
      <button
        onClick={onSave}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Save className="w-4 h-4 mr-2" />
        Save Result
      </button>
    </div>
  );
};