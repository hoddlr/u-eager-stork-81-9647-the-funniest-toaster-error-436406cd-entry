import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "ERROR 09: Bread jammed. I have named it. We are friends now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
