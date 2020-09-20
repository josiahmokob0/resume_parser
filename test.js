const ResumeParser = require("./src");

ResumeParser.parseResumeFile("/mnt/media2/projects/documents/resume.pdf", "./")
  .then((file) => {
    console.log(file);
  })
  .catch((error) => {
    console.log("parseResume failed");
    console.error(error);
  });

