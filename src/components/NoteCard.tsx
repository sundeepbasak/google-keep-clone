import { Box, Card, IconButton, Typography } from "@mui/material";
import { INote } from "../pages/Notes";
import { ICONS } from "../constants/icons.constants";

interface INoteCard {
  noteItem: INote;
  onPin: (id: string, pinVal: boolean) => void;
  isActive: boolean;
}

const NoteCard = ({ noteItem, onPin, isActive }: INoteCard) => {
  return (
    <Card
      sx={{
        padding: "10px 30px",
        background: noteItem.bgColor,
        opacity: isActive ? 0 : 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{noteItem.title}</Typography>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onPin(noteItem.id, !noteItem.isPinned);
          }}
        >
          {noteItem.isPinned ? <ICONS.PIN /> : <ICONS.UNPIN />}
        </IconButton>
      </Box>
      <Typography variant="h6">{noteItem.text}</Typography>
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
  );
};

export default NoteCard;
