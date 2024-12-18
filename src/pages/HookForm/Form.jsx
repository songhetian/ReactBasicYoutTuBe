import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function OnSubmit(data) {
    console.log(data);
  }
  console.log(errors);
  return (
    <div className="border border-solid border-blue-300 w-[1000px] m-auto h-full">
      <form
        className="m-10"
        onSubmit={handleSubmit(OnSubmit)}>
        <div className="mt-10">
          <label
            htmlFor="name"
            className="mr-5">
            姓名:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "姓名必须填写",
            })}
          />
        </div>
        <div className="mt-10">
          <label
            htmlFor="age"
            className="mr-5">
            年龄:
          </label>
          <input
            type="text"
            id="age"
            {...register("age", {
              required: "年龄必须填写",
              min: {
                value: 1,
                message: "不能小于1",
              },
              max: 100,
            })}
          />
        </div>
        <p className="mt-10 ml-48">
          <button className="bg-blue-400 p-2 text-white rounded-md shadow-lg hover:bg-blue-700 hover:translate-y-1 duration-300 transition-all">
            提交
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
