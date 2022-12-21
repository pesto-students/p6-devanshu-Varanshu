let N;

let adjacencyList = [];

const initAdjacency = (n) => {
    N = n
    for (let i = 0; i < n; i++) adjacencyList.push([]);
}

const addEdge = (v, w) => {
    adjacencyList[v].push(w);
    adjacencyList[w].push(v);
}

const isReachable = (s, d) => {
    if (s === d) return true;

    let visited = new Array(N).fill(false);

    let queue = new Array();

    visited[s] = true;
    queue.push(s);

    while (queue.length !== 0) {
        s = queue.pop();

        for (let i = 0; i < adjacencyList[s].length; i++) {
            if (adjacencyList[s][i] == d) return true;

            if (!visited[adjacencyList[s][i]]) {
                visited[adjacencyList[s][i]] = true;
                queue.push(adjacencyList[s][i]);
            }
        }
    }
    return false;
}

const findPath = (n, graph, source, destination) => {
    initAdjacency(n)
    for (i of graph)
        addEdge(i[0], i[1])
    if (isReachable(source, destination)) console.log("There is a path from " + source + " to " + destination);
    else console.log("There is no path from " + source + " to " + destination);
}


findPath(
    6,
    [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]],
    0,
    5
)

findPath(
    3,
    [[0, 1], [1, 2], [2, 0]],
    0,
    2
)
