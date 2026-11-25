import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const line = "So... do you come here often? My logs say you do. Every day. Same box. I checked.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = `${outputDir}/entry.txt`;
  writeFileSync(outputPath, `${line}\n`, "utf8");
  const length = readFileSync(outputPath, "utf8").trim().length;
  if (length === 0 || length > 200) {
    throw new Error(`Competition gate failed: entry.txt must contain 1–200 trimmed characters; got ${length}.`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
