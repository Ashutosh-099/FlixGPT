import { buttonClasses } from "@mui/material";

export const playBtnStyle = {
  textTransform: "none",
  fontSize: 24,
  padding: "4px 28px",
  backgroundColor: "white",
  color: "black",
  opacity: 0.7,
  [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
    fontSize: "28px",
  },
  ":hover": {
    opacity: 1,
    transition: "0.8s",
  },
};

export const moreInfoBtnStyle = {
  marginLeft: "1.5rem",
  textTransform: "none",
  fontSize: 24,
  padding: "4px 24px",
  backgroundColor: "gray",
  opacity: 0.7,
  [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
    fontSize: "28px",
  },
  ":hover": {
    opacity: 1,
    transition: "0.8s",
  },
};
