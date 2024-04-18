import { NavLink } from "react-router-dom";
import GenericInput from "../../components/forms/GenericInput/GenericInput.component";
import { useForm } from "react-hook-form";
import { LoginFormFields } from "../../api/firebase/firebase.types";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { loginMutation } from "../../api/oauth/oauth.api";

const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormFields>();
  const mutation = useMutation(loginMutation());

  const onSubmit = (values: LoginFormFields) => {
    mutation.mutate(values);
  };

  useEffect(() => {
    setFocus("email", { shouldSelect: true });
  }, [setFocus]);

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Log in
              </h1>
              <p className="flex justify-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                Non hai un account?
                <NavLink
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/sign-up"
                >
                  Registrati qui
                </NavLink>
              </p>
            </div>
            <div className="mt-5">
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                oppure
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
                  <GenericInput
                    label="Email"
                    name="email"
                    type="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    register={register}
                    errors={errors}
                    rules={{
                      required: true,
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email non valida",
                      },
                    }}
                  />
                  <GenericInput
                    label="Password"
                    name="password"
                    type="password"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    register={register}
                    errors={errors}
                    rules={{
                      required: "Campo obbligatorio",
                      maxLength: 80,
                    }}
                  />
                  <NavLink
                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to="/forgot-password"
                  >
                    Hai dimenticato la password?
                  </NavLink>
                  {mutation.isPending ? (
                    <button
                      disabled
                      type="button"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <span
                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      />
                      Accedi
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Accedi
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
