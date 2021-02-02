module.exports = function(obj) {
    const sortable = [];
    for (const el in obj) {
        sortable.push([el, obj[el]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    const objSorted = {}
    sortable.forEach(function(item){
        objSorted[item[0]]=item[1]
    })
    return objSorted
}