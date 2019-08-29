const images = [
    'https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/d/d9/OGGY_PERSO.png/revision/latest?cb=20181112161051',
    'https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/c/cf/JACK_PERSO.png/revision/latest?cb=20171129180205',
    'https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/a/a4/OLIVIA_PERSO.png/revision/latest?cb=20171129180221',
    'https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/7/75/Monica.jpg/revision/latest/scale-to-width-down/1000?cb=20190627194104',
    'https://oggy.com/wp-content/uploads/2017/09/JOEY_PERSO.png',
    'https://vignette.wikia.nocookie.net/xilam/images/0/06/Marky_Perso.png/revision/latest?cb=20190716143959',
    'https://vignette.wikia.nocookie.net/xilam/images/3/3d/Dee_Dee_Perso.png/revision/latest?cb=20190716144401',
    'https://avatarfiles.alphacoders.com/136/136083.jpg',
    'https://cdn140.picsart.com/243427788034212.png?r240x240'
]

export const getImage = () => {
    var ran = Math.floor(Math.random() * images.length);
    return images[ran];
}