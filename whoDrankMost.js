module.exports = function(day,drink) {
  var max = 0;
  var whoD = {};
day.forEach(function(per) {
  if(per[drink]>max)
    max = per[drink];
    whoD = {
      name:per.person,

    }
  });

  console.log(whoD.name);
  return whoD.name;
}
