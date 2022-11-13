function extractFile(string) {
    let name = string.split("\\").pop();
    let extension = name.split(".").pop();
    name = name.split(".");
    name.pop();
    name = name.join(".");

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
/*
File name: Template
File extension: pptx
*/

/*
Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. 
(Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
*/