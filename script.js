const request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload=()=>{
const a = request.response;
const result = JSON.parse(a);

//a.Countries in Asia region
console.log("a.Countries in Asia region");
result.filter((item)=>{
   if(item.region==="Asia" || item.continents[0]=== "Asia"){
    console.log(item.name.common)
   }
})


//b.Countries with population of less than 2 lakh
console.log(`---
b.Countries with population of less than 2 lakh`);
result.filter((item)=>{
    if(item.population<200000){
     console.log(item.name.common)
    }
 });


//c.Name,Capital and Flag
console.log(`---
c.NAME,CAPITAL AND FLAG`); 
result.forEach((item)=>{
     console.log(`~
     Name :${item.name.common}
     Capital:${item.capital}
     Flag:${item.flags.svg}
~`)
 });


 //d.Total Population of countries
console.log(`---
d.Total Population of countries`); 
 const red = result.reduce((acc,value)=>{
    return acc+value.population},0)
 console.log(red);


 //e.print country with USD as currency
 console.log(`---
 d.print country with USD as currency`);
 result.filter((item)=>{
    if(item.currencies!== undefined){
        if(item.currencies.USD){
            console.log(item.name.common)
        }
     
    }
 })
};



