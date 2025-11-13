import React, { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    appTitle: "Testeur de modèles IA",
    description:
      "Transcription, traduction, et génération audio et de réponse pour Wolof ↔ Français",
    asr: "Transcription (Audio → Wolof)",
    asr_desc:
      "Téléverse un fichier audio en wolof et obtiens le texte transcrit en wolof.",
    correct: "Correcteur Wolof",
    correct_desc:
      "Corrige l'orthographe et la formulation d'un texte en wolof.",
    wo_fr: "Traduction Wolof → Français",
    wo_fr_desc: "Traduit un texte rédigé en wolof vers le français.",
    fr_wo: "Traduction Français → Wolof",
    fr_wo_desc: "Traduit un texte rédigé en français vers le wolof.",
    rag: "RAG (Question → Réponse FR)",
    rag_desc:
      "Pose une question en français ; le modèle RAG interroge la base de connaissance et génère une réponse en français (LLM).",
    tts: "TTS (Wolof → Audio)",
    tts_desc:
      "Génère un fichier audio (wav) en wolof à partir d'un texte en wolof.",
    choose_file: "Choisir un fichier audio",
    send: "Envoyer",
    placeholder_text: "Écris ton texte ici...",
    loading: "Chargement...",
    result: "Résultat",
    language: "Langue",
    play_audio: "Écouter",
    download_audio: "Télécharger",
    no_result: "Aucun résultat",
  },
  en: {
    appTitle: "AI Model Tester",
    description:
      "Transcription, translation, audio and answer generation for Wolof ↔ French",
    asr: "Transcription (Audio → Wolof)",
    asr_desc:
      "Upload an audio file in Wolof and get the transcribed Wolof text.",
    correct: "Wolof Corrector",
    correct_desc: "Fix spelling/grammar and improve wording of a Wolof text.",
    wo_fr: "Translation Wolof → French",
    wo_fr_desc: "Translate a text written in Wolof into French.",
    fr_wo: "Translation French → Wolof",
    fr_wo_desc: "Translate a text written in French into Wolof.",
    rag: "RAG (Question → Answer FR)",
    rag_desc:
      "Ask a question in French; the RAG system consults the knowledge base and returns an answer in French using an LLM.",
    tts: "TTS (Wolof → Audio)",
    tts_desc: "Generate a wav audio file in Wolof from a Wolof text input.",
    choose_file: "Choose audio file",
    send: "Send",
    placeholder_text: "Type your text here...",
    loading: "Loading...",
    result: "Result",
    language: "Language",
    play_audio: "Play",
    download_audio: "Download",
    no_result: "No result",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = (key) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
