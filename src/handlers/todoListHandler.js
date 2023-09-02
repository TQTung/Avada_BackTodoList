import todoRepository from "../repositories/todoRepository.js";

const getListData = async (ctx) => {
  try {
    const allDatas = await todoRepository.getAllData();
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

const addTodos = async (ctx) => {
  try {
    const newTodo = ctx.request.body;
    const data = await todoRepository.addNewTodo(newTodo);
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

const completeTodo = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = await todoRepository.updateStatusComplete(parseInt(id));
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

const undoCompleteTodo = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = await todoRepository.undoStatusComplete(parseInt(id));
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

const deleteTodo = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = await todoRepository.removeTodo(parseInt(id));

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
  getListData,
  addTodos,
  completeTodo,
  undoCompleteTodo,
  deleteTodo,
};
