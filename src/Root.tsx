import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import NotesProvider from "./contexts/NotesContext";

const Root = () => {
  return (
    <NotesProvider>
      <Toaster />
      <Navbar />
    </NotesProvider>
  );
};

export default Root;
