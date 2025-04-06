// import React, { useState } from 'react';

// const ManurePage = () => {
//     const [selectedCrop, setSelectedCrop] = useState('');
//     const [fertilizers, setFertilizers] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const crops = [
//         "Corn", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato", "Lettuce"
//     ];

//     const fetchFertilizers = async () => {
//         if (!selectedCrop) {
//             alert("Please select a crop.");
//             return;
//         }

//         setLoading(true);
//         setError('');

//         const queryPayload = {
//             query: selectedCrop,  // Assuming the API expects 'query' here
//         };

//         try {
//             const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(queryPayload),
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
//             }

//             const data = await res.json();
//             console.log("API Response Data:", data);  // Log the entire response to inspect its structure

//             // Check if the result is available and set it as the response
//             if (data.result) {
//                 setFertilizers(data.result);  // Display the result string (e.g., recommendations)
//             } else {
//                 setError("No recommendations found for this crop.");
//             }
//         } catch (err) {
//             console.error("Error fetching fertilizers:", err);
//             setError(`Error fetching fertilizers: ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
//             <p className="mt-4 text-lg text-gray-700">
//                 Select a crop from the dropdown to get recommendations.
//             </p>

//             <div className="mt-6">
//                 <label htmlFor="crop" className="block text-lg font-medium text-gray-700">
//                     Select Crop:
//                 </label>
//                 <select
//                     id="crop"
//                     className="mt-2 p-2 border border-gray-300 rounded-md"
//                     value={selectedCrop}
//                     onChange={(e) => setSelectedCrop(e.target.value)}
//                 >
//                     <option value="">--Select a Crop--</option>
//                     {crops.map((crop) => (
//                         <option key={crop} value={crop}>
//                             {crop}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <button
//                 onClick={fetchFertilizers}
//                 className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : "Get Recommendations"}
//             </button>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {fertilizers && (
//                 <div className="mt-6">
//                     <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
//                     <p className="mt-4 text-lg text-gray-700">{fertilizers}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManurePage;



// import React, { useState } from 'react';

// const ManurePage = () => {
//     const [selectedCrop, setSelectedCrop] = useState('');
//     const [fertilizers, setFertilizers] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const crops = [
//         "Corn", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato", "Lettuce"
//     ];

//     const fetchFertilizers = async () => {
//         if (!selectedCrop) {
//             alert("Please select a crop.");
//             return;
//         }

//         setLoading(true);
//         setError('');

//         // Custom prompt to be included in the search query
//         const customPrompt = `You are an agricultural expert. You need to tell the following details about the crop given to you -

// 1) Crop intro - Add a small very basic intro about the crop.
// 2) Nutritional Requirements - Add nutrition related information which needs to be fed to this crop for good health and take care.
// 3) Manure and Fertilizers - Give names of some manures, fertilizers, pesticides and insectides which should be used on this crop
// 4) Possible Risks - Give a list of some possible risks which are possible to happen with this crop
// 5) Safety Precautions -  List some safety precautions which needs to be taken care of which growing this crop. ${selectedCrop}.`;

//         // The payload to be sent to the API includes the custom prompt
//         const queryPayload = {
//             query: customPrompt,  // Use the custom prompt here
//         };

//         try {
//             const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(queryPayload),
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
//             }

//             const data = await res.json();
//             console.log("API Response Data:", data);  // Log the entire response to inspect its structure

//             // Check if the result is available and set it as the response
//             if (data.result) {
//                 setFertilizers(data.result);  // Display the result string (e.g., recommendations)
//             } else {
//                 setError("No recommendations found for this crop.");
//             }
//         } catch (err) {
//             console.error("Error fetching fertilizers:", err);
//             setError(`Error fetching fertilizers: ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
//             <p className="mt-4 text-lg text-gray-700">
//                 Select a crop from the dropdown to get recommendations.
//             </p>

//             <div className="mt-6">
//                 <label htmlFor="crop" className="block text-lg font-medium text-gray-700">
//                     Select Crop:
//                 </label>
//                 <select
//                     id="crop"
//                     className="mt-2 p-2 border border-gray-300 rounded-md"
//                     value={selectedCrop}
//                     onChange={(e) => setSelectedCrop(e.target.value)}
//                 >
//                     <option value="">--Select a Crop--</option>
//                     {crops.map((crop) => (
//                         <option key={crop} value={crop}>
//                             {crop}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <button
//                 onClick={fetchFertilizers}
//                 className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : "Get Recommendations"}
//             </button>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {fertilizers && (
//                 <div className="mt-6">
//                     <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
//                     <p className="mt-4 text-lg text-gray-700">{fertilizers}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManurePage;/

import React, { useState } from 'react';

const ManurePage = () => {
    const [selectedCrop, setSelectedCrop] = useState('');
    const [fertilizers, setFertilizers] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const crops = [
        "Maize", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato","Cotton"," Onion","Sugarcane"
    ];

    const fetchFertilizers = async () => {
        if (!selectedCrop) {
            alert("Please select a crop.");
            return;
        }

        setLoading(true);
        setError('');

        // Custom prompt to be included in the search query
        const customPrompt = `
            You are an agricultural expert. You need to tell the following details about the crop given to you:
            
            1) Crop intro - Add a small, basic intro about the crop.
            2) Nutritional Requirements - Add nutrition-related information which needs to be fed to this crop for good health and care.
            3) Manure and Fertilizers - Give names of some manures, fertilizers, pesticides, and insecticides which should be used on this crop.
            4) Possible Risks - List some possible risks that could happen with this crop.
            5) Safety Precautions - List some safety precautions to take while growing this crop.
            ${selectedCrop}
        `;

        // The payload to be sent to the API includes the custom prompt
        const queryPayload = {
            query: customPrompt,  // Use the custom prompt here
        };

        try {
            const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(queryPayload),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
            }

            const data = await res.json();
            console.log("API Response Data:", data);  // Log the entire response to inspect its structure

            // Check if the result is available and set it as the response
            if (data.result) {
                // Summarize the response to be within 150 words
                setFertilizers(data.result.trim().slice(0, 150));  // Summarize the response to 150 words
            } else {
                setError("No recommendations found for this crop.");
            }
        } catch (err) {
            console.error("Error fetching fertilizers:", err);
            setError(`Error fetching fertilizers: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 flex flex-col items-center ">
            <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
            <p className="mt-4 text-lg text-gray-700 text-center">
                Select a crop from the dropdown  to get recommendations about the nutritional requirements, manure and fertilizers and possible risks for a crop.
            </p>

            <div className="mt-6">
                <label htmlFor="crop" className="block text-lg font-medium text-gray-700 text-center">
                    Select Crop:
                </label>
                <select
                    id="crop"
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                >
                    <option value="">--Select a Crop--</option>
                    {crops.map((crop) => (
                        <option key={crop} value={crop}>
                            {crop}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={fetchFertilizers}
                className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={loading}
            >
                {loading ? "Loading..." : "Get Recommendations"}
            </button>

            {error && <p className="mt-4 text-red-600">{error}</p>}

            {fertilizers && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
                    <div className="mt-4 text-lg text-gray-700">
                        <ul className="list-disc pl-6">
                            <li><strong>Crop Intro:</strong> {fertilizers}</li>
                            <li><strong>Nutritional Requirements:</strong> {fertilizers}</li>
                            <li><strong>Manure and Fertilizers:</strong> {fertilizers}</li>
                            <li><strong>Possible Risks:</strong> {fertilizers}</li>
                            <li><strong>Safety Precautions:</strong> {fertilizers}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManurePage;

