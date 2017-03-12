function sortInt (option) {
  var temp = document.getElementsByName('option');
  var option;
  for (var i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
    option = temp[i].value;
    alert(option);
    }
  }
}

function getValue () {
  var int = document.getElementsByName('intToCal').value;

  console.log(int);
}
