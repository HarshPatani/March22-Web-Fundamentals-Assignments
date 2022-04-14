// ##############################################################
// Q. STEP 1 - add 10 grace marks to students whose score < 50
//    STEP 2 - sum all the marks of students who passed
//             passing marks = 50
//    STEP 3 - display the list of passed students and their marks in 
//             table format on the screen
// ###############################################################


const students = [
    {name: "John 0", score:45},
    {name: "John 1", score:33},
    {name: "John 2", score:55},
    {name: "John 3", score:65},
    {name: "John 4", score:85},
  ]

  function passedStudents(studentsInfo,passingMarks){
      const finalArr = []
      let sum = 0
      const finalStudents = []
      for(let i=0;i < studentsInfo.length; i++ ){
          if (studentsInfo[i].score < passingMarks){
              const object = {
                name: studentsInfo[i].name,
                score: studentsInfo[i].score+10
              }
              finalArr.push(object)
          }else{
              finalArr.push(studentsInfo[i])
          }
          if(finalArr[i].score > passingMarks){
              sum += finalArr[i].score
              finalStudents.push(finalArr[i])
          }
      }
      console.log('Passed students list:',finalStudents)
      console.log("Sum of scores of passed students:",sum)
    //   console.log(55+55+65+85)
      console.log(finalArr)
      var table = document.getElementById('myTable')
      for(var j = 0; j < finalStudents.length; j++){
          var row = `
                <tr>
                    <td>${finalStudents[j].name}</td>
                    <td>${finalStudents[j].score}</td>
                </tr>
          `
          table.innerHTML += row
        }
      
  }
  passedStudents(students,50)