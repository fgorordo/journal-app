import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          {/* Fullname Input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>
          {/* Fullname Input End */}

          {/* Email Input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electronico"
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

          {/* RePassword Input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Repetir contraseña" type="password" fullWidth />
          </Grid>
          {/* RePassword Input End */}

          {/* Register Button */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Registrarse
              </Button>
            </Grid>
            {/* Register Button End */}
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
