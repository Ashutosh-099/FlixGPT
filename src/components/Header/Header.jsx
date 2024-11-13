import { useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { Button, Tooltip } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { signOutBtnStyles } from "./Header.styles";
import { routesPath, strings } from "../../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, accessToken, uid } = user;
        userData.setValue({ displayName, email, accessToken, uid });
        navigate(routesPath.browse);
      } else {
        userData.setValue(undefined);
        navigate(routesPath.login);
      }

      // Unsubscribe "onAuthStateChanged" when Header unmounts
      return () => unsubscribe();
    });
  }, [navigate, userData]);

  const onSignOutClick = () => {
    signOut(auth);
  };

  return (
    <header className="w-9/12 mx-auto flex justify-between items-center">
      <img
        src={strings.headerLogoURL}
        alt={strings.headerLogoAlt}
        className="h-24 py-4"
      />
      {userData.getValue() && (
        <div className="flex">
          <Tooltip title={"Hello " + userData.getValue().displayName + "! 👋"}>
            <img
              src={strings.headerProfileLogoURL}
              alt={strings.headerProfileAlt}
              className="rounded-md mr-4"
            />
          </Tooltip>
          <Tooltip title={strings.signOutTooltip}>
            <Button
              variant="contained"
              sx={signOutBtnStyles}
              onClick={onSignOutClick}
            >
              {strings.signOutBtnName}
            </Button>
          </Tooltip>
        </div>
      )}
    </header>
  );
};

export default Header;
