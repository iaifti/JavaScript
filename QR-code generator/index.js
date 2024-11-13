import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {message: "Type in the URL: ", 
     name: "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });