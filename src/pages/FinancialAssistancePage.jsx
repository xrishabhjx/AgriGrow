import { useState } from "react";
import { motion } from "framer-motion";

const FinancialAssistancePage = () => {
    // Sample financial assistance programs
    const programs = [
        {
            _id: "1",
            name: "Krishi Udyan 2.0",
            description: "A government initiative to provide financial support to farmers in need.",
            image: "https://www.facebook.com/saahas.social/posts/we-have-launched-our-latest-issue-of-e-magazine-iekrishi-udyan-darpan-udyan-darp/455085522749035/"
        },
        {
            _id: "2",
            name: "Interest Subvention Scheme",
            description: "Low-interest loans for farmers to help with equipment and operations.",
            image: "https://agritimes.co.in/farmers/cabinet-approves-interest-subvention-on-short-term-agriculture-loan-of-upto-inr-3-lakh/"
        },
        {
            _id: "3",
            name: "PM Fasal Beema Yojana",
            description: "Grants for farmers adopting environmentally sustainable practices.",
            image: "public/7.jpeg"
        },
        {
            _id: "4",
            name: "PM Krishi Sinchai Yojana",
            description: "Insurance programs to protect against crop loss due to adverse weather conditions.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJrfd56BuvF8CcwDSaEFlrejIeREh_oIh1Q&s"
        },
        {
            _id: "5",
            name: "Namo Drone Didi",
            description: "Subsidy for farmers to adopt modern technology for farming operations.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMtAoMPEJ4VKxIJ7bE69kK1kthunX5bJR7g&s"
        },
        {
            _id: "6",
            name: "PM Kisan Samman Nidhi",
            description: "Funding for projects to improve water usage efficiency in farming.",
            image: "https://images.bhaskarassets.com/web2images/521/2023/09/30/1763725-pm-kisan-samman-nidhi-yojana_1696066951.jpg"
        }
    ];

    return (
        <div className="container mx-auto p-6">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-6 text-center">Financial Assistance Programs</h1>

            {/* Grid of Financial Assistance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                    <motion.div
                        key={program._id}
                        className="bg-white border rounded-lg shadow-lg p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#f9fafb"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Image Layout - Rectangular */}
                        <div className="w-full h-48 mb-4 overflow-hidden shadow-xl">
                            <img
                                src={program.image}
                                alt={program.name}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                            />
                        </div>
                        <h3 className="mt-4 font-semibold text-lg">{program.name}</h3>
                        <p className="text-sm text-gray-600">{program.description}</p>

                        {/* Apply for Program Button */}
                        <motion.button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:bg-green-500 hover:cursor-pointer focus:outline-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                           <a href="https://upagripardarshi.gov.in/Index.aspx">Learn More</a> 
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FinancialAssistancePage;
