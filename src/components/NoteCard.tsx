import { Box, Card, IconButton, Typography } from "@mui/material";
import { INote } from "../pages/Notes";
import { ICONS } from "../constants/icons.constants";

const NoteCard = ({ noteItem }: { noteItem: INote }) => {
  return (
    <Card sx={{ padding: "30px", background: noteItem.bgColor }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{noteItem.title}</Typography>
        <IconButton>
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
