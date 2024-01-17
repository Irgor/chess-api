const jsChessEngine = require('js-chess-engine')

const check = async (req, res) => {
    const config = req.body;
    const game = new jsChessEngine.Game(config);
    const move = game.aiMove(0) 
    res.json(move);
}

module.exports = {
    check
}