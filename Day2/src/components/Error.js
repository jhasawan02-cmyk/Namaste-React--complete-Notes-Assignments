import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h3 className="text-6xl font-black text-orange-500 mb-4 animate-bounce">
        OOPS .......
      </h3>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">
        Something Went Wrong
      </h3>
      <h1 className="text-xl font-mono bg-red-100 text-red-600 px-4 py-2 rounded-lg border border-red-200 shadow-sm">
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default Error;