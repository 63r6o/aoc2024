import fs from "fs";

const usage = "bun day[xx] path/to/input/file";

export default function readFrom(args: string[]) {
  if (args.length < 3) {
    console.error("Missing input file!");
    console.log(`Usage: ${usage}`);

    return null;
  }

  if (args.length > 3) {
    console.error("Too many arguments!");
    console.log(`Usage: ${usage}`);

    return null;
  }

  if (!fs.existsSync(args[2])) {
    console.error("The input file doesn't exist!");

    return null;
  }

  return fs.readFileSync(args[2], "utf8").trim();
}
