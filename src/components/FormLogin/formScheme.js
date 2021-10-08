import * as yup from 'yup';

const formScheme = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email it is not valid'),
  password: yup.string().required('Password is required').min(6),
});

export default formScheme;
