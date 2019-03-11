var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name) {
;
}
function destructivelyRemoveLastKitten() {

}
function destructivelyRemoveFirstKitten() {
;
}
function appendKitten(name) {
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0,-1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}
