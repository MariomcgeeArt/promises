/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *  #answer:
 *      output will be:
 *                  step1
 *                  step3
 *                  step2
 *                  "Async Action completed via callback"
 *       This is due to the order of operations if the async funtcion is set with the 
 *       setTimeout function when snooze is invodeked the set timout function puts the function in the event loop 
 *       this event loop has a time out of 2 seconds or jusrt about two seconds delay. In the oprocess of the event loop 
 *       step 1 is executed then it sees teh set time function moves on to step three ...Step 2 has been added to the vet loop and executes after its set call back time in setTime out
 * 
 *                  
 *    
 * 
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *      step1
 *      step3
 *      step2
 * "Async Action completed via callback"
 *      
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    predicgtion: 
 * The same order will happen bewcause of the event loop it hadds the fucntion on to the end of the executed operations list it will just take less time or (o)1
1 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

