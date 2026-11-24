let vitoria = false;
let tabu = new Array(3);
let k = 0;
for(let i =0; i < 3; i++)
{
    tabu[i] = new Array(3);
}
let aux = new Array(3);
for(let i =0; i < 3; i++)
{
    aux[i] = new Array(3);
}
let count =  1;
for(let i = 0; i <3; i++)
{
    for(let j = 0; j <3; j++)
    {
        tabu[i][j] = document.getElementById("button_" + count);
        count++;
    }
}



for(let i = 0; i < 3; i++)
{
    
    for(let j = 0; j < 3; j++)
    {
        tabu[i][j].addEventListener("click", 
        function()
        {
            if(k % 2 == 0 && !(aux[i][j] === 'X' || aux[i][j] === 'O') && vitoria == false)
            {
                k++;
                tabu[i][j].style.backgroundImage = "url('assets/X.png')";
                tabu[i][j].style.backgroundSize = "contain";
                aux[i][j] = "X";
                if(checkvit("X")===1)
                {
                    vitoria = true;
                    document.getElementById("resultado").innerHTML = "<img src='assets/vitoria_x.png'>";
                }
            }
            else if(k % 2 != 0 && !(aux[i][j] === 'X' || aux[i][j] === 'O') && vitoria == false)
            {
                k++;
                tabu[i][j].style.backgroundImage = "url('assets/O.png')";
                tabu[i][j].style.backgroundSize = "contain";
                aux[i][j] = "O";
                if(checkvit("O")=== 1)
                {
                    vitoria = true;
                    document.getElementById("resultado").innerHTML = "<img src='assets/vitoria_o.png'>";
                }
            }   
            
        }
        )
    }
}
function checkvit(char)
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
        if(j == 0)
        {
            if(aux[i][j] == char && aux[i][j + 1] == char && aux[i][j +2] == char)
            {
                console.log("VICTORY LINHA. PARABÉNS");
                return 1;
            }
        }
        if((j == 0 || j == 2) && i == 0)
        {
            if((aux[i][j] == char && aux[i+1][j+1] == char && aux[i+2][j+2] == char) || (aux[i][j] == char && char == aux[i+1][j-1] && aux[i+2][j-2] == char))
            {
                console.log("VICTORY DIAGONAL. PARABÉNS");
                return 1;
            }
        }
        if(i == 0)
        {
            if(aux[i][j] == char && aux[i + 1][j] == char && aux[i +2][j] == char)
            {
                console.log("VICTORY COLUNA. PARABÉNS");
                return 1;
            }
        }
        }
    }
}
