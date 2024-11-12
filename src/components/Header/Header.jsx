import { useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { Button, Tooltip } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, accessToken, uid } = user;
        userData.setValue({ displayName, email, accessToken, uid });
        navigate("/browse");
      } else {
        userData.setValue(undefined);
        navigate("/");
      }
      
      // Unsubscribe "onAuthStateChanged" when Header unmounts
      return() => unsubscribe();
    });
  }, [navigate, userData]);

  const onSignOutClick = () => {
    signOut(auth);
  };

  return (
    <header className="w-9/12 mx-auto flex justify-between items-center">
      <img
        src={"./assets/logo-complete.png"}
        alt="flix-gpt-logo"
        className="h-24 py-4"
      />
      {userData.getValue() && (
        <div className="flex">
          <Tooltip title={"Hello " + userData.getValue().displayName + "! 👋"}>
            <img
              src="/assets/profile-logo.png"
              alt="profile-image"
              className="rounded-md mr-4"
            />
          </Tooltip>
          <Tooltip title="Leaving so soon? ;(">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                borderRadius: "25px",
                fontWeight: "bold",
                padding: "5px 16px",
              }}
              onClick={onSignOutClick}
            >
              Sign Out
            </Button>
          </Tooltip>
        </div>
      )}
    </header>
  );
};

export default Header;
