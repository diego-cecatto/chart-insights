'use client';
import React from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import Hyperlink from '../icons/hyperlink';
import { toast } from 'react-toastify';

declare type ModalProps = {
    children: React.ReactNode;
    share?: boolean;
};

export default function Modal({ children, share = false }: ModalProps) {
    const router = useRouter();

    const onClose = () => {
        router.back();
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="pt-4 pr-4 flex items-center">
                    {share && (
                        <div className="flex items-center ml-auto mr-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    navigator.clipboard.writeText(
                                        window.location.href
                                    );
                                    toast('Link copied to clipboard!');
                                }}
                                className="w-4"
                            >
                                <Hyperlink className=" " />
                            </button>
                        </div>
                    )}
                    <div
                        className={`flex items-center ${
                            !share ? 'ml-auto' : ''
                        }`}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onClose();
                            }}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            &times;
                        </button>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>,
        document.getElementById('modal-container')!
    );
}
