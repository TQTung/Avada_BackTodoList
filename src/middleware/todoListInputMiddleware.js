import * as yup from "yup";

const todoListInputMiddleware = async (ctx, next) => {
  try {
    const postData = ctx.request.body;
    let schema = yup.object().shape({
      text: yup.string().required(),
      isCompleted: yup.boolean(),
    });
    await schema.validate(postData);
    next();
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: error.errors,
      errorName: error.name,
    };
  }
};

export default todoListInputMiddleware;
