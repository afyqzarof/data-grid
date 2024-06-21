import Table from "./components/Table";

function App() {
  const headers = ["", "Product", "ID", "Unit Price", "Qty Per Unit"];
  return (
    <body className="p-4">
      <Table headers={headers} />
    </body>
  );
}

export default App;
