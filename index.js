const cats = ["Milo", "Otis", "Garfield"];
cats;
function destructivelyAppendCat(name) {
    return cats.push(name); 
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, cats.length -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}