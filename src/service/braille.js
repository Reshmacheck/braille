let objet = {
    a: '⠁',
    b: '⠃',
    c: '⠉',
    d:'⠙',
    e:'⠑',
    f:'⠋',
    g:'⠛',
    h:'⠓',
    i:'⠊',
    j:'⠚',
    k:'⠅',
    l:'⠇',
    m:'⠍',
    n:'⠝',
    o:'⠕',
    p:'⠏',
    q:'⠟',
    r:'⠗',
    s:'⠎',
    t:'⠞',
    u:'⠥',
    v:'⠧',
    w:'⠺',
    x:'⠭',
    y:'⠽',
    z:'⠵',
    _:"-"
};
const transcription = (saisie) =>{
    let result = saisie.split("").map(value => objet[value]).join("");
    return result;
};

export default transcription