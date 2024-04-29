"use strict";

// Print all entries, across all of the sources, in chronological order.

//Divide and Conquer approach, merge left to right arrays picking the oldest one first
function mergeAndSort(leftSource, rightSource) {
    let leftValue = leftSource?.last || leftSource;
    let rightValue = rightSource?.last;
    let mergedLog = [];

    while (leftValue || rightValue){
      if ((!rightValue) || (leftValue && (leftValue.date > rightValue.date))) {
        leftValue && mergedLog.push(leftValue);
        leftValue = leftSource.pop();
      }
      else if(rightValue){
        rightValue && mergedLog.push(rightValue);
        rightValue = rightSource.pop();
      }
    }

    return mergedLog;
}
 
function logger(logSources, printer){ 
    while (logSources.length > 1) {  
      logSources[0] = mergeAndSort(logSources.shift(), logSources[0])
    }
 
    logSources[0].forEach(log => log && log.date && printer.print(log))
}

module.exports = logger;