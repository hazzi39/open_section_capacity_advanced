import React from 'react';
import { SteelSection } from '../types';

interface Props {
  sections: string[];
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

export const SectionSelector: React.FC<Props> = ({
  sections,
  selectedSection,
  onSectionChange,
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor="section" 
        className="block text-sm font-medium text-gray-700 mb-2"
        title="Select a steel section type"
      >
        Section Type
      </label>
      <select
        id="section"
        value={selectedSection}
        onChange={(e) => onSectionChange(e.target.value)}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Select a section...</option>
        {sections.map((section) => (
          <option key={section} value={section}>
            {section}
          </option>
        ))}
      </select>
    </div>
  );
};