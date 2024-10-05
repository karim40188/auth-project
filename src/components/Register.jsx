import { Box, Button, TextField } from "@mui/material";
import "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import registerImg from "../assets/register.jpeg";
function Register() {
  let validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9]{7,}$/,
        "password must be start with capital letter and min length is 8 "
      ),
    rePassword: Yup.string()
      .required("re-password is required")
      .oneOf([Yup.ref("password")], "password and repassword is not match"),
    email: Yup.string()
      .required("email is required")
      .email("invalid email format")
      .matches(
        /^[A-Za-z0-9._%+-]+@(gmail|yahoo|hotmail)\.com$/,
        "please put a valid email"
      ),

    phone: Yup.string()
      .required("phone is required")
      .matches(/01[0125][0,9]{8}/, "please put a egyption number"),
    country: Yup.string().required("country is required"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      rePassword: "",
      email: "",
      phone: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ height: "100vh", display: "flex", position: "relative" }}>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
          }}
        ></Box>
        <Box
          component="img"
          sx={{
            width: "100%",
            // height: "100%",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
          src={registerImg}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justfiyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          component="form"
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            mx: "auto",
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            sx={{ width: "100%", borderRadius: "30px" }}
            label="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.name}{" "}
            </Box>
          ) : (
            ""
          )}
          <TextField
            sx={{ width: "100%" }}
            label="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.password}{" "}
            </Box>
          ) : (
            ""
          )}
          <TextField
            sx={{ width: "100%" }}
            label="re-Password"
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.rePassword}{" "}
            </Box>
          ) : (
            ""
          )}
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.email}{" "}
            </Box>
          ) : (
            ""
          )}
          <TextField
            sx={{ width: "100%" }}
            label="Phone Number"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.phone}{" "}
            </Box>
          ) : (
            ""
          )}
          <TextField
            sx={{ width: "100%" }}
            label="Country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.country && formik.touched.country ? (
            <Box sx={{ color: "red", textTransform: "capitalize" }}>
              {" "}
              {formik.errors.country}{" "}
            </Box>
          ) : (
            ""
          )}

          <Button
            sx={{
              backgroundColor: "#1976D2",
              width: "30%",
              color: "#fff",
              textTransform: "capitalize",
              display: "block",
              ml: "auto",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
