import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quae
        debitis quia! Quidem impedit iste consequatur, natus ratione culpa,
        sequi a mollitia consequuntur deserunt vero ullam vitae temporibus.
        Commodi, necessitatibus?
      </Typography> */}
      <NothingSelectedView />
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.8 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      {/* <NoteView /> */}
    </JournalLayout>
  );
};
