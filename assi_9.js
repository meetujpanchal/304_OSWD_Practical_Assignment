const mysql = require('nodejs-mysql').default;

const config = {
    host : "localhost",
    user : "root",
    password : "root",
    database : "employee_db"
}

const db = mysql.getInstance(config);

db.connect()
  .then(function(){
    console.log("Connected!!");

    var sql = "INSERT INTO employee (username, password, firstname, lastname, email) VALUES ('meetu', 'mjp', 'Panchal', 'Meet', 'meet46884@gmail.com')";
    
    return db.exec(sql);
  
}).then(function(res){
    console.log(res);
    return db.exec("SELECT * FROM employee");
}).then(function(result){
    for( var i in result){
        console.log("Username: ", result[i].username + " " + "Password: " + result[i].password);
        process.exit(0);
    }
}).catch(function(err){
    console.log("ERROR: ", err);
    process.exit(0);
});