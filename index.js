const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
  return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    return new Array(...cats, name)
}
function prependCat(name) {
    return new Array(name, ...cats)
}
function removeLastCat() {
    let copyCats = [...cats];
    return copyCats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1, 3);
}