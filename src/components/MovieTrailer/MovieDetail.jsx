import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { moreInfoBtnStyle, playBtnStyle } from "./movieTrailer.styles";

const MovieDetail = (props) => {
  const { title, description } = props;

  return (
    <div
      id="movie-detail"
      className="absolute w-screen aspect-[16/7] text-white bg-gradient-to-r from-black pl-[6%] pt-[20%]"
    >
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-xl mt-4 w-1/3">{description}</p>
      <div className="mt-6">
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          sx={playBtnStyle}
        >
          Play
        </Button>
        <Button
          variant="contained"
          startIcon={<InfoOutlinedIcon />}
          sx={moreInfoBtnStyle}
        >
          More Info
        </Button>
      </div>
    </div>
  );
};

export default MovieDetail;
