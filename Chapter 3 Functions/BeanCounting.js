function countBs(string)
{
    let total = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == 'B')
        {
            total++;
        }
    }
    return total;
}

console.log("Amount of Bs in SpongeBob Battle for Bikini Bottom is: ", countBs("SpongeBob Battle for Bikini Bottom"));

function countChar(string, char)
{
    let total = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == char)
        {
            total++;
        }
    }
    return total;
}