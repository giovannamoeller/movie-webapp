import { IoCloseOutline } from "react-icons/io5";

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
    return isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-xl flex justify-center items-center">
            <div className="bg-white rounded-md">
                <IoCloseOutline className="cursor-pointer ml-auto" onClick={onClose}/>
                {children}
            </div>
        </div>
    );
};