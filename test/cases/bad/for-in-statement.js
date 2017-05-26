const a = {};
for (const i in a) {
  if (Object.prototype.hasOwnProperty.call(a, i)) {
    i();
  }
}
