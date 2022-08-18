function importAll(r) {
    return r.keys().map(r);
}
export const ImagesHomeLogo = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
