import Router from "koa-router";
import todoListHandler from "../handlers/todoListHandler.js";

const router = new Router({
  prefix: "/api",
});

router.get("/todos", todoListHandler.getListData);
router.post("/todos/createTodo", todoListHandler.addTodos);
router.put("/todos/updateComplete/:id", todoListHandler.completeTodo);
router.put("/todos/undoComplete/:id", todoListHandler.undoCompleteTodo);
router.delete("/todos/deleteTodo/:id", todoListHandler.deleteTodo);

export default router;
