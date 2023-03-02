const initialState = {
    listTodos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            const newListTodo = [...state.listTodos]
            newListTodo.push(action.payload);
            return {
                listTodos: newListTodo
            }
                ;
        }
        default: return state;
    }
}
export default todoReducer;