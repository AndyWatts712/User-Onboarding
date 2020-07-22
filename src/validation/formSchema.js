import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
    first_name: yup
      .string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is Required"),
    last_name: yup
      .string()
      .required("First name is Required"),
  })