// src/components/ModelTabs.jsx
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Divider } from "@mui/material";
import ASRPanel from "./forms/ASRPanel";
import TextPanel from "./forms/TextPanel";
import TTSPanel from "./forms/TTSPanel";
import { useLang } from "../i18n";

export default function ModelTabs() {
  const [tab, setTab] = useState(0);
  const { t } = useLang();

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label={t("asr")} />
        {/*<Tab label={t("correct")} />*/}
        <Tab label={t("wo_fr")} />
        <Tab label={t("fr_wo")} />
        {/*<Tab label={t("rag")} />*/}
        <Tab label={t("tts")} />
      </Tabs>

      <Divider sx={{ my: 2 }} />

      <Box>
        {tab === 0 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("asr_desc")}
            </Typography>
            <ASRPanel />
          </>
        )}
        {/*tab === 1 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("correct_desc")}
            </Typography>
            <TextPanel endpoint="/model/correct" />
          </>
        )*/}
        {tab === 1 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("wo_fr")}
            </Typography>
            <TextPanel endpoint="/model/wo-fr" />
          </>
        )}
        {tab === 2 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("fr_wo")}
            </Typography>
            <TextPanel endpoint="/model/fr-wo" />
          </>
        )}
        {/*tab === 3 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("rag_desc")}
            </Typography>
            <TextPanel endpoint="/model/rag" />
          </>
        )*/}
        {tab === 3 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("tts")}
            </Typography>
            <TTSPanel />
          </>
        )}
      </Box>
    </Box>
  );
}
