import { chunkText } from "../rag/chunker.mjs";

const text = "";

const chunks = chunkText(text, 800, 150);
console.log("Chunks:", chunks);
