import { Box, Button, TextField, Typography } from "@mui/material";
import "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import registerImg from "../assets/register.jpeg";

function Register() {
  let validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9]{7,}$/,
        "Password must start with a capital letter and be at least 8 characters. Example: ZyxwvuT9"
      ),
    rePassword: Yup.string()
      .required("Re-password is required")
      .oneOf([Yup.ref("password")], "Password and re-password do not match"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Please enter a valid email. Example: example@example.com"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian number. Example: 01012345678"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    country: Yup.string().required("Country is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      rePassword: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      dateOfBirth: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
      <Box
        sx={{
          height: { xs: "300px", md: "120vh" },
          width: { xs: "100%", md: "50%" },
          position: "relative",
          display: { xs: "none", md: "flex" },
        }}
      >
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
            height: "100%",
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
          width: { xs: "100%", md: "50%" },
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "100vh" },
        }}
      >
        <Box
          component="form"
          sx={{
            width: { xs: "90%", sm: "80%", md: "80%" },
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            mx: "auto",
            p: 2,
            boxShadow: { xs: "none", md: "0 0 10px rgba(0,0,0,0.1)" },
          }}
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h3" sx={{fontWeight:'600'}}>Register</Typography>
          <TextField
            label="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <Box sx={{ color: "red" }}>{formik.errors.name}</Box>
          )}
          
          <TextField
            label="Password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <Box sx={{ color: "red" }}>{formik.errors.password}</Box>
          )}
          
          <TextField
            label="Re-password"
            name="rePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <Box sx={{ color: "red" }}>{formik.errors.rePassword}</Box>
          )}
          
          <TextField
            label="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <Box sx={{ color: "red" }}>{formik.errors.email}</Box>
          )}
          
          <TextField
            label="Phone Number"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone && (
            <Box sx={{ color: "red" }}>{formik.errors.phone}</Box>
          )}
          
          <TextField
            label="Address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.address && formik.touched.address && (
            <Box sx={{ color: "red" }}>{formik.errors.address}</Box>
          )}

          <TextField
            label="City"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.city && formik.touched.city && (
            <Box sx={{ color: "red" }}>{formik.errors.city}</Box>
          )}

          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
            <Box sx={{ color: "red" }}>{formik.errors.dateOfBirth}</Box>
          )}

          <TextField
            label="Country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.country && formik.touched.country && (
            <Box sx={{ color: "red" }}>{formik.errors.country}</Box>
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
