export const calculateMultiples = (number, ceiling) => {
    const maxMultiplier = Math.floor(ceiling/number);
    const multiples = []

    for(let i = 1; i <= maxMultiplier; i++){
        multiples.push(i * number)
    }

    return multiples;
}