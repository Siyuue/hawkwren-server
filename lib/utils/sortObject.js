module.exports = (obj) => {
    const sortable = [];

    Object.keys(obj).forEach((el) => {
        sortable.push([el, obj[el]]);
    });

    sortable.sort((a, b) => b[1] - a[1]);
    const objSorted = {};
    sortable.forEach((item) => {
        const [, key] = item;
        objSorted[item[0]] = key;
    });
    return objSorted;
};
