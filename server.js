const express = require('express');
var app = express();
const port = 3000;
app.get('/',(req, res)=>{
	res.send('hello everyone..!!! using express ');
});
app.listen(port, () =>{
	console.log(`app listening on port number:-${port}...!!!`);
});
