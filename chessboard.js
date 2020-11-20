var lines;
var currentLine = 0;

function processData(input) {
    var numTests, t, params, x, y, cache;
    
    lines = input.split("\n");
    numTests = +readLine();
    cache = {};
    
    for (t = 0; t < numTests; t++) {
        params = readLine().split(' ').map(Number);
        x = params[0];
        y = params[1];
        console.log(winningPosition(x, y, cache) ? 'First' : 'Second');
    }
}

function winningPosition(x, y, cache) {
    var result;
    var key = x + ',' + y;
    if (cache.hasOwnProperty(key)) {
        return cache[key];
    }
    result = (x >= 3 && y <= 14 && !winningPosition(x - 2, y + 1, cache)) ||
             (x >= 3 && y >=  2 && !winningPosition(x - 2, y - 1, cache)) ||
             (x <= 14 && y >= 3 && !winningPosition(x + 1, y - 2, cache)) ||
             (x >= 2 && y >=  3 && !winningPosition(x - 1, y - 2, cache));
    cache[key] = result;
    return result;
}

function readLine() {
    return lines[currentLine++];
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});