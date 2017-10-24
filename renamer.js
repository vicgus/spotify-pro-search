var fs = require("fs");


fs.readdir("./assets/img", function(item){
    console.log(item);
});
//fs.rename(old,new,callback)