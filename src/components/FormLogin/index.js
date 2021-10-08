import React from 'react';

import {Formik} from 'formik';

import Input from '../Input';
import Button from '../Button';

import formScheme from './formScheme';

const FormLogin = () => (
  <Formik
    initialValues={{email: '', password: ''}}
    onSubmit={({email, password}) => console.log('login', email, password)}
    validationSchema={formScheme}>
    {({handleSubmit, handleChange, errors}) => (
      <>
        <Input
          nameIcon="email"
          //value={email}
          //onChangeText={setEmail}
          onChangeText={handleChange('email')}
          placeholder="Enter your email"
          keyboardType="email-address"
          error={errors.email}
        />
        <Input
          nameIcon="lock"
          //value={password}
          //onChangeText={setPassword}
          onChangeText={handleChange('password')}
          placeholder="Enter your password"
          secureTextEntry
          error={errors.password}
        />
        <Button nameIcon="arrow-right" text="LOGIN" onPress={handleSubmit} />
      </>
    )}
  </Formik>
);

export default FormLogin;
