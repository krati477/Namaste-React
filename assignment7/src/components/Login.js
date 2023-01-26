import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      alert("Good to go!");
      navigate("/home");
    },
  });

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit}>
        <label className="lable" htmlFor="email">Email Address</label>
        <input
          className="email"
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          values={formik.values.email}
        />

        <label className="lable" htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          values={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
