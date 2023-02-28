var res = {};
res['round'] = [99.89];
res['abs'] = [-67.9, 89.7];
res['ceil'] = [23.67];
res['floor'] = [6.9];
res['min'] = [8,9,6,4];
res['max'] = [4,6,8,9];

console.log(SolveThis(res))

function SolveThis(arg){
    arg.round = Math.round(arg.round)
    arg.abs = Math.abs(arg.abs[0],arg.abs[1])
    arg.ceil = Math.ceil(arg.ceil)
    arg.floor = Math.floor(arg.floor)
    arg.min = Math.min(arg.min[0],arg.min[1], arg.min[2], arg.min[3])
    arg.max = Math.max(arg.max[0], arg.max[1], arg.max[2], arg.max[3])
    return arg;
}