const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Failed to write file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("File written successfully");
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});

server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
