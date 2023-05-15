/*
@Author Shaswat Sharma
*/
const express = require('express')
const app = express()
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


/*
Function to find median of primes from input arr
returns an array,
    if the input is even, the two numbers in the middle of the set are returned
    if input is odd, the single median of the set is returned
*/
var median = function(arr){

    result = []

    if (arr.length == 0) {
        return; // 0.
      }
      arr.sort((a, b) => a - b); // 1.
      const midpoint = Math.floor(arr.length / 2); // 2.

      if (arr.length % 2 == 0){
        result.push(arr[midpoint-1],arr[midpoint])
        //console.log(result)
        return result
        
      }else
        result.push(arr[midpoint])
        return (result)
}


/*
Function for finding the Median Primes less than a given input n
Eratosthenes algorithm is utilized to find the set of prime numbers under N
This algorithm utilizes 3 independant loops and is in O(n) time complexity
*/
var MedianPrimes = function(n){

      var set = [], upper = Math.sqrt(n), result = [];

      // Creating an array of numbers from 2 - N
      for (var i = 0; i < n; i++) {
          set.push(true);
      }
      
      // Removing primes and subsequent multiples starting from 2 by flagging them
      for (var i = 2; i <= upper; i++) {
          if (set[i]) {
              for (var j = i * i; j < n; j += i) {
                  set[j] = false;
                }
            }
        }
  
      // Adding the primes that were not flagged to the result
      for (var i = 2; i < n; i++) {
          if(set[i]) {
              result.push(i);
            }
        }
      //console.log(result);
      return median(result);
}

/* 
Route to process post requets from Front End
Intended to parse JSON Data from the body of the request and return a json array of Median Primes 
*/
app.post("/api", (req,res,data) =>{
    //console.log(req.body.Number)
    var result = MedianPrimes(req.body.Number)
    //console.log(result)
    res.json({"result":result})
})

app.listen(5000, () => {console.log("server started")})
module.exports = app
;