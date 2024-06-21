import { useState } from "react";

type RowsProps = {
  product: string;
  id: number;
  unitPrice: number;
  qtyUnit: string;
  index: number;
  inStock: number;
  onOrder: number;
  reorder: number;
  discontinued: boolean;
  categoryName: string;
  categoryDesc: string;
};
export const Row = ({
  product,
  id,
  unitPrice,
  qtyUnit,
  index,
  inStock,
  onOrder,
  reorder,
  discontinued,
  categoryName,
  categoryDesc,
}: RowsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const getBgColor = (index: number) => {
    if (index % 2) {
      return "bg-gray-100";
    }
    return "bg-white";
  };
  return (
    <>
      <div
        className={`${getBgColor(index)} col-span-12 grid grid-cols-12 hover:bg-gray-200`}
      >
        <div
          className="col-span-1 flex cursor-pointer justify-center border p-2 text-lg"
          onClick={handleClick}
        >
          {isOpen ? "-" : "+"}
        </div>
        <div className="col-span-4 border p-2">{product}</div>
        <div className="col-span-2 border p-2">{id}</div>
        <div className="col-span-2 border p-2">{unitPrice}</div>
        <div className="col-span-3 border p-2">{qtyUnit}</div>
      </div>
      <div className="col-span-1"></div>
      <div
        className={`${isOpen ? "flex" : "hidden"} col-span-11 flex-col gap-4 p-2`}
      >
        <p>
          <b>In Stock:</b> {inStock} units
        </p>
        <p>
          <b>On Order:</b> {onOrder} units
        </p>
        <p>
          <b>Reorder Level:</b> {reorder} units
        </p>
        <p>
          <b>Discontinued:</b> {discontinued ? "Yes" : "No"}
        </p>
        <p>
          <b>Category:</b> {categoryName} - {categoryDesc}
        </p>
      </div>
    </>
  );
};
