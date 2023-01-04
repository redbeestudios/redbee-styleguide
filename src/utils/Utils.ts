export const capitalize = (word:string) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
};

export const isSameArray = (array1, array2) => {
    const array2Sorted = array2.slice().sort();
    return (
        array1.length === array2.length &&
        array1
            .slice()
            .sort()
            .every(function (value, index) {
                return value === array2Sorted[index];
            })
    );
};