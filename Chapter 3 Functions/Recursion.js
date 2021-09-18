function isEven(int)
{
  	if (int < 0)
    {
      int *= -1;
    }
    if (int == 0)
    {
        return true;
    }
    else if (int % 2 != 0)
    {
        return false;
    }
    else 
    {
        return isEven(int - 2);
    }
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log(isEven(-100)); 
/*
*Notes for understanding why it reached a max stack
 Originally the stack reached its limit
 when entering a negative even number
 because the else statement executed infinitely
 due to no value satisfying any of the given
 conditions. 
*/

/*
*Output
true
false
false
true
*/