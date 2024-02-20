import { useState } from "react";
import ProductModal from "../product-modal/product-modal";
import { ProductProps } from "./product.types";

export const Product = ({ product }: ProductProps) => {
  const [isOpen, toggleModal] = useState(false);

  const handleToggleModal = () => {
    toggleModal(!isOpen);
  };

  return (
    <>
      <ProductModal
        name={product.name}
        color={product.color}
        isOpen={isOpen}
        onClose={handleToggleModal}
      />
      <tr
        style={{ backgroundColor: product.color }}
        className="cursor-pointer rounded-xl"
        onClick={handleToggleModal}>
        <td className="row">{product.id}</td>
        <td className="row">{product.name}</td>
        <td className="row">{product.pantone_value}</td>
        <td className="row">{product.year}</td>
      </tr>
    </>
  );
};
