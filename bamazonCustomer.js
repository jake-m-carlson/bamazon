// calls for both npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// connects to database
var connection = mysql.createConnection({
    host: "localhost",
      port: 3306,
      user: "root",
      password: "Modcoz16!",
      database: "bamazon"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    // test connection
    console.log("success!")
  });

  function start() {
      connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            // success!!!
            console.log(res[i].item_id + "||" + res[i].product_name + "||" + res[i].department_name + "||" + res[i].price + "||" + res[i].stock_quantity + "\n");
        }
        // prompt client with questions
        customerPrompts(res);
      })
  }

  // function to give client prompts
function customerPrompts(res) {
    inquirer.prompt([{
        type: "input", 
        name: "choice",
        message: "What would you like to purchase? [Exit with E]"
    }]).then(function(answer){
        var correct = false;
        for(var i = 0; i < res.length; i++){
            if(res[i].product_name==answer.choice){
                correct = true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: "How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stock_quantity - answer.quantity) > 0) {
                        connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "' WHERE product_name'" + product + "'", function(err, res2){
                            console.log("Product Bought!");
                            start();
                        })
                    } else {
                        console.log("Not a valid selection!");
                        customerPrompts(res);
                        // up until here works
                    }
                })
            }
        
        }
    
    })
}

//   function start() {
//     inquirer
//       .prompt({
//         name: "postOrBid",
//         type: "list",
//         message: "Would you like to [POST] an auction or [BID] on an auction?",
//         choices: ["POST", "BID", "EXIT"]
//       })
//       .then(function(answer) {
//         // based on their answer, either call the bid or the post functions
//         if (answer.postOrBid === "POST") {
//           postAuction();
//         }
//         else if(answer.postOrBid === "BID") {
//           bidAuction();
//         } else{
//           connection.end();
//         }
//       });
//   }
  
  
  