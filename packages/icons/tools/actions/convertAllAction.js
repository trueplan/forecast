import fs from "fs";
import path from "path";
import { REACT_PATH } from "../constants.js";
import { convertNewAction } from "./convertNewAction.js";
import { listIconsAction } from "./listIconsAction.js";

function clearBuiltFiles() {
  fs.readdir(REACT_PATH, (readErr, files) => {
    if (readErr) throw readErr;

    for (const fileName of files.filter((fileName) =>
      fileName.includes(".tsx")
    )) {
      fs.unlink(path.join(REACT_PATH, fileName), (unlinkErr) => {
        if (unlinkErr) {
          throw unlinkErr;
        }
      });
    }
  });
}

async function convertAllAction() {
  clearBuiltFiles();
  await convertNewAction();
  // FIXME: avoid needing a setTimeout here if possible
  setTimeout(listIconsAction, 3000);
}

export { convertAllAction };
