import { useState } from 'react';
import TaskTracker from './TaskTracker';

export default function TaskList () {
    const [inputText, setInputText] = useState("");

    const [items, setItems] = useState ([{text: "Wash Dishes", isComplete: false}])

    const handleAddItem = () => {
        if (inputText.trim() === "") return;
        setItems ([...items, { text: inputText, isComplete: false }]);
        setInputText("");
    };

    const toggleItemStatus = (indexToToggle) => {
        const updatedItems = items.map((item, index) => {
            if (index === indexToToggle) {
                return { ...item, isComplete: !item.isComplete };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const deleteItem = (indexToDelete) => {
        const updatedItems = items.filter((item, index) => index !== indexToDelete);
        setItems(updatedItems);
    }

    const completedCount = items.filter(item => item.isComplete).length;



    return (
        <>
        <TaskTracker count={items.length} completedCount={completedCount}/>
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">My Task List</h2>
            <div className="flex gap-2 mb-6">
                <input 
                type="text"
                placeholder="Enter new Task..."
                className="border boreder-gray-300 rounded px-3 py-2 grow foucus:outline-none focus:border-blue-500"
                value={inputText}
                onChange={(e) => setInputText (e.target.value)}
                />
                <button 
                onClick={handleAddItem}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
                >Add</button>
            </div>
            {/* LIST HERE */}
            <ul className="space-y-3"> {/* Removed list-disc so it looks cleaner with the buttons */}
                {items.map((item, index) => (
                    // Added flexbox classes to push the text left and button right
                    <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                        
                        {/* 4. Text gets a strikethrough class if isComplete is true */}
                        <span className={`text-gray-700 ${item.isComplete ? 'line-through opacity-50' : ''}`}>
                            {item.text}
                        </span>
                        
                        {/* 5. The toggle button for this specific item */}
                        <button
                            onClick={() => toggleItemStatus(index)}
                            className={`text-xs px-3 py-1 rounded font-bold transition-colors ${
                                item.isComplete 
                                    ? "bg-green-100 text-green-700 hover:bg-green-200" 
                                    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                            }`}
                        >
                            {item.isComplete ? "Complete" : "Pending"}
                        </button>
                        <button
                                onClick={() => deleteItem(index)}
                                className="text-xs px-3 py-1 rounded font-bold transition-colors bg-red-100 text-red-700 hover:bg-red-200"
                                title="Delete Task"
                            >
                                ✕
                            </button>
                        
                    </li>
                ))}
            </ul>
        </div>
        </>
        
    )
}