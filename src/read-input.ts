import fs from "fs";

const usage = "bun day[xx] path/to/input/file";

export default function readFrom(args: string[]) {
  try {
    return fs.readFileSync(args[2], "utf8").trim();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.log(`Usage: ${usage}`);

    throw new Error(`Couldn't load the input file.`);
  }
}
