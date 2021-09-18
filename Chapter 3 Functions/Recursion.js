function isEven(int)
{
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