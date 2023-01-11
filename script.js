var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload = function() {

var result = JSON.parse(req.response);
//console.log(result);

let l = result.length;
for(let i=0;i<l;i++)
{
console.log("Country",result[i].name,":\t","Region", result[i].region," :\t","Sub-Region",result[i].subregion,":\t ","Population",result[i].population);
console.log(result[i].flags.png)
}


};