export const getAllTables = (state) => state.tables;
export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId); 

// const createActionName = name => {
//     return "app/tables/" + name
// };
const tablesReducer = function(statePart = [], action) {
    switch (action) {
    default: 
    return statePart;
    };
};
export default tablesReducer; 