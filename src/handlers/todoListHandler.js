import todoRepository from "../repositories/todoRepository.js";

const getTodos = (ctx) => {
  try {
    const allDatas = todoRepository.getTodos();
    if (!allDatas) {
      ctx.status === 404;
      return (ctx.body = {
        success: false,
        message: "Couldn't found any data",
      });
    }

    ctx.status === 200;
    return (ctx.body = {
      success: true,
      data: allDatas,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const addTodo = (ctx) => {
  try {
    const newTodo = ctx.request.body;
    const data = todoRepository.addNewTodo(newTodo);
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const completeTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.updateStatusComplete(parseInt(id));
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Updated status Completed successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const undoCompleteTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.undoStatusComplete(parseInt(id));
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Updated status Completed successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const deleteTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.removeTodo(parseInt(id));

    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Delete Todo successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

export default {
  getTodos,
  addTodo,
  completeTodo,
  undoCompleteTodo,
  deleteTodo,
};
