import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import TableInfo from "../../features/TableInfo/TableInfo";

const Home = () => {
    const tables = useSelector(getAllTables);
  return (
    <>
      <h2>All tables</h2>
      {tables.map((table) => 
        <TableInfo
          key={table.id}
          id={table.id}
          number={table.id}
          status={table.status}
          people={table.people}
          maxPeople={table.maxPeople}
          bill={table.bill}
        />
      )}
    </>
  );
};

export default Home;
