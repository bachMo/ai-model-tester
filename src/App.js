import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Header from "./components/Header";
import ModelTabs from "./components/ModelTabs";
import { useLang } from "./i18n";

export default function App() {
  const { t } = useLang();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Header />
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(16,24,40,0.08)",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            {t("appTitle")}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            {t("description")}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <ModelTabs />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
