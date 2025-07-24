let student = {
    stddId : "6711130043",
    stdName : "Boss",
    hm : 30,
    midterm : 30,
    final : 30
}
let t = student.hm + student.midterm + student.final;
if(t<=40) console.log("F");
else if(t<=50) console.log("D");
else if(t<=60) console.log("C");
else if(t<=70) console.log("B");
else console.log("A");