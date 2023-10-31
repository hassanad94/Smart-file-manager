# FS Class

The FS class is a utility for handling file storage in a specific directory. It uses MD5 hashing for file names and has methods for storing and retrieving files.

## Methods

### `storeFile(filename: string, content: string): void`

This method stores a file in the directory. It takes the filename and content as parameters. The content is hashed using MD5 and the hashed value is used as the filename when storing the file. If the file cannot be written, an error is logged to the console.

### `get(filename: string): string | null`

This method retrieves a file from the directory. It takes the filename as a parameter, retrieves the hashed filename from a mapping, and returns the content of the file. If the file cannot be read, an error is logged to the console and null is returned.

## Running the Application

To run the application, you need to have Node.js and npm installed. Once you have those, you can install the dependencies and start the application:

```bash
# Install dependencies
npm install

# Start the application
npm start
```

## Usage of FS Class

```typescript
const fs = new FS();
fs.storeFile("filename1", "a very long string1");
console.log(fs.get("filename1")); 
