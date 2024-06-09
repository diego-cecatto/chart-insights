'use client';
import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

declare type ModalProps = {
    children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
    const router = useRouter();

    const onClose = () => {
        router.back();
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
                <div className="p-4 border-b text-right">
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>,
        document.getElementById('modal-container')!
    );
}
