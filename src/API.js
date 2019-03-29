'use strict';

import { request } from './HttpRequests';

const Todo = {
    getTodos: (limit) => request.get(`todos?_limit=${limit}`),
    addTodo: (data) => request.post(`todos`, data),
    deleteTodo: (id) => request.delete(`todos/${id}`),
}

export { Todo };