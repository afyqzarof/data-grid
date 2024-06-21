import Table from "./components/Table";
import products from "./data/products.json"

function App() {
  const headers = [
    {
      title: "",
      width: 1,
    },
    {
      title: "Product",
      width: 4,
    },
    {
      title: "ID",
      width: 2,
    },
    {
      title: "Unit Price",
      width: 2,
    },
    {
      title: "Qty Per Unit",
      width: 3,
    },
  ];
  return (
    <body className="p-4">
      <Table headers={headers} />
    </body>
  );
}

export default App;
