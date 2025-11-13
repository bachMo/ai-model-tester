// src/components/forms/TTSPanel.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { callTTS } from "../../api";
import { useLang } from "../../i18n";

export default function TTSPanel() {
  const { t } = useLang();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const submit = async () => {
    if (!text.trim()) {
      alert(t("placeholder_text"));
      return;
    }
    try {
      setLoading(true);
      const blob = await callTTS(text);
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.detail || err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!audioUrl) return;
    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = "tts.wav";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Stack spacing={2}>
        <TextField
          multiline
          minRows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("placeholder_text")}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={submit} disabled={loading}>
            {t("send")}
          </Button>
          <Button variant="outlined" onClick={download} disabled={!audioUrl}>
            {t("download_audio")}
          </Button>
        </Box>

        {loading && <LinearProgress />}

        {audioUrl ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">{t("play_audio")}</Typography>
            <audio controls src={audioUrl} />
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
