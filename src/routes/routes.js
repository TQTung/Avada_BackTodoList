import Router from "koa-router";
import todoListHandler from "../handlers/todoListHandler.js";
import todoListInputMiddleware from "../middleware/todoListInputMiddleware.js";

const router = new Router({
  prefix: "/api",
});

router.get("/todos", todoListHandler.getTodos);
router.post(
  "/todos/createTodo",
  todoListInputMiddleware,
  todoListHandler.addTodo
);
router.put("/todos/updateComplete/:id", todoListHandler.completeTodo);
router.put("/todos/undoComplete/:id", todoListHandler.undoCompleteTodo);
router.delete("/todos/deleteTodo/:id", todoListHandler.deleteTodo);

export default router;
