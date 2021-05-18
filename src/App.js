
import ProductTable from "./ProductTable";

function App() {
  return (
    <div className="container col-8">
    <div>Product</div>
      <ProductTable
        products={[
          { id: 1, name: 'Amy', salary: 2.5, department: 20 },
          {
            id: 2, name: 'Jake', salary
              : 2.9, department: 'java'
          },
          {
            id: 3, name: 'Parag', salary
              : 2.4, department: 'oracle'
          },
          {
            id: 4, name: 'Keval', salary
              : 3.9, department: 'angular'
          },
          {
            id: 5, name: 'Bhappu', salary
              : 0.9, department: 'selenium'
          },
          {
            id: 6, name: 'Rahul ', salary
              : 2.9, department: 'ceh'
          },
          {
            id: 7, name: 'Pal', salary
              : 99, department: 'pycharm'
          },
        ]}
      />
    </div>
  );
}

export default App;

