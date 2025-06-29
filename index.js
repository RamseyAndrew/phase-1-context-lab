/* Your Code Here */

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  })
  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date)
  const timeOut = this.timeOutEvents.find(event => event.date === date)
  
  if (timeIn && timeOut) {
    return (timeOut.hour - timeIn.hour) / 100
  }
  return 0
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date)
  return hours * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, employee) => {
    return total + allWagesFor.call(employee)
  }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}   