import { Typography } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
