const result = [];
const videoGame = (fighters, moves) =>{
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<fighters.length; j++){
            for(let k=0; k<fighters.length; k++){
                if(j==0 && moves[i] == "up"){
                    result.push("fail");
                    break;
                }
                else if(j==1 && moves[i] == "down" ){
                    result.push("fail");
                    break;
                }
                else if(k==0 && moves[i] == "left" ){
                    result.push(fighters[j][fighters.length-1]);
                    break;
                }
                else if(k==fighters.length-1 && moves[i] == "right" ){
                    result.push(fighters[j][0]);
                    break;
                }else if(moves[i] == "right"){
                    result.push(fighters[j][k+1]);
                    break;
                }else if(moves[i] == "left"){
                    result.push(fighters[j][k-1]);
                    break;
                }else if(moves[i] == "up"){
                    result.push(fighters[j-1][k]);
                    break;
                }else if(moves[i] == "down"){
                    result.push(fighters[j+1][k]);
                    break;
                }
            }
        }
    }
    return result;
}


const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]

const moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'] 

console.log(videoGame(fighters, moves));
