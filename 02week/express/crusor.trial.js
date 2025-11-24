// Simple utility to remove extra spaces from a text file.
// - Defaults to a file named "space,txt" in the current folder
// - Falls back to "space.txt" if the comma was a mistake
// - Collapses internal runs of spaces/tabs to a single space per line
// - Trims each line's edges
// - Reduces multiple blank lines to a single blank line
const fs = require("fs");

// Decide which file to process:
// 1) use command-line arg if provided, otherwise "space,txt"
// 2) if the name has a comma, also try a dot version (e.g., space.txt)
function pickFile() {
  const arg = process.argv[2] || "space,txt";
  const candidates = [arg];
  if (arg.includes(",")) candidates.push(arg.replace(",", "."));
  return candidates.find((p) => fs.existsSync(p));
}

// Preserve the file's existing newline style (CRLF vs LF)
function eolOf(text) {
  return text.includes("\r\n") ? "\r\n" : "\n";
}

// Core cleaning logic for the file contents
function clean(text) {
  const eol = eolOf(text);
  const lines = text.split(/\r?\n/).map((l) => l.replace(/[\t ]+/g, " ").trim());
  const out = [];
  let prevEmpty = false;
  for (const l of lines) {
    const isEmpty = l.length === 0;
    if (isEmpty && prevEmpty) continue;
    out.push(isEmpty ? "" : l);
    prevEmpty = isEmpty;
  }
  return out.join(eol);
}

// Orchestrates: pick file, read it, clean it, then write back
function main() {
  const file = pickFile();
  if (!file) {
    console.error("File not found. Try 'space,txt' or 'space.txt' or pass a path.");
    process.exit(1);
  }
  const original = fs.readFileSync(file, "utf8");
  const eol = eolOf(original);
  const result = clean(original);
  if (result === original) {
    console.log("Already clean.");
    return;
  }
  fs.writeFileSync(file, result.endsWith("\n") || result.endsWith("\r\n") ? result : result + eol, "utf8");
  console.log("Cleaned extra spaces and blank lines.");
}

// Run only when executed directly: node crusor.trial.js [optional-file-path]
if (require.main === module) main();


