import React from 'react';

const EducationalSupportPage = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center">Educational Support</h1>
            <p className="text-lg text-gray-700 mb-10 text-center">
                Here you can find information about various educational programs and resources for farmers. We offer training, online courses, and workshops to improve farming skills.
            </p>

            {/* Flex container to align cards horizontally and vertically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
                {/* Agriculture Training Program Section with Playlist Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Agriculture Training Program</h3>
                        <p className="mt-3 text-gray-600">Learn essential farming skills and techniques through government-backed training programs.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Playlist */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/videoseries?list=PLUMkTocemlhJhSo7Lw8wnQ9RWE1_IsnZR"
                                title="Agriculture Training Playlist"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>

                {/* Online Courses Section with Playlist Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Online Courses for Farmers</h3>
                        <p className="mt-3 text-gray-600">Take part in online courses to improve your farming knowledge and skills.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Playlist */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/videoseries?list=PLs9JmqSMwHtowWoWzjmq0YCDpx-33_rJt"
                                title="Online Courses Playlist"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Explore Courses</a>
                    </div>
                </div>

                {/* Workshops Section with Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Farmer Workshops</h3>
                        <p className="mt-3 text-gray-600">Join workshops and seminars organized to help farmers stay up to date with new techniques and technologies.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Video */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/QeWZPvi-xBE"
                                title="Farmer Workshops Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Find a Workshop</a>
                    </div>
                </div>

                {/* Mentorship Program Section with Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Farmer Mentorship Program</h3>
                        <p className="mt-3 text-gray-600">Get personalized guidance and mentorship from experienced farmers and agricultural experts.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Playlist */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/videoseries?list=PLrJY_OW9rmRS3TJNLOG_haAd4_i9OE_FA"
                                title="Farmer Mentorship Playlist"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Join Mentorship</a>
                    </div>
                </div>

                {/* Grants and Financial Aid Section with Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Grants & Financial Aid</h3>
                        <p className="mt-3 text-gray-600">Access resources to apply for grants and financial aid programs for farmers.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Video */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/rVHCrZ-GDFk"
                                title="Grants and Financial Aid Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>

                {/* Sustainable Farming Section with Embed */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600">Sustainable Farming Practices</h3>
                        <p className="mt-3 text-gray-600">Understand the principles and practices of sustainable farming to protect the environment and increase productivity.</p>
                        <div className="mt-4">
                            {/* Embed YouTube Video */}
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.youtube.com/embed/nNP4o1wE6Vo"
                                title="Sustainable Farming Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalSupportPage;
