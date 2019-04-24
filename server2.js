const express = require('express');
var app = express();
const port = 3000;
app.get('/',(req, res)=>{
	res.send({
		name: 'Bibhor',
		email:'bibhorraj8@gmail.com',
		task:['eat','code','sleep']
	});
	app.get{'/about', (req, res)=>
		{
			
		}
});
app.listen(port, () =>{
	console.log(`app listening on port number:-${port}...!!!`);
});
