import { FS } from "./FS";

const fs = new FS("./data");

fs.storeFile("filename1", "a very long string1");
fs.storeFile("filename2", "a very long string1");
fs.storeFile("filename3", "a very long string3");

console.log({
  result1: fs.get("filename1"),
  result2: fs.get("filename2"),
  result3: fs.get("filename3"),
});
