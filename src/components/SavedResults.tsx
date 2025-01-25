import React from 'react';
import { SavedResult } from '../types';

interface Props {
  results: SavedResult[];
}

export const SavedResults: React.FC<Props> = ({ results }) => {
  if (!results.length) return null;

  const formatValue = (value: number | string) => {
    if (typeof value === 'number') {
      return Number(value.toPrecision(3)).toString();
    }
    return value;
  };

  const renderHeader = (key: string) => {
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
      case 'Section':
        return 'Section';
      case 'Designation':
        return 'Designation';
      case 'timestamp':
        return 'Time';
      default:
        return key;
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Saved Results</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(results[0]).map((key) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {renderHeader(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((result, idx) => (
              <tr key={idx}>
                {Object.values(result).map((value, valueIdx) => (
                  <td
                    key={valueIdx}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {formatValue(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};