module.exports =   function solveEquation(equation) {
    for(var i = 0; i < equation.length; i++) {
      equation = equation.replace(' ','');
      equation = equation.replace('*','');
    }
    equation = equation.replace('x^2',' ');
    equation = equation.replace('x',' ');
    var array = equation.split(' ');
    for(var i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    var ans = [];
    var d = (array[1]*array[1] - 4 * array[0] * array[2]);
    var a = (-1 * array[1] - Math.sqrt(d)) / (2 * array[0]);
    var b = (-1 * array[1] + Math.sqrt(d)) / (2 * array[0]);
    a = Math.round(a);
    b = Math.round(b);
    if(a > b) {
      ans[0] = b;
      ans[1] = a;
    }
    else {
      ans[0] = a;
      ans[1] = b;
    }
    return ans;
  }
