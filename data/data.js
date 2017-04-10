const now = Date.now();
const oneHour = 1000 * 60 * 60;
const oneDay = oneHour * 24;

export default [
    {time: now, y: Math.random(), id: '0'},
    {time: now + oneHour * 10, y: Math.random(), id: '1'},
    {time: now + oneDay * 2, y: Math.random(), id: '2'},
    {time: now + oneDay * 3 + oneHour * 5, y: Math.random(), id: '3'},
    {time: now + oneDay * 4, y: Math.random(), id: '4'}
];
