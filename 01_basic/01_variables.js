const accountId = 124
let accountEmail= "manojyad436@gmail.com"
var accountPassword = "1245"
accountCity="Jaipur"
let accountState;
//accountId = 2 not allowed

accountEmail =  "man@gmail.com"
accountPassword = "2134"
accountCity = "Bengaluru";

console.log(accountId);
/* 
prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);