"use strict;"

// screenWidth and screenHeight to accommodate resizing needs & visualization sizing
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// Verify whether browser supports accessing localStorage
const localStorageAvailable = (typeof(Storage) !== 'undefined');


// filterEmptyFromArr()
let filterEmptyFromArr = (inArr) => {
    if (!inArr) return [];
    return inArr.filter(function (el) { return el != null && el !== undefined && el !== ''; });
};


// removeDuplicatesFromArr()
let removeDuplicatesFromArr = (inArr) => {
    return [... new Set(arr)];
};


// addImageElement()
// Takes image element source and value
let addImageElement = (source=null, value=-1) => {
    if (source === null) return undefined;
    let img = document.createElement('img');
    img.setAttribute('src', source);
    img.setAttribute('alt', value);
    img.setAttribute('title', value);
    return img;
};