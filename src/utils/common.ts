const fs = require("fs/promises");
const path = require("path");

const getPath = (target: string) => {
  return path.join(process.cwd(), `/src/posts/${target}`);
};

const readFilesForThisPage = async (target: string) => {
  const files = await fs.readdir(target);
  return files;
};

const readFile = async (target: string) => {
  const file = await fs.readFile(target, "utf8");
  return file;
};

export { readFilesForThisPage, readFile, getPath };
