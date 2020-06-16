import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {


  //Login control variables
  const [loginValues, setLoginValues] = useState({})
  const [loginErrors, setLoginErrors] = useState({})
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false)

  const [signupValues, setSignupValues] = useState({})
  const [signupErrors, setSignupErrors] = useState({})
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  // const [isSubmittingSignup, setIsSubmittingSignup] = useState(false)

  // Enables the callback if there are no errors and form is submitted
  //! Algo falta
  useEffect(() => {
    if (Object.keys(loginErrors).length === 0 && isSubmittingLogin) callback();
  }, [loginErrors]);

  useEffect(() => {
    if (Object.keys(signupErrors).length === 0 && isSubmittingLogin) callback();
  }, [signupErrors]);

  // 
  const handleLoginSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmittingLogin(true);
    setLoginErrors(validate(loginValues));
  };

  const handleSignupSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmittingLogin(true);
    setSignupErrors(validate(signupValues));
  };

  const handleLoginChange = (event) => {
    event.persist();
    setLoginValues(loginValues => ({ ...loginValues, [event.target.name]: event.target.value }));
  };

  const handleSignupChange = (event) => {
    event.persist();
    setSignupValues(signupValues => ({ ...signupValues, [event.target.name]: event.target.value }));
  };

  const handleClickShowLoginPassword = (e) => {
    setShowLoginPassword(!showLoginPassword)
  }

  const handleClickShowSignupPassword = (e) => {
    setShowSignupPassword(!showSignupPassword)
  }

  return {
    loginValues,
    loginErrors,
    showLoginPassword,
    handleLoginChange,
    handleLoginSubmit,
    handleClickShowLoginPassword,

    signupValues,
    signupErrors,
    showSignupPassword,
    handleSignupChange,
    handleSignupSubmit,
    handleClickShowSignupPassword,
  }
};

export default useForm;