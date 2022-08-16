function importAll(r) {
    return r.keys().map(r);
}
export const ImagesHomeProduct = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
