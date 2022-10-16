//selectors
export const getAllStatuses = (state) => state.statuse;

//action
const createActionName = actionName => `app/statuses/${actionName}`;

//Action creators
const statusesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};

export default statusesReducer;
