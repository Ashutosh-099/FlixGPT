import { useContext, useRef, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { auth } from "../../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "../Header/Header";
import { validateLogInForm, validateSignUpForm } from "../../utils/helper";
import { UserContext } from "../../contexts/UserContext";
import { strings } from "../../utils/constants";
import { submitBtnStyles } from "./Login.styles";

const Login = () => {
  const userData = useContext(UserContext);

  const [isSignIn, setIsSignIn] = useState(true);
  const [onFormSubmitLoad, setFormSubmitLoad] = useState(false);
  const [message, setMessage] = useState(undefined);

  const name = useRef(undefined);
  const email = useRef(undefined);
  const password = useRef(undefined);

  const handleOnSignUpClick = () => {
    setFormSubmitLoad(false);
    setIsSignIn(!isSignIn);
    setMessage(undefined);
  };

  const onSubmitBtnClick = () => {
    setFormSubmitLoad(true);
    if (isSignIn) {
      const userEmail = email.current.value;
      const userPassword = password.current.value;

      const errorMsg = validateLogInForm(userEmail);
      setMessage(errorMsg ? { type: "error", message: errorMsg } : undefined);
      if (errorMsg) {
        setFormSubmitLoad(false);
        return;
      }

      signInWithEmailAndPassword(auth, userEmail, userPassword).catch(
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage({
            type: "error",
            message: errorCode + "- " + errorMessage,
          });
          setFormSubmitLoad(false);
        }
      );
    } else {
      const userName = name.current.value;
      const userEmail = email.current.value;
      const userPassword = password.current.value;

      const errorMsg = validateSignUpForm(userName, userEmail, userPassword);
      setMessage(errorMsg ? { type: "error", message: errorMsg } : undefined);
      if (errorMsg) {
        setFormSubmitLoad(false);
        return;
      }

      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: userName,
          })
            .then(() => {
              const name = auth.currentUser.displayName;
              const user = userData.getValue();
              user.displayName = name;
              userData.setValue(user);
            })
            .catch((error) => {
              setFormSubmitLoad(false);
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage({
                type: "error",
                message: errorCode + "- " + errorMessage,
              });
            });
        })
        .catch((error) => {
          setFormSubmitLoad(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage({
            type: "error",
            message: errorCode + "- " + errorMessage,
          });
        });
    }
  };

  return (
    <div className="absolute w-full background-image-login bg-cover h-screen">
      <Header />
      <div id="form-container" className="h-full flex items-center">
        <div className="w-3/12 bg-black/70 mx-auto py-8 px-16 text-white rounded-md">
          <header className="my-5">
            <span className="text-3xl font-bold">
              {isSignIn ? strings.signIn : strings.signUp}
            </span>
          </header>
          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            {message && (
              <p
                className={`text-sm font-semibold my-3" ${
                  message.type === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {message.message}
              </p>
            )}

            {!isSignIn && (
              <input
                type="text"
                className="w-full bg-transparent p-3 border border-gray-400 rounded-md my-3 focus:border-2 focus:border-white focus:bg-[#465a7e66]"
                placeholder={strings.nameInputPlaceholder}
                ref={name}
                disabled={onFormSubmitLoad}
              />
            )}

            <input
              type="text"
              className="w-full bg-transparent p-3 border border-gray-400 rounded-md my-3 focus:border-2 focus:border-white focus:bg-[#465a7e66]"
              placeholder={strings.emailInputPlaceholder}
              ref={email}
              disabled={onFormSubmitLoad}
            />
            <input
              type="password"
              className="w-full bg-transparent p-3 border border-gray-400 rounded-md my-3 focus:border-2 focus:border-white focus:bg-[#465a7e66]"
              placeholder={strings.passwordInputPlaceholder}
              ref={password}
              disabled={onFormSubmitLoad}
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={submitBtnStyles}
              onClick={onSubmitBtnClick}
              disabled={onFormSubmitLoad}
            >
              {isSignIn ? strings.signIn : strings.createAccountBtnName}
            </Button>
            {onFormSubmitLoad ? (
              <div className="text-center my-2">
                <CircularProgress sx={{ color: "red" }} />
              </div>
            ) : (
              <>
                <p className="text-center text-gray-400 font-semibold my-2">
                  OR
                </p>
                <p className="my-3 text-lg">
                  <span className="text-gray-300">
                    {isSignIn ? strings.newToFlix : strings.existingAccount}{" "}
                  </span>
                  <span
                    className="text-white font-semibold hover:underline cursor-pointer"
                    onClick={handleOnSignUpClick}
                  >
                    {isSignIn ? strings.signupNow : strings.signInNow}
                  </span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
