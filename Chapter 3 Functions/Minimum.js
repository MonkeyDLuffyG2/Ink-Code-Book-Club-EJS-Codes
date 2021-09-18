function min(num_1, num_2)
{
    if (num_1 < num_2)
    {
        return num_1;
    }
    else
    {
        return num_2;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log("The minimum number between 304 and 241 is: ", String(minimum(304, 241)));

/*
*Output:
0
-10
The minimum number between 304 and 241 is:  241
*/