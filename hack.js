function getOption() { 
    selectElement = document.querySelector('#major'); 
    selectedMajor = selectElement.value;
    var sel = document.getElementById('course');
    for (i = sel.length - 1; i >= 0; i--) {
        sel.remove(i);
    }
    if(selectedMajor=="Computer Science"){
      var CSclasses = ["CS 100", "CS 101", "CS 102", "CS 105", "CS 107"]
      var i;
      for (i = 0; i < CSclasses.length; i++) {
        var currentClass = CSclasses[i];
        var opt1 = document.createElement('option');
        opt1.appendChild( document.createTextNode(currentClass) );
        opt1.value = currentClass;
        course.appendChild(opt1);
        }
    }
    if(selectedMajor=="Industrial Engineering"){
      var IEclasses = ["IE 199", "IE 297", "IE 300", "IE 310", "IE 311", ]
      var i;
      for (i = 0; i < IEclasses.length; i++) {
        var currentClass = IEclasses[i];
        var opt1 = document.createElement('option');
        opt1.appendChild( document.createTextNode(currentClass) );
        opt1.value = currentClass;
        course.appendChild(opt1);
        }
    }
    if(selectedMajor=="Computer Engineering"){
      var CEclasses = ["ECE 110", "ECE 120", "ECE 199", "ECE 200", "ECE 205" ]
      var i;
      for (i = 0; i < CEclasses.length; i++) {
        var currentClass = CEclasses[i];
        var opt1 = document.createElement('option');
        opt1.appendChild( document.createTextNode(currentClass) );
        opt1.value = currentClass;
        course.appendChild(opt1);
        }
    }
  }

  


