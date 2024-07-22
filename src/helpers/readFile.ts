/**
 * readFile: Recieves a file and returns a parsed string result.
 * @param file - File from input
 * @param callback - Return function after file read
 */
const readFile = (file: File, callback: (csvData: string) => void) => {
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const csvData = e?.target?.result;
      if (typeof csvData === "string") {
        console.log(csvData);
        return callback(csvData);
      }
    };
  
    reader.readAsText(file);
  }

  export default readFile;