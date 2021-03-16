const countIsland = (matrix)=>{

    // Create Visited 2D matrix
    const visited = [];
    for(let i=0; i<matrix.length; i++){
        let newArr = [];
        for(let j=0; j<matrix.length; j++){
            newArr.push(false);
        }
        visited.push(newArr);
    }

    let count = 0;

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            if(matrix[i][j] === 1 && !visited[i][j]){
                dfs(matrix, i, j, visited);
                count++;
            }
        }
    }
    return count;
}

const dfs = (matrix, i, j, visited)=>{
    visited[i][j] = true;

    if(isSafe(matrix, i-1, j-1, visited)){
        dfs(matrix, i-1, j-1, visited);
    }
    if(isSafe(matrix, i-1, j, visited)){
        dfs(matrix, i-1, j, visited);
    }
    if(isSafe(matrix, i-1, j+1, visited)){
        dfs(matrix, i-1, j+1, visited);
    }
    if(isSafe(matrix, i, j-1, visited)){
        dfs(matrix, i, j-1, visited);
    }
    if(isSafe(matrix, i, j+1, visited)){
        dfs(matrix, i, j+1, visited);
    }
    if(isSafe(matrix, i+1, j-1, visited)){
        dfs(matrix, i+1, j-1, visited);
    }
    if(isSafe(matrix, i+1, j, visited)){
        dfs(matrix, i+1, j, visited);
    }
    if(isSafe(matrix, i+1, j+1, visited)){
        dfs(matrix, i+1, j+1, visited);
    }
}

const isSafe = (matrix, i, j, visited) =>{
    return i>=0 && i<matrix.length && j>=0 && j<matrix.length && matrix[i][j] === 1 && !visited[i][j];
}

const matrix = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
    ];

    console.log("Total Island: ", (countIsland(matrix)));
