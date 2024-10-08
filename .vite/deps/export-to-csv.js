import "./chunk-WGAPYIUP.js";

// node_modules/export-to-csv/output/index.js
var v = { fieldSeparator: ",", decimalSeparator: ".", quoteStrings: true, quoteCharacter: '"', showTitle: false, title: "My Generated Report", filename: "generated", showColumnHeaders: true, useTextFile: false, useBom: true, columnHeaders: [], useKeysAsHeaders: false, boolDisplay: { true: "TRUE", false: "FALSE" }, replaceUndefinedWith: "" };
var B = "\r\n";
var F = "\uFEFF";
var Y = (x) => Object.assign({}, v, x);
var Z = class extends Error {
  constructor(x) {
    super(x);
    this.name = "CsvGenerationError";
  }
};
var _ = class extends Error {
  constructor(x) {
    super(x);
    this.name = "EmptyHeadersError";
  }
};
var $ = class extends Error {
  constructor(x) {
    super(x);
    this.name = "CsvDownloadEnvironmentError";
  }
};
var U = (x) => x;
var z = (x) => x;
var W = U;
var X = U;
var Q = U;
var T = U;
var w = function(x, A) {
  if (A == '"' && x.indexOf('"') > -1)
    return x.replace(/"/g, '""');
  return x;
};
var H = (x) => typeof x === "object" ? Q(x.key) : Q(x);
var D = (x) => typeof x === "object" ? T(x.displayLabel) : T(x);
var V = (x, ...A) => A.reduce((N, j) => j(N), x);
var K = (x) => (A) => x.useBom ? W(z(A) + F) : A;
var L = (x) => (A) => x.showTitle ? W(z(A) + x.title) : A;
var P = (x) => (A) => W(z(x) + z(A) + B);
var R = (x) => (A, N) => h(x)(X(A + N));
var h = (x) => (A) => U(z(A) + x.fieldSeparator);
var E = (x, A) => (N) => {
  if (!x.showColumnHeaders)
    return N;
  if (A.length < 1)
    throw new _("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");
  let j = X("");
  for (let G = 0; G < A.length; G++) {
    const J = D(A[G]);
    j = R(x)(j, C(x, J));
  }
  return j = X(z(j).slice(0, -1)), P(N)(j);
};
var O = (x, A, N) => (j) => {
  let G = j;
  for (var J = 0; J < N.length; J++) {
    let S = X("");
    for (let I = 0; I < A.length; I++) {
      const q = H(A[I]), b = typeof N[J][z(q)] === "undefined" ? x.replaceUndefinedWith : N[J][z(q)];
      S = R(x)(S, C(x, b));
    }
    S = X(z(S).slice(0, -1)), G = P(G)(S);
  }
  return G;
};
var y = z;
var M = (x) => +x === x && (!isFinite(x) || Boolean(x % 1));
var C = (x, A) => {
  if (x.decimalSeparator === "locale" && M(A))
    return A.toLocaleString();
  if (x.decimalSeparator !== "." && M(A))
    return A.toString().replace(".", x.decimalSeparator);
  if (typeof A === "string") {
    let N = A;
    if (x.quoteStrings || x.fieldSeparator && A.indexOf(x.fieldSeparator) > -1 || x.quoteCharacter && A.indexOf(x.quoteCharacter) > -1 || A.indexOf("\n") > -1 || A.indexOf("\r") > -1)
      N = x.quoteCharacter + w(A, x.quoteCharacter) + x.quoteCharacter;
    return N;
  }
  if (typeof A === "boolean" && x.boolDisplay) {
    const N = A ? "true" : "false";
    return x.boolDisplay[N];
  }
  return A;
};
var Gx = (x) => (A) => {
  const N = Y(x), j = N.useKeysAsHeaders ? Object.keys(A[0]) : N.columnHeaders;
  let G = V(W(""), K(N), L(N), E(N, j), O(N, j, A));
  if (z(G).length < 1)
    throw new Z("Output is empty. Is your data formatted correctly?");
  return G;
};
var Ix = (x) => (A) => {
  if (!window)
    throw new $("Downloading only supported in a browser environment.");
  const N = Y(x), j = z(A), G = N.useTextFile ? "plain" : "csv", J = N.useTextFile ? "txt" : "csv";
  let S = new Blob([j], { type: `text/${G};charset=utf8;` }), I = document.createElement("a");
  I.download = `${N.filename}.${J}`, I.href = URL.createObjectURL(S), I.setAttribute("visibility", "hidden"), document.body.appendChild(I), I.click(), document.body.removeChild(I);
};
export {
  y as asString,
  Ix as download,
  Gx as generateCsv,
  Y as mkConfig
};
//# sourceMappingURL=export-to-csv.js.map
