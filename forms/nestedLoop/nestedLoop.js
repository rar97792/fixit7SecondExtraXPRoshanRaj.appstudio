
let rows = Number(prompt("Enter a number of rows: Must be between 1 and 10"))

let columns = Number(prompt("Enter a number of columns: Must be between 1 and 10"))

let a,b,chr;
//nested loop
for (a=1;a<=rows;a++)
  { chr= ''
  for (b=1;b<=columns;b++)
    {
    chr=chr+("*");
    }
//displays code
  document.write(chr);
  document.write("<br />") 
    chr= '';
}

