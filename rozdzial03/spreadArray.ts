namespace SpreadArray {
    const a = [1,2,3];
    const b = [4,5,6];

    const c = [...a, ...b];
    const d = a.concat(b);
    console.log('c przed zmianą a', c);
    console.log('d przed zmianą a', d);
    
    a.push(10);
    console.log('a', a);
    console.log('c po zmianie a', c);
    console.log('d po zmianie a', d);
}