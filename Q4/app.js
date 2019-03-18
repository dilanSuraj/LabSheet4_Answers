const fs = require('fs');

const _dir_name = "D:\\SLIIT Practices\\AF_LAB\\LabSheet4_Answers\\Resources\\";

const file_name = _dir_name + "test.txt";
const out_file_name = _dir_name + "test-copy.txt";

const readStream = fs.createReadStream(file_name);
const writeStream = fs.createWriteStream(out_file_name);

readStream.pipe(writeStream);

readStream.on('data',data => {
    console.log(data.toString());
})