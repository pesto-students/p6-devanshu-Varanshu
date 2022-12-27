const allPaths = (graph) => {
    const ans = [];

    const dfs = (id, result) => {
        if (id === graph.length - 1) {
            ans.push(result);
        }

        for (const num of graph[id]) {
            dfs(num, [...result, num]);
        }
    };

    dfs(0, [0]);

    return ans;
};

console.log(allPaths([[1, 2], [3], [3], []]));
console.log(allPaths([[4, 3, 1], [3, 2, 4], [3], [4], []]));
