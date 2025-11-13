// src/components/forms/ASRPanel.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  LinearProgress,
  Stack,
  Input,
  Typography,
} from "@mui/material";
import { callASR } from "../../api";
import { useLang } from "../../i18n";

export default function ASRPanel() {
  const { t } = useLang();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transcription, setTranscription] = useState(null);

  const onFile = (e) => {
    setTranscription(null);
    setFile(e.target.files?.[0] || null);
  };

  const submit = async () => {
    if (!file) {
      alert(t("choose_file"));
      return;
    }
    try {
      setLoading(true);
      const data = await callASR(file);
      setTranscription(data.transcription_wolof || JSON.stringify(data));
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.detail || err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Stack spacing={2}>
        <label>
          <Input
            type="file"
            onChange={onFile}
            inputProps={{ accept: "audio/*" }}
          />
        </label>
        <Typography variant="caption" color="text.secondary">
          {t("choose_file")}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={submit}
            disabled={loading || !file}
          >
            {t("send")}
          </Button>
        </Box>

        {loading && <LinearProgress />}

        {transcription ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">{t("result")}</Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              {transcription}
            </Typography>
          </Box>
        ) : (
          !loading && (
            <Typography variant="body2" color="text.secondary">
              {t("no_result")}
            </Typography>
          )
        )}
      </Stack>
    </Box>
  );
}
