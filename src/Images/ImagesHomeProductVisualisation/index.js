function importAll(r) {
    return r.keys().map(r);
}
export const ImagesHomeProductVisualisation = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
