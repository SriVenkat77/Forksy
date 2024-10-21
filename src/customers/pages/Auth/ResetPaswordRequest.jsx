import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  
  resetPasswordRequest,
} from "../../../State/Authentication/Action";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ResetPasswordRequest = () => {
  
  const dispatch = useDispatch();
  const {auth}=useSelector(store=>store)

  const handleSubmit = (values) => {
    
    console.log("Login form values:", values);
    dispatch(resetPasswordRequest(values.email));
  };

  return (
    <>
      {" "}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography className="text-center" variant="h5">
            Forgot Password
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                id="email"
                autoComplete="email"
                helperText={<ErrorMessage name="email" />}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2,padding:"1rem" }}
              >
                Send Reset Password Link
              </Button>
            </Form>
          </Formik>
        </div>
      </Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={auth.isLoading}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ResetPasswordRequest;