const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const isBabel = process.argv.splice(2)[0] !== "--ts-eslint";

const code = fs.readFileSync(path.resolve("./code.ts"), "utf-8");

if (isBabel) {
  const { parse } = require("@babel/parser");
  const { program } = parse(code, {
    sourceType: "module",
    errorRecovery: true,
    plugins: ["typescript", "estree"],
  });
  delete program.interpreter;
  const astStr = JSON.stringify(program);
  execSync(
    `echo '${astStr}' | jq 'walk(if type == "object" and has("loc") then del(.loc, .start, .end)  else . end)'`,
    { shell: true, stdio: "inherit" }
  );
} else {
  const { parse } = require("@typescript-eslint/typescript-estree");
  const result = parse(code);
  const astStr = JSON.stringify(result);
  execSync(`echo '${astStr}' | jq`, { shell: true, stdio: "inherit" });
}