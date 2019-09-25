const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Bob");
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50);
  //   setInterval(() => {
  //     conn.write("Move: down");
  //   }, 100);
  //   setInterval(() => {
  //     conn.write("Move: left");
  //   }, 150);
  //   setInterval(() => {
  //     conn.write("Move: right");
  //   }, 200);
  // });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    
  });
  
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };