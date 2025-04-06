import React, { useState, useEffect } from 'react';

const PlantNutrition = () => {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    // Simulating fetching plant nutrition data from an API or database
    const fetchPlantData = async () => {
      const data = [
        { plant: 'Tomato', nutrition: 'High in Vitamin C and Potassium' },
        { plant: 'Spinach', nutrition: 'Rich in Iron and Vitamin A' },
        { plant: 'Carrot', nutrition: 'Good source of Beta Carotene and Vitamin K' },
        { plant: 'Lettuce', nutrition: 'Contains Vitamin A and Folate' },
        // Add more plants and their nutrition info here
      ];
      setPlantData(data);
    };

    fetchPlantData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-green-600 mb-6">Plant Nutrition</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 mb-4">
            Discover the essential nutrients that different plants provide.
          </p>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Plant</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Nutrition</th>
              </tr>
            </thead>
            <tbody>
              {plantData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-700">{item.plant}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.nutrition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlantNutrition;
