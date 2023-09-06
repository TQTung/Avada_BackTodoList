import * as yup from "yup";

const validateInputId = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    let schema = yup.object().shape({
      id: yup.string().required(),
    });
    await schema.validate({ id: id });
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

export default validateInputId;
