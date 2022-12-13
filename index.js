function createEmployeeRecord (employee) {
    let employeeRecords= {
     firstName: employee[0],
     familyName: employee[1],
     title: employee[2],
     payPerHour: employee[3],
     timeInEvents: [],
     timeOutEvents: [],
   };
   return employeeRecords;
 };
 const createEmployeeRecords = function (employee){
 return employee.map(elem => {
   return  createEmployeeRecord(elem);
 })
 }
   const createTimeInEvent = function(date){
   let yourDate = date.split(" ");
   let inTime = {
     type: "TimeIn",
     hour: parseInt(yourDate[1]),
     date: yourDate[0],
   };
 this.timeInEvents = [...this.timeInEvents, inTime];
 return this;
 }
 const createTimeOutEvent = function(date){
   let yourDate = date.split(" ");
   let outTime = {
     type: "TimeOut",
     hour: parseInt(yourDate[1]),
     date: yourDate[0],
   };
   this.timeOutEvents = [...this.timeOutEvents, outTime];
   return this;
 }
 const hoursWorkedOnDate = function(date){
 for (let i = 0; i < this.timeInEvents.length; i++) {
   if (date === this.timeInEvents[i].date) {
     let arrivalTime = this.timeInEvents[i].hour;
     let departureTime = this.timeOutEvents[i].hour;
     let timeTaken = departureTime - arrivalTime;
     return timeTaken / 100;
   }
 }
 }
   const wagesEarnedOnDate = function(date){
   let timeTaken = hoursWorkedOnDate.call(this, date);
   return timeTaken * this.payPerHour;
 }
 const findEmployeeByFirstName = function(srcArray,firstName){
 let targetArr = srcArray.find((elem)=>{
 return elem.firstName === firstName;
 })
 return targetArr;
 } 
 const allWagesFor = function () {
   const eligibleDates = this.timeInEvents.map(function (e) {
     return e.date;
   });
 
   const payable = eligibleDates.reduce(
     function (memo, d) {
       return memo + wagesEarnedOnDate.call(this, d);
     }.bind(this),
     0
   ); 
   return payable;
 }; 
 const calculatePayroll = function(records){
   let employeeTotal = records.map((employee) => {
     return allWagesFor.call(employee)
 });

 let payroll = employeeTotal.reduce((total, currentValue) => {
   return total + currentValue;
 }, 0);
 return payroll;
 };