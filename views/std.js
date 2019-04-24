console.log(process.argv);
const std=require('yargs');
const argv=std.argv;
const fs =require('fs');
const _ =require('lodash');
const records=require('./record.js');
var command=process.argv[2];
console.log('process:',process.argv);
console.log("std",argv);
if (command==='add')
{
  var record=records.addRecord(argv.title,argv.body);
  if (record){
    console.log('note added successfully');
    console.log('the title is -'+record.title);
    console.log('the body is -'+record.title);
  }
  else {
    console.log('cannot add the record');
  }
}
else if (command==='list')
{
  var allRecords=records.getAll();
  console.log(`printing ${allRecords.length}records`);
  allRecords.forEach((record)=>{
        console.log('note found');
        console.log('the title is - '+record.title);
        console.log('the body is - '+record.body);
        console.log('====== end of the notes ======');
  });
}
else if (command==='read')
{
  var record=records.readRecord(argv.title);
  if(record){
    console.log('=====your title is found=====');
    console.log('the title is ='+record.title);
    console.log('the body is ='+record.body);
  }
  else {
    console.log('record not found');
  }
}
else if (command=='remove')
{
  // record.removeRecord(argv.title);
  var record = records.removeRecord(argv.title);
  var msg = record ? 'Record Removed successfully' : 'record cannot be deleted';
  console.log("removing Record");
  console.log(msg);
}
else
{
  console.log('command not recognised');
}
