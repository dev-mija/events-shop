import React, { useState, useEffect, useReducer } from "react";
import Card from "./Card";
import classes from './Login.module.css'
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login-slice";
import Button from "./Button/Button";
import Input from "./Input";


const emailReducer = (state, action) => {
    if (action.type === "NEW_USER_INPUT") {
      return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "USER_BLURRED_INPUT") {
      return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
  };
  const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "PASSWORD_BLURRED") {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
  };
  const Login = (props) => {
const dispatch=useDispatch()
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: "",
      isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: "",
      isValid: null,
    });
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
  
    useEffect(() => {
      const time = setTimeout(() => {
        console.log("time working");
        console.log(emailIsValid,passwordIsValid)
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);
  
      return () => {
        console.log("cleanup");
        clearTimeout(time);
      };
    }, [emailIsValid, passwordIsValid]);
    const emailChangeHandler = (event) => {
      dispatchEmail({ type: "NEW_USER_INPUT", val: event.target.value });
 
    };
  
    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
     
    };
  
    const validateEmailHandler = () => {
      dispatchEmail({ type: "USER_BLURRED_INPUT" });
      
    };
  
    const validatePasswordHandler = () => {
      dispatchPassword({ type: "PASSWORD_BLURRED" });
     
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      dispatch(loginActions.login())
    };
  
    return (
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            id="email"
            label="E-mail"
            type="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></Input>
           <Input
            id="password"
            label="Password"
            type="Password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></Input>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    );
  };
  
  export default Login;
  