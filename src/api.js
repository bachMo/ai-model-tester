// src/api.js
import axios from "axios";

const BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: BASE,
  timeout: 120000,
  headers: {
    // aucun header global Content-Type pour permettre à axios de gérer FormData
  },
});

export async function callASR(audioFile) {
  const fd = new FormData();
  fd.append("audio", audioFile);
  const res = await axiosInstance.post("/model/asr", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function callTextModel(endpoint, text) {
  const fd = new FormData();
  fd.append("text", text);
  const res = await axiosInstance.post(endpoint, fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function callTTS(text) {
  const fd = new FormData();
  fd.append("text", text);
  const res = await axiosInstance.post("/model/tts", fd, {
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "blob",
  });
  return res.data; // blob
}
