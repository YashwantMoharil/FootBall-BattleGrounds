import React  from 'react';
import Tiles from './Tiles';
import StrikeThrough from './StrikeThrough';
import Constraints from './Constraints';

function Board({player, tiles, onTileClick, strike}) {
    return (  
        <div className='board'>
            <Constraints className = 'gridBorder grid' message = 'Icon'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = 'P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>  
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(0)} value = {tiles[0]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(1)} value = {tiles[1]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(2)} value = {tiles[2]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(3)} value = {tiles[3]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(4)} value = {tiles[4]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(5)} value = {tiles[5]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(6)} value = {tiles[6]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(7)} value = {tiles[7]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(8)} value = {tiles[8]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(9)} value = {tiles[9]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(10)} value = {tiles[10]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(11)} value = {tiles[11]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(12)} value = {tiles[12]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(13)} value = {tiles[13]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(14)} value = {tiles[14]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(15)} value = {tiles[15]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(16)} value = {tiles[16]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(17)} value = {tiles[17]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(18)} value = {tiles[18]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(19)} value = {tiles[19]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(20)} value = {tiles[20]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(21)} value = {tiles[21]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(22)} value = {tiles[22]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(23)} value = {tiles[23]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(24)} value = {tiles[24]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(25)} value = {tiles[25]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(26)} value = {tiles[26]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(27)} value = {tiles[27]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(28)} value = {tiles[28]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(29)} value = {tiles[29]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(30)} value = {tiles[30]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(31)} value = {tiles[31]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(32)} value = {tiles[32]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(33)} value = {tiles[33]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(34)} value = {tiles[34]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(35)} value = {tiles[35]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(36)} value = {tiles[36]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(37)} value = {tiles[37]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(38)} value = {tiles[38]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(39)} value = {tiles[39]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(40)} value = {tiles[40]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(41)} value = {tiles[41]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(42)} value = {tiles[42]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(43)} value = {tiles[43]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(44)} value = {tiles[44]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(45)} value = {tiles[45]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(46)} value = {tiles[46]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(47)} value = {tiles[47]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(48)} value = {tiles[48]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(49)} value = {tiles[49]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(50)} value = {tiles[50]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(51)} value = {tiles[51]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(52)} value = {tiles[52]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(53)} value = {tiles[53]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(54)} value = {tiles[54]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(55)} value = {tiles[55]} className = 'gridBorder grid' />
            <Constraints className = 'gridBorder grid' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(56)} value = {tiles[56]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(57)} value = {tiles[57]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(58)} value = {tiles[58]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(59)} value = {tiles[59]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(60)} value = {tiles[60]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(61)} value = {tiles[61]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(62)} value = {tiles[62]} className = 'gridBorder grid' />
            <Tiles player = {player} onClick = {() => onTileClick(63)} value = {tiles[63]} className = 'gridBorder grid' />
           
            <StrikeThrough strike = {strike}/>
            </div>
    );
}

export default Board;