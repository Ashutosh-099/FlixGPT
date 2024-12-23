import { Button, Tooltip } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { moreInfoBtnStyle, playBtnStyle } from "./movieTrailer.styles";

const MovieDetail = (props) => {
  const { title, description } = props;

  return (
    <div
      id="movie-detail"
      className="absolute w-full aspect-[16/7] text-white bg-gradient-to-r from-black pl-[6%] pt-[20%]"
    >
      <p className="text-5xl font-bold">{title}</p>
      <Tooltip title={description}>
        <p className="text-lg mt-4 w-1/3 ellipsis-style">{description}</p>
      </Tooltip>
      <div className="mt-6">
        <Tooltip title="Play">
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={playBtnStyle}
          >
            Play
          </Button>
        </Tooltip>
        <Tooltip title="More Info">
          <Button
            variant="contained"
            startIcon={<InfoOutlinedIcon />}
            sx={moreInfoBtnStyle}
          >
            More Info
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default MovieDetail;
