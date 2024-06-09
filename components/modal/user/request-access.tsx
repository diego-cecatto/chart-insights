'use client';
import React from 'react';
import Modal from '../modal';

const AccessRequestForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const reason = formData.get('reason');
    };

    return (
        <div className="bg-white p-8 rounded max-w-lg w-full mx-auto">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
                Access Not Authorized
            </h1>
            <p className="text-gray-700 mb-6">
                Describe below the reason that you need access to this asset.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="reason"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Reason for Access
                    </label>
                    <textarea
                        id="reason"
                        name="reason"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default AccessRequestForm;
