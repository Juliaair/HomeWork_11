"use strict";
window.fineList = {
    searchFines: searchFines
}
let DB = data.finesData;
function searchFines(searchKey) {
    let searchResult = [];
    for (let i = 0; i < DB.length; i++) {
        let fine = DB[i];
        if (fine.номер === searchKey || fine.тип === searchKey) {
            searchResult.push(fine);
        }
    }
    return searchResult;
}
console.log(resultByNumber);
console.log(resultByType);