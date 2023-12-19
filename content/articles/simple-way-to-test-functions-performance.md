::para 
December 19, 2023
::

::the-title
Simple way to test functions performance
::

::para 
Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n. We can write the function as follows:
::

::the-header
Method one
::

::code-block
```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```
::

::para 
**In this Method** uses a loop to iteratively calculate the sum of all numbers from 1 to the given number n. It initialize variable total as 0 and then adds each number from 1 to n to the total. Finally, it returns the total sum.
::

:divider

::the-header
Method two
::

::code-block
```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}
```
::
::para 
On the other hand,this method uses a mathmenatical formula to directly calculate the sum of without the need for a loop. By using the formula `n*(n+1)/1`, it returns the sum of all numbers from 1 to the given number n.
::

:divider

::para 
<p class="text-teal-500 font-bold">
both methods return the same result. But method two is more efficient than method one.
</p>
::

:divider

::the-header
Now lets test our functions in term of time execution. Using *```performance.now()```*
::

::para 
The *```performanc.now()```* method in JavaScript returns the current timestamp with high precision, useful for measuring time execution of functions.
::
 
::para 
**First we calculate the execution time for the first method:**
::
::code-block
```javascript
function addUpTo() {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```
::

::para 
- This code calculates the execution time of the function in seconds.
- The*`addUpTo()`* function takes a positive integer as an argument and returns the sum of all numbers from 1 to the given number n.
::

::para 
To measure the execution time, the code uses the *`performance.now()`* method, which return the current timestamp with high precision. The current timestamp is recorded before and after calling the *`addUpTo()`* function, and the difference between the two timestamps is calculated.
::

::para 
The execution time is then displayed in seconds using the *`console.log()`* method.
The difference between the two timestamps, divided by 1000, is the elapsed time in seconds.
::

::para 
**Here are the results after running the code:**
::
::code-block
```bash
Time Elapsed: 1.4437352840006352 seconds.
Time Elapsed: 1.4072604039981962 seconds.
Time Elapsed: 1.4040854329988361 seconds.

# As you can see with each execution the time is slightly different.
```
::

:divider 

::para 
**Now lets use the second method and see what the execution time is:**
::
::code-block
```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```
::

::para 
**Now when we check the time of execution, we get the following results:**
::
::code-block
```bash
Time Elapsed: 0.000039700001478195194 seconds.
Time Elapsed: 0.00003974800556898117 seconds.
Time Elapsed: 0.00003997699916362763 seconds.

# Now you can see the time difference between the first method and the second method.
```
::

::para 
**As you can see, the second method is more efficient.**
::

::para 
Now you can also that the seconde method is efficient, but there is a problem with the way we tested our functions, here is the explaination:
**The problem with use `performance.now()` for measuring execution time in testing is that it provides the time elapsed since the page has loaded. This means that it includes any delays caused by loading external resources or redering elements on the page. As a result, the measured execution time may be inaccurate and not solely reflective of the actual performance of the code being tested.
::

:divider

::the-header
<p class="text-teal-500 font-bold">
To fix the problem we gonna use the big o, stay tuned.
</p>
::

