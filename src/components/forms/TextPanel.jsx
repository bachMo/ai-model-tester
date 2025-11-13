// src/components/forms/TextPanel.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { callTextModel } from "../../api";
import { useLang } from "../../i18n";

export default function TextPanel({ endpoint }) {
  const { t } = useLang();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const submit = async () => {
    if (!text.trim()) {
      alert(t("placeholder_text"));
      return;
    }
    try {
      setLoading(true);
      const data = await callTextModel(endpoint, text);
      const val =
        data.corrected_wolof ||
        data.translation_fr ||
        data.translation_wolof ||
        data.rag_answer_fr ||
        JSON.stringify(data);
      setResult(val);
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
        <TextField
          multiline
          minRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("placeholder_text")}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={submit} disabled={loading}>
            {t("send")}
          </Button>
        </Box>

        {loading && <LinearProgress />}

        {result ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">{t("result")}</Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              {result}
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
