import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import {useParams} from "react-router";

const TableForm = () => {

    const {id} = useParams();
    console.log('table', id);

    const tableData = useSelector(state => getTableById(state, id))

    console.log('tableData', tableData);

    return (
        <>
        Status: {tableData.status}
        </>
    );
}
export default TableForm;
