import Cluster  from 'cluster';
import Os from 'os';
import express from 'express';

const numCPUs = Os.cpus().length;

console.log(' Number of cpu core', numCPUs);
if (Cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    Cluster.fork();
  }

  Cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    Cluster.fork();
  });
} else {
  const app = express();

  // Configure your Express app
  // ...

  const server = app.listen(3000, () => {
    console.log(`Worker process ${process.pid} is listening on port 3000`);
  });

};