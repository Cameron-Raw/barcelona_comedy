const http = require('http');
const port = 3000;

var runner = require("child_process");
var phpScriptPath = "./test.php";
var argsString = "";

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(builds/comedians.html)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)

  runner.exec("php " + "test.php", function(err, phpResponse, stderr) {
    console.log("Runner function called on " + phpScriptPath);

    console.log( phpResponse );
  });
})
