let rows = Number(prompt("Enter a number of rows: Must be between 1 and 10"))

let columns = Number(prompt("Enter a number of columns: Must be between 1 and 10"))

let a,b,chr;

for (a=1;a<=rows;a++)
  { chr= ''
  for (b=1;b<=columns;b++)
    {
    chr=chr+("*");
    }
  document.write(chr);
  document.write("<br />") 
    chr= '';
}