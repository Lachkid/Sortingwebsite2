student_array=[];
function submit()
{var display_array=[];
for(var x=1; x<=4;x++) 
{
    var name_of_the_student = document.getElementById("name_of_the_student_"+x).value; 
    console.log(name_of_the_student); 
    student_array.push(name_of_the_student);   
}
console.log(student_array);
var length_array=student_array.length;
console.log(length_array);


for(var y=0;y<length_array;y++)
{display_array.push("<h4>NAME-"+student_array[y]+"</h4");

console.log(display_array);
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting() 
{student_array.sort();
console.log(student_array);
var student_sorting=[];
length_array=student_array.length;
console.log(length_array);
for(var y=0;y<length_array;y++)
{student_sorting.push("<h4>NAME-"+student_array[y]+"</h4");

console.log(student_sorting);
}
var remove_commas=student_sorting.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function new_update() 
{ document.getElementById("display_name_without_commas").innerHTML = "<h1>" +student_array +"</h1>"; }