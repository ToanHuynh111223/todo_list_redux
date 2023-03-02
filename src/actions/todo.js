export const addNewTodo = (todo) => {
    return {
        type: 'ADD',
        payload: todo,
    }
}