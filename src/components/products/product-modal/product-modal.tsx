import { Modal } from "../../modal/modal";
import { ProductModalProps } from "./product-modal.props";

const ProductModal = ({ name, color, isOpen, onClose }: ProductModalProps) => {
  return (
    <Modal opened={isOpen} onClose={onClose}>
      <div className="p-8">
        <h2 className="text-white/90 text-7xl">{name}</h2>
        <p className="text-2xl text-gray-400">{color}</p>
        <div
          className="h-24 w-24 mx-auto mt-12 rounded-2xl shadow-2xl"
          style={{ backgroundColor: color }}></div>
      </div>
    </Modal>
  );
};

export default ProductModal;
