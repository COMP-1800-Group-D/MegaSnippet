// DOM Elements
const allCells = document.querySelectorAll('.cell:not(.row-top)');
const topCells = document.querySelectorAll('.cell.row-top');
const overlays = document.querySelectorAll('.overlay')

// columns
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];


// rows
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];



// variables
let gameIsLive = true;
let yellowIsNext = true;
let computerMemory = []

//functions
const getClassListArray = (cell) =>{
    const classList = cell.classList;

    return [...classList];
};

const getCellLocation = (cell) =>{
    const classList = getClassListArray(cell);
    const rowClass = classList.find(className => className.includes('row'));
    const colClass = classList.find(className => className.includes('col'));
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];
    const rowNumber = parseInt(rowIndex, 10);
    const colNumber = parseInt(colIndex, 10);

    return[rowNumber, colNumber];
};

const getFirstOpenCellForColumn = (colIndex) =>{
    const column = columns[colIndex];
    const columnWithoutTop = column.slice(0, 6);
    for (const cell of columnWithoutTop){
        const classList = getClassListArray(cell);
        if(!classList.includes('yellow') && !classList.includes('red')){
            return cell;
        }
    }

    return null;
}

const clearRowTop = (colIndex) =>{
    const topCell = topCells[colIndex];
    topCell.classList.remove('yellow');
};

const getColorOfCell = (cell) =>{
    const classList = getClassListArray(cell);
    if (classList.includes('yellow')) return 'yellow';
    if (classList.includes('red')) return 'red';
    return null
};

const checkStatusOfGame = (cell) =>{
    const color = getColorOfCell(cell);
    if(!color) return;
    const [rowIndex, colIndex] = getCellLocation(cell);

    let winningCells = [cell];
    let rowToCheck = rowIndex;
    let colToCheck = colIndex - 1;
    while (colToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            colToCheck--;
        }else{
            break;
        }
    }
    colToCheck = colIndex + 1;
    while (colToCheck <= 6){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            colToCheck++;
        }else{
            break;
        }
    }
    let isWinning = checkWinningCells(winningCells);
    if (isWinning) return;

    winningCells = [cell];
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex;
    while (rowToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck--;
        }else{
            break;
        }
    }
    rowToCheck = rowIndex + 1;
    while (rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck++;
        }else{
            break;
        }
    }
    isWinning = checkWinningCells(winningCells)
    if (isWinning) return;

    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck++;
            colToCheck--;
        }else{
            break;
        }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck--;
            colToCheck++;
        }else{
            break;
        }
    }
    isWinning = checkWinningCells(winningCells)
    if (isWinning) return;

    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck++;
            colToCheck++;
        }else{
            break;
        }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            rowToCheck--;
            colToCheck--;
        }else{
            break;
        }
    }
    isWinning = checkWinningCells(winningCells)
    if (isWinning) return;

    const rowWithoutTop = rows.slice(0, 6);
    for (row of rowWithoutTop){
        for(const cell of row){
            const classList = getClassListArray(cell);
            if(!classList.includes('yellow') && !classList.includes('red')){
                return;
            }
        }
    }
    document.getElementById('tie').style.display = 'block';
    gameIsLive = false
};

const checkWinningCells = (cells) => {
    if (cells.length < 4) return false;

    if (cells.length >= 4){
        gameIsLive = false;
        for (const cell of cells){
            cell.classList.add('win');
        }
    }
    yellowIsNext ? document.getElementById('yellowWins').style.display = 'block' : document.getElementById('redWins').style.display = 'block';
    return true
}

const computerMove = (cell) =>{
    //check for sets of 3
    //place to block 3
    //check whole board for set of 3 with empty inbetween
    //place to block 3
    //choose a red and put to closest column
    //if no reds then choose random spot
    const [rowIndex, colIndex] = getCellLocation(cell);
    //horizontal check left
    let winningCells = [cell];
    let rowToCheck = rowIndex;
    let colToCheck = colIndex - 1;
    while (colToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            colToCheck--;
        }else{
            break;
        }
        if (winningCells.length == 3){                
            if (colIndex - 3 >= 0 && rowIndex != 5 && getColorOfCell(rows[rowIndex + 1][colIndex - 3])){
                if(getColorOfCell(rows[rowIndex + 1][colIndex - 3])){
                    console.log(getColorOfCell(rows[rowIndex + 1][colIndex - 3]))
                    const openCell = getFirstOpenCellForColumn(colIndex - 3)
                    if(!openCell){}
                    else{openCell.classList.add('red'); return}
                }
            }            
            else if (colIndex + 1 <= 6 && rowIndex != 5 && getColorOfCell([rowIndex + 1, colIndex + 1])){
                if(getColorOfCell([rowIndex + 1, colIndex + 1])){
                    console.log(getColorOfCell(rows[rowIndex + 1][colIndex + 1]))
                    const openCell = getFirstOpenCellForColumn(colIndex + 1)
                    if(!openCell){}
                    else{openCell.classList.add('red'); return}
                }
            }
            else if (colIndex - 3 >= 0){
                console.log('bruh')
                const openCell = getFirstOpenCellForColumn(colIndex - 3)
                if(!openCell){}
                else{openCell.classList.add('red'); return}
            }

            else if (colIndex + 1 <= 6){
                console.log("bruh")
                const openCell = getFirstOpenCellForColumn(colIndex + 1)
                if(!openCell){}
                else{openCell.classList.add('red'); return}
            }
        }
    }
    //horizontal check right
    colToCheck = colIndex + 1;
    while (colToCheck <= 6){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            colToCheck++;
        }else{
            break;
        }
        console.log(rowIndex != 5) 
        if (winningCells.length == 3){  
            if (colIndex + 3 <= 6 && rowIndex != 5 && getColorOfCell(rows[rowIndex + 1][colIndex + 3])){
                if(getColorOfCell(rows[rowIndex + 1][colIndex + 3])){
                    console.log(getColorOfCell(rows[rowIndex + 1][colIndex + 3]))
                    const openCell = getFirstOpenCellForColumn(colIndex + 3)
                    if(!openCell){}
                    else{openCell.classList.add('red'); return}
                }
            }       
            else if (colIndex - 1 >= 0 && rowIndex != 5 && getColorOfCell([rowIndex + 1, colIndex - 1])){
                console.log("here")
                if(getColorOfCell([rowIndex + 1, colIndex - 1])){
                    console.log(getColorOfCell(rows[rowIndex + 1][colIndex - 1]))
                    const openCell = getFirstOpenCellForColumn(colIndex - 1)
                    if(!openCell){}
                    else{openCell.classList.add('red'); return}
                }
            }
            else if (colIndex + 3 <= 6){
                console.log('bruh')
                const openCell = getFirstOpenCellForColumn(colIndex + 3)
                if(!openCell){}
                else{openCell.classList.add('red'); return}
            }

            else if (colIndex - 1 >= 0){
                console.log("bruh")
                const openCell = getFirstOpenCellForColumn(colIndex - 1)
                if(!openCell){}
                else{openCell.classList.add('red'); return}
            }
        }
        
    }
    //vertical check down
    winningCells = [cell];
    colToCheck = colIndex
    rowToCheck = rowIndex + 1;
    while (rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            rowToCheck++;
        }else{
            break;
        }
        
        if (winningCells.length == 3){
            if (rowIndex - 1 >= 0){
                const openCell = getFirstOpenCellForColumn(colIndex)
                if(!openCell){}
                else{openCell.classList.add('red')}
            }
        }
    }
    //diagonal check /
    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            rowToCheck++;
            colToCheck--;
        }else{
            break;
        }
        if (winningCells.length == 3){
            if (colIndex - 1 >= 0 && rowIndex + 1 <= 5){
                const openCell = getFirstOpenCellForColumn(colIndex - 1)
                if(!openCell){}
                else{openCell.classList.add('red')}
            }
        }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            rowToCheck--;
            colToCheck++;
        }else{
            break;
        }
        if (winningCells.length == 3){
            if (colIndex + 3 <= 6 && rowIndex - 3 >= 0){
                const openCell = getFirstOpenCellForColumn(colIndex + 3)
                if(!openCell){}
                else{openCell.classList.add('red')}
            }
        }
    }
    //diagonal check \
    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck <= 5){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            rowToCheck++;
            colToCheck++;
        }else{
            break;
        }
        if (winningCells.length == 3){
            if (colIndex + 3 <= 6 && rowIndex + 3 <= 5){
                const openCell = getFirstOpenCellForColumn(colIndex + 3)
                if(!openCell){}
                else{openCell.classList.add('red')}
            }
        }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck >= 0){
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === 'yellow') {
            winningCells.push(cellToCheck);
            rowToCheck--;
            colToCheck--;
        }else{
            break;
        }
    }
    if (winningCells.length == 3){
        if (colIndex - 3 >= 0 && rowIndex - 3 >= 0){
            const openCell = getFirstOpenCellForColumn(colIndex - 3)
            if(!openCell){}
            else{openCell.classList.add('red')}
        }
    }

}

// event handlers
const handleCellMouseOver = (event) =>{
    if(!gameIsLive) return;
    const cell = event.target;
    const [rowIndex, colIndex] = getCellLocation(cell);
    const topCell = topCells[colIndex];

    topCell.classList.add('yellow');
};

const handleCellMouseOut = (event) =>{
    const cell = event.target;
    const [rowIndex, colIndex] = getCellLocation(cell);
    clearRowTop(colIndex);
}

const handleCellClick = (event) =>{
    if(!gameIsLive) return;
    const cell = event.target;
    const [rowIndex, colIndex] = getCellLocation(cell);
    
    const openCell = getFirstOpenCellForColumn(colIndex)
    
    if (!openCell) return;

    openCell.classList.add('yellow');
    checkStatusOfGame(openCell)
    yellowIsNext = !yellowIsNext;
    if (!gameIsLive) return;
    computerMove(openCell);
    yellowIsNext = !yellowIsNext;
    const topCell = topCells[colIndex];
    topCell.classList.add('yellow')
}

const resetGame = (event) =>{
    document.getElementById("redWins").style.display = 'none';
    document.getElementById("yellowWins").style.display = 'none';
    document.getElementById("tie").style.display = 'none';
    for (const row of rows){
        for(const cell of row){
            cell.classList.remove('red')
            cell.classList.remove('yellow')
            cell.classList.remove('win')
        }
    }
    gameIsLive = true
}

// event listeners
for (const row of rows){
    for (const cell of row){
        cell.addEventListener('mouseover', handleCellMouseOver);
        cell.addEventListener('mouseout', handleCellMouseOut);
        cell.addEventListener('click', handleCellClick);
    };
};

for(const overlay of overlays){
    overlay.addEventListener('click', resetGame)
}