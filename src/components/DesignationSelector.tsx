import React from 'react';
import { SteelSection } from '../types';

interface Props {
  designations: string[];
  selectedDesignation: string;
  onDesignationChange: (designation: string) => void;
}

export const DesignationSelector: React.FC<Props> = ({
  designations,
  selectedDesignation,
  onDesignationChange,
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor="designation" 
        className="block text-sm font-medium text-gray-700 mb-2"
        title="Select a specific designation for the chosen section"
      >
        Designation
      </label>
      <select
        id="designation"
        value={selectedDesignation}
        onChange={(e) => onDesignationChange(e.target.value)}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        disabled={!designations.length}
      >
        <option value="">Select a designation...</option>
        {designations.map((designation) => (
          <option key={designation} value={designation}>
            {designation}
          </option>
        ))}
      </select>
    </div>
  );
};