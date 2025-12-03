import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "900px",
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          background: `linear-gradient(135deg,
            ${alpha(theme.palette.secondary.light, 0.22)},
            ${theme.palette.background.paper}
          )`,
          boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb={1.5}
          color="primary.main"
        >
          Contact
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}
        >
          Feel free to reach out if you want to collaborate or talk about new
          opportunities. I try to respond as quickly as I can.
        </Typography>

        <Stack
          spacing={2}
          mt={4}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              borderRadius: 2,
              px: 4,
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
              fontSize: 17
              
            }}
            href="mailto:yennesmuhanad@gmail.com"
          >
            yennesmuhanad@gmail.com
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderRadius: 2,
              px: 4,
              textTransform: "none",
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                borderColor: theme.palette.secondary.dark,
              },
              fontSize: 17
            }}
            href="https://github.com/myenne1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/myenne1
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderRadius: 2,
              px: 4,
              textTransform: "none",
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                borderColor: theme.palette.secondary.dark,
              },
              fontSize: 17
            }}
            href="https://www.linkedin.com/in/muhanad-yennes-098792307/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/Muhanad Yennes
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
