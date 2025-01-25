import React, { useState, useMemo } from 'react';
import { SectionSelector } from './components/SectionSelector';
import { DesignationSelector } from './components/DesignationSelector';
import { ResultsDisplay } from './components/ResultsDisplay';
import { SavedResults } from './components/SavedResults';
import { steelSectionsData } from './data';
import { SavedResult, SteelSection } from './types';
import { BookOpen } from 'lucide-react';

function App() {
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [savedResults, setSavedResults] = useState<SavedResult[]>([]);

  const sections = useMemo(() => 
    Array.from(new Set(steelSectionsData.map(item => item.Section))),
    []
  );

  const designations = useMemo(() => 
    steelSectionsData
      .filter(item => item.Section === selectedSection)
      .map(item => item.Designation),
    [selectedSection]
  );

  const selectedData = useMemo(() => 
    steelSectionsData.find(
      item => 
        item.Section === selectedSection && 
        item.Designation === selectedDesignation
    ) || null,
    [selectedSection, selectedDesignation]
  );

  const handleSave = () => {
    if (selectedData) {
      setSavedResults(prev => [
        ...prev,
        {
          ...selectedData,
          timestamp: new Date().toLocaleString()
        }
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Steel Open Section Capacities
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Select a section type and designation to view properties
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <SectionSelector
            sections={sections}
            selectedSection={selectedSection}
            onSectionChange={setSelectedSection}
          />
          
          <DesignationSelector
            designations={designations}
            selectedDesignation={selectedDesignation}
            onDesignationChange={setSelectedDesignation}
          />
        </div>

        {selectedData && (
          <ResultsDisplay
            section={selectedData}
            onSave={handleSave}
          />
        )}

        <SavedResults results={savedResults} />
      </div>
    </div>
  );
}

export default App;