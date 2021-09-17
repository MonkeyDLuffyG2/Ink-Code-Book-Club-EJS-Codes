//*First solution
let symbol = '########';
for (let i = 0; i < symbol.length; i++)
{
    console.log(symbol.substring(0, i));
}

//*Second solution
let symbol = '#';
for (let i = 0; i < 7; i++)
{
    console.log(symbol);
    symbol += '#';
}

/*
*Output:
#
##
###
####
#####
######
#######
*/