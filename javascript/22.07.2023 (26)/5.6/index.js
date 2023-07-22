function maskify(string) {
  if (string.length <= 4) {
    return string;
  } else {
    return "#".repeat(string.length - 4) + string.slice(-4);
  }
}

console.log(maskify("Nananananananananananananananana Batman!"));  
