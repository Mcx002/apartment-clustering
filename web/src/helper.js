/**
 * 
 * @param {number} typeId 
 * @returns string
 */
export const getCluster = (typeId) => {
    switch (typeId) {
        case 0:
            return "B";
        case 1:
            return "A";
        case 2:
            return "C";
        default:
            console.error("The type is not the correct cluster Id");
            return "-";
    }
}

/**
 * 
 * @param { number } val 
 * @returns string
 */
export const toWon = (val) => {
    return new Intl.NumberFormat("ko-KR").format(val);
}