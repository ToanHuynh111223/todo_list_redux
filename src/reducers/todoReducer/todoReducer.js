const initialState = {
    listTodos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newListTodo = [...state.listTodos]
            newListTodo.push(action.payload);
            return {
                listTodos: newListTodo
            }
                ;
        }
        case 'REMOVE_TODO': {
            const newListTodo = [...state.listTodos]
            newListTodo.splice(action.payload, 1)
            return {
                listTodos: newListTodo
            }
        }
        default: return state;
    }
}
export default todoReducer;