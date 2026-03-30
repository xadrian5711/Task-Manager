import { useState } from "react";

export default function TaskTracker ({count, completedCount}) {
    
    
    return <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">My Task Count</h2>
        <p className="text-4xl font-extrabold text-blue-600 text-center">{count}</p>
        <h2 className="text-xl font-bold mb-4 text-gray-800 mt-6">My Finished Tasks</h2>
        <p className="text-4xl font-extrabold text-blue-600 text-center">{completedCount}</p>

    </div>
}