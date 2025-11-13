import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useLang } from "../i18n";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {t("appTitle")}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {t("language")}
          </Typography>
          <Select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            size="small"
            sx={{ minWidth: 88 }}
          >
            <MenuItem value="fr">FR</MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
