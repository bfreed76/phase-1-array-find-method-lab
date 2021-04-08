
const superbowlWin = (array) => {
    const found = array.find((i) => {
        return i.result==="W";
    })
        if (found === undefined) {
            return undefined;
        } else { 
            return found.year;
}
}

// return found ? found.year: undefined

