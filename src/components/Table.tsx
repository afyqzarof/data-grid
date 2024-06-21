import { Row } from "./Row";
import products from "../data/products.json";

type TableProps = {
  headers: string[];
};

const Table = ({ headers }: TableProps) => {
  const widths = [1, 4, 2, 2, 3];

  return (
    <main>
      <section className="grid w-full grid-cols-12">
        {headers.map((header, index) => {
          return (
            <div
              className={`col-span-${widths[index]} border bg-slate-300 p-2`}
              key={index}
            >
              {header}
            </div>
          );
        })}
        {products.map((product, index) => {
          return (
            <div
              key={product.ProductID}
              className="col-span-12 grid grid-cols-12"
            >
              <Row
                product={product.ProductName}
                id={product.ProductID}
                unitPrice={product.UnitPrice}
                qtyUnit={product.QuantityPerUnit}
                index={index}
                inStock={product.UnitsInStock}
                onOrder={product.UnitsOnOrder}
                reorder={product.ReorderLevel}
                discontinued={product.Discontinued}
                categoryName={product.Category?.CategoryName}
                categoryDesc={product.Category?.Description}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Table;
