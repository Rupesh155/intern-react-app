var list = []
if (localStorage.getItem('list') == null) {
    localStorage.setItem('list', '[]');
} else {
    list = JSON.parse(localStorage.getItem('list'));
}



function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }



function addPlayer(player, score) {
    if (window.localStorage.list) {
        localStorage.list = Array(window.localStorage.list);
        list = Array(localStorage.list);
    } else {
        localStorage.setItem("list", JSON.stringify([]));
    }

    list = JSON.parse(localStorage.getItem('list'));
    list.push({ player: player, score: score, id: list.length });
    localStorage.setItem("list", JSON.stringify(list));
}

function getData() {

    list.sort((a, b) => {
        return b.score - a.score;
    });
    
    return list;
}

function updateScore(newScore, id) {
    var oldData = list[id];
    var newData = { player: oldData.player, score: newScore, id: id };
    list[id] = newData;
    localStorage.setItem("list", JSON.stringify(list));
}


export { addPlayer, getData, updateScore }