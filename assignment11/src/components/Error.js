import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    const {status, statusText, error} = err;
    console.log(err);
  return (
    <div className="p-7 bg-slate-600">
      <h1>Opps !!</h1>
      <h2>Something went wrong !!</h2>
      <h2>{status} : {statusText}</h2>
      <h3>{error.message}</h3>
    </div>
  );
};

export default Error;
