// * First version
let chessboard = "";
let size = 8;
for (let i = 0; i < size; i++)
{
    if (i % 2 == 0)
    {
        chessboard += " # # # #\n";
    }
    else
    {
        chessboard += "# # # # \n";
    }
}
console.log(chessboard);

// *Second version
let chessboard = "";
let size = 8;
for (let i = 0; i < size; i++)
{
    for (let j = 0; j < size; j++)
    {
        if ((j+i) % 2 == 0)
        {
            chessboard += " "
        }
        else 
        {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}
console.log(chessboard);

/* 
*Output
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/