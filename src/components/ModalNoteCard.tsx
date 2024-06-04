import {
  Box,
  Card,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { ICONS } from "../constants/icons.constants";
import { INote } from "../pages/Notes";
import Zoom from "@mui/material/Zoom";

interface IModalNoteCard {
  open: boolean;
  onClose: () => void;
  noteItem: INote | undefined;
}

// Custom style for the modal
const modalStyle = {
  top: "30%",
  maxWidth: "500px",
  margin: "auto",
  outline: 0,
  border: 0,
};

const ModalNoteCard = ({ noteItem, open, onClose }: IModalNoteCard) => {
  const cardStyle = {
    padding: "10px 30px",
    background: noteItem?.bgColor,
    outline: 0,
    border: 0,
    transition: "all 5s ease-in",
    opacity: open ? 1 : 0, // Apply fade-in/fade-out effect
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        top: "30%",
        maxWidth: "500px",
        margin: "auto",
        outline: 0,
        border: 0,
      }}
    >
      <div style={modalStyle}>
        <Card sx={cardStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={noteItem?.title}
            />
            <IconButton>
              {noteItem?.isPinned ? <ICONS.PIN /> : <ICONS.UNPIN />}
            </IconButton>
          </Box>
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            value={noteItem?.text}
            onChange={() => {}}
          />
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <ICONS.ARCHIVE />
            </IconButton>
            <IconButton>
              <ICONS.DELETE />
            </IconButton>
            <IconButton>
              <ICONS.COMPLETE />
            </IconButton>
          </Box>
        </Card>
      </div>
    </Modal>
  );
};

export default ModalNoteCard;

{
  /* <Slide direction="down" in={open} timeout={300} easing="ease"> */
}
{
  /* </Slide> */
}
