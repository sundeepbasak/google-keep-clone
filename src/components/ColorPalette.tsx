import { Box, Paper } from "@mui/material";
import { INote } from "../pages/Notes";

const COLORS = [
  { id: 0, color: "", text: "default" },
  { id: 1, color: "#FFC4D0", text: "rose" },
  { id: 2, color: "#FFD966", text: "mustard" },
  { id: 3, color: "#DFCCFB", text: "grape" },
  { id: 4, color: "#78C1F3", text: "iris" },
  { id: 5, color: "#F0F69F", text: "lime" },
  { id: 6, color: "#FF6969", text: "cherry" },
  { id: 7, color: "#019267", text: "moss" },
  { id: 8, color: "#CA965C", text: "coffee" },
  { id: 9, color: "#838383", text: "graphite" },
];

const ColorPalette = ({
  setNote,
}: {
  setNote: React.Dispatch<React.SetStateAction<INote>>;
}) => {
  return (
    <Paper
      sx={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 40,
        left: -10,
      }}
    >
      {COLORS.map((item) => (
        <Box
          key={item.id}
          component="button"
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: item.color === "" ? "white" : item.color,
            margin: "0 8px",
            outline: "none",
            border: item.color === "" ? "2px solid gray" : "none",
            cursor: "pointer",
          }}
          onClick={() => setNote((prev) => ({ ...prev, bgColor: item.color }))}
        ></Box>
      ))}
    </Paper>
  );
};

export default ColorPalette;
