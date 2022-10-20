var http = require('http');
var mysql = require('mysql');


function ADD(dbase, obj) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "books_project"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "";
        switch (dbase) {
            case "books":
                sql = `INSERT INTO ${dbase} VALUES (NULL, '${obj.title}', '${obj.author}', '${obj.desc}', '${obj.isbn}', ${obj.price}, ${obj.seller_id}, '${obj.file_src}', ${obj.is_used}, ${obj.is_bestseller}, ${obj.disc_proc}, true);`
                break;
            case "users":
                sql = `INSERT INTO ${dbase} VALUES (NULL, '${obj.login}', '${obj.password}', '${obj.since_when}', 0, true);`
                break;
            case "sellers":
                sql = `INSERT INTO ${dbase} VALUES (NULL, '${obj.name}', ${obj.location}', ${obj.upvotes}, ${obj.downvotes}, ${obj.price}, ${obj.order_count}, true');`
                break;
            case "cart":
                sql = `INSERT INTO ${dbase} VALUES (NULL, ${obj.user_id}, ${obj.seller_id}, true);`
                break;
            default:
                break;
        }
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Affected: " + result.affectedRows);
        })
        return {operation: "ADD", message : "Successfully added"};
    });
    return {};
}
function SELECT(dbase) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "books_project"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM ${dbase}`;
        con.query(sql, function(err, result) {
            if (err) throw err;
            return {operation: "SELECT" ,data : result};
        })
    });
    return {};
}
function UPDATE(dbase, id, obj_dict) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "books_project"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `UPDATE ${dbase} SET`;
        for (let [key, value] of obj_dict) {
            if (isNaN(value) && ! typeof value === 'boolean') {
                sql += ` ${key} = '${value}',`;
            } else {
                sql += ` ${key} = ${value},`;
            }
        }
        sql = sql.replace(sql[sql.length - 1], "");
        sql += ` WHERE ID=${id};`;
    });
    return {};
}

http.createServer((req, res) => {
    res.writeHead(200, {'Conent-Type' : 'text/html', 'Access-Control-Allow-Origin': '*'});
	let url = new URL("http://localhost:8080" + req.url);
	let key = url.searchParams.get("operation");
    let database_type = url.searchParams.get("dbase");
    switch (key) {
        case "ADD":
            let obj = JSON.parse(url.searchParams.get("obj"));
             res.end(JSON.stringify(ADD(database_type, obj)));
             break;
        case "SELECT":
            res.end(JSON.stringify(SELECT(database_type)));
            break;
        case "UPDATE":
            let obj2 = JSON.parse(url.searchParams.get("obj"));
            let idx = Number(url.searchParams.get("id"));
            res.end(JSON.stringify(UPDATE(database_type,idx,obj2)));
            break;
        default:
            let response = {message: "Invalid formula"};
            res.end(JSON.stringify(response));
            break;
    }
}).listen(8080);