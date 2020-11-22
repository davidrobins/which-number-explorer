export const calculateMultiples = (number, ceiling) => {
    const maxMultiplier = Math.floor(ceiling/number);
    const multiples = [];

    if(ceiling < number || ceiling < 1 || number < 1) { return [] }

    for(let i = 1; i <= maxMultiplier; i++){
        multiples.push(i * number)
    }

    return multiples;
}