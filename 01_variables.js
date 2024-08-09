const accountId = 11452 /*const means locked ie cant be changed */
let accountEmail = "lollmao@gmail.com" /* */
var accountPassword = "12345"
accountCity = "Jabalpur"

// accountId = 2 cannot be dont will give error

accountEmail = "rofl@gmail.com"
accountPassword = "987"
accountCity = "Nagpur"
let accountState; //undefined

/*var  and let are same but we dont prefer var because of issue in block and functional scope{} */

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
