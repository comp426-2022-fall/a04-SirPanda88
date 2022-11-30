import minimist from "minimist"
import express from "express"
import { roll } from "./lib/roll.js"

const args = minimist(process.argv.slice(2), {
    default: {
        port: 5000
    },
});

const app = express();

app.get('/app/', function (req, res) {
   res.send('200 OK');
})





const server = app.listen(args.port, function () {
  console.log("Server listening on port ${args.port}");
});
