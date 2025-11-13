import React, { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    appTitle: "Testeur de modèles IA",
    description: "Tester rapidement vos modèles Wolof / FR",
    asr: "Transcription (ASR)",
    asr_desc: "Téléverse un fichier audio → transcription wolof brute",
    correct: "Correcteur Wolof",
    correct_desc: "Corrige un texte en wolof",
    wo_fr: "Wolof → Français",
    fr_wo: "Français → Wolof",
    rag: "RAG (question → réponse)",
    rag_desc:
      "Pose une question FR → réponse FR issue de la base de connaissance",
    tts: "TTS (Wolof → audio)",
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
    description: "Quickly test your Wolof / FR models",
    asr: "Transcription (ASR)",
    asr_desc: "Upload an audio file → raw wolof transcription",
    correct: "Wolof Corrector",
    correct_desc: "Correct a Wolof text",
    wo_fr: "Wolof → French",
    fr_wo: "French → Wolof",
    rag: "RAG (question → answer)",
    rag_desc: "Ask a question in FR → get an FR answer from KB",
    tts: "TTS (Wolof → audio)",
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
