import Table from "../../table/table";
import {ProductColumn} from "./products";
import DATA from "./products_data.json";
import "../../table/table.css"

const ProductsTable = () => {

  return (
    <div>
      <Table _data={DATA} _columns={ProductColumn} />
    </div>
  );
};
export default ProductsTable;
