import { Row } from "./Row";

type TableProps = {
  headers: Header[];
  products: any[];
};

type Header = {
  title: string;
  width: number;
};

const Table = ({ headers }: TableProps) => {
  const widths = headers.map((header) => header.width);
  return (
    <main>
      <section className="grid w-full grid-cols-12 bg-slate-100">
        {headers.map((header) => {
          return (
            <div className={`col-span-${header.width} border p-2`}>
              {header.title}
            </div>
          );
        })}
        <Row widths={widths} />
      </section>
    </main>
  );
};

export default Table;
