import { KeyboardEvent, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-xl flex justify-center items-center transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
            onClick={onClose}>
            <div className="bg-white rounded-md" onClick={(event: React.MouseEvent) => event.stopPropagation()}>
                <IoCloseOutline className="cursor-pointer ml-auto text-2xl mt-4 mr-4" onClick={onClose}/>
                {children}
            </div>
        </div>
    );
};