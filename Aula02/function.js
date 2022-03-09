const media = (primeiroSemestre, segundoSemestre) => {
    // tirando a média
    const total = (primeiroSemestre + segundoSemestre) / 2;
    return total;
}

// module.exports ou exports
// exports.nota1 = 7.5;
// exports.nota2 = 9.5;
// exports.media = media;
module.exports = {
    nota1: 7.5,
    nota2: 9.5,
    media: media
}