const widgets = [
    { id: 1, color: 'niebieski' },
    { id: 2, color: 'żółty' },
    { id: 3, color: 'pomarańczowy' },
    { id: 4, color: 'niebieski' },
]

console.log('Czy są jakieś niebieskie elementy?', widgets.some(item => {
    return item.color === 'niebieski';
}));

console.log('Czy wszystkie elementy są niebieskie?', widgets.every(item => {
    return item.color === 'niebieski';
}));