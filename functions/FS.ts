import * as crypto from "crypto";
import * as FileSystem from "fs";

export class FS {
  directory: string;
  private filenameMapping: Map<string, string> = new Map();
  constructor(directory: string) {
    this.directory = directory;
    // create the directory if it does not exist
    if (!FileSystem.existsSync(directory)) {
      try {
        FileSystem.mkdirSync(directory);
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * Store the file in the directory
   * @param { string} filename string, the name of the file
   * @param { string } content string, the content of the file
   */

  public storeFile(filename: string, content: string): void {
    const hash = crypto.createHash("md5").update(content).digest("hex");

    try {
      FileSystem.writeFileSync(this.directory + "/" + hash, content);
      this.filenameMapping.set(filename, hash);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Get the file from the directory
   * @param { string } filename string, the name of the file
   * @returns { string | null } the content of the file
   */
  public get(filename: string): string | null {
    const hash = this.filenameMapping.get(filename);

    if (!hash) {
      return null;
    }

    let content = "";

    try {
      content = FileSystem.readFileSync(this.directory + "/" + hash, "utf8");
    } catch (error) {
      console.log(error);
    }

    return content;
  }
}
