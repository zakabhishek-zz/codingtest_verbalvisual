<?php

  $result = 0;
  for($x = 0; $x < 1000; $x++) {
    if($x % 3 == 0 || $x % 5 == 0) {
      $result += $x;
    }
  }
  echo $result; // $result :  233168

?>

<!-- 

--------- Code Logic ---------





- First we defined variable called $result and asign value of 0

- We created for loop
      - in for loop we use $x variable and start by asignning 0 to it
      - then we said if $x is less than 1000
      - if $x is less than 1000 then keep adding $x variable to itself, 
        F
- In for loop we used if statement
      - in if statement we say if $x is perfectly divisible by 3 OR 5
      - then we use comparison operators || to check if first statement is true or if second statment is true
        
- In above if statement, if left or right side is true $result will keep adding $x number to itself

- And finally will echo or print $result which is final number of all multiples of 3 and 5 bellow 1000 added together

- Final output result of $result is 233168 


-->
