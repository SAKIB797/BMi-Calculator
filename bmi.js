function calBmi()   {
heightFeet = document.getElementById('feet').value;
heightInch = document.getElementById('inch').value;

heightFeetToMeter = heightFeet*0.3048;
heightInchToMeter = heightInch*0.0254;

totalHeightInMeter = heightFeetToMeter + heightInchToMeter;

height_square = totalHeightInMeter*totalHeightInMeter;

weight =  document.getElementById('weight_inpt').value ;

bmi = weight/height_square;

document.getElementById('bmi_output').innerHTML= bmi;
 
 if (bmi<18.5) {
  document.getElementById('body_output').innerText='underweight';
 }
 
else if (bmi >=18.5 && bmi <25) {
 document.getElementById('body_output').innerText='healthy ';
 }
 
else if (bmi >=25 && bmi <30) {
 document.getElementById('body_output').innerText='overweight'; 
 }

else if (bmi>=30 && bmi<35) {
   document.getElementById('body_output').innerText='obese';
 } 
else if (bmi>=35) {
   document.getElementById('body_output').innerText='extremely obese';
 }
 
}