import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          {/* Email Input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          {/* Email Input End */}

          {/* Password Input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Contraseña" type="password" fullWidth />
          </Grid>
          {/* Password Input End */}

          {/* Login Button */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            {/* Login Button End */}

            {/* Login with Google */}
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            {/* Login with Google End */}
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
