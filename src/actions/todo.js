export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}
export const removeTodo = (index) => {
    return {
        type: 'REMOVE_TODO',
        payload: index,
    }
}