import React, {useState} from 'react';
import InventoryTable from "./FetchInventory";
import axios from 'axios';
import Navbar from "./Navbar";

function Inventory() {
    const [formData, setFormData] = useState({
        p_name: '', count: '', p_category: 'Perishable', expiry: '', check_in: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Form Data:", formData);
            const response = await axios.post('http://localhost:8080/inventoryadd', formData);
            console.log("successful transfer from frontend to backend");
            window.location.reload();
            console.log("Response:", response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <Navbar/>
        <div className="flex w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="w-1/2 flex flex-col items-center justify-center px-4">
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Product Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="p_name"
                                value={formData.p_name}
                                onChange={handleChange}
                                placeholder="Product Name"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Count
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                name="count"
                                value={formData.count}
                                onChange={handleChange}
                                placeholder="Count"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="p_category"
                                value={formData.p_category}
                                onChange={handleChange}
                            >
                                <option value="Perishable">Perishable</option>
                                <option value="Non-Perishable">Non-Perishable</option>
                            </select>
                        </div>
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Expiry
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="date"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Check-In
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="date"
                                name="check_in"
                                value={formData.check_in}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/6 pl-14 mb-4 md:mb-0 flex items-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-4 md:mt-0 text-sm"
                                type="submit"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="w-1/2 h-full overflow-y-auto rounded-lg shadow-md bg-white px-4 py-4">
                <InventoryTable />
            </div>
        </div>
        </div>
    );

}

export default Inventory;



















