import { useContext } from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useContext(UserContext);

  const onSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <header className="w-9/12 mx-auto flex justify-between items-center">
      <img
        src={"./assets/logo-complete.png"}
        alt="flix-gpt-logo"
        className="h-24 py-4"
      />
      {user && (
        <div className="flex">
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
        </div>
      )}
    </header>
  );
};

export default Header;
