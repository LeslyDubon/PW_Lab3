let nid;
let lenguajes;

function inicio(){
    nid = 5;
    lenguajes = [{id: 1,
        Nombre: 'Portuguese', 
        Hablantes: 274000000,
        Origen: 'Old Latin',
        Familia:["Indo-European", "Romance"],
        Paises:["Angola", "Brazil","Portugal"]},
    {id: 2, 
        Nombre: 'Spanish', 
        Hablantes: 586000000,
        Origen: 'Old Latin',
        Familia:["Indo-European","Romance"],
        Paises:["Mexico", "United States","Colombia"]},
    {id: 3,
        Nombre: 'Italian', 
        Hablantes: 67000000,
        Origen: 'Old Latin',
        Familia:["Italic", "Romance Western","Romance"],
        Paises:["Angola", "Brazil","Mozambique"]},
    {id: 4,
        Nombre: 'German', 
        Hablantes: 110000000,
        Origen: 'Old High German',
        Familia:["Italic", "Romance Western","Romance"],
        Paises:["Angola", "Brazil","Mozambique"]}
    ]
}

function create(nombre, hablantes, origen, familia, paises){
    lenguajes.push({id: nid, 
                        Nombre: nombre, 
                        Hablantes:hablantes, 
                        Origen: origen, 
                        Familia: familia, 
                        Paises: paises});
    nid++;
    return lenguajes;
}

function update(id, nombre, hablantes, origen, familia, paises){
    const idFound = lenguajes.findIndex(element => element.id == id);
    console.log(idFound);
    if(idFound != null)
    {
        lenguajes[idFound] = {id: nid, 
            Nombre: nombre, 
            Hablantes:hablantes, 
            Origen: origen, 
            Familia: familia, 
            Paises: paises}
        return lenguajes[idFound];
    }
    else
    {
        return null;
    }
}

function readOne(id){
    const idFound = lenguajes.findIndex(element => element.id == id);
    return lenguajes[idFound];
}

function readAll(){
    return lenguajes;
}

function deleteOne(id){
    const idFound = lenguajes.findIndex(element => element.id == id);
    console.log(idFound);
    if(idFound != null)
    {
        lenguajes.splice(idFound, 1);
        return lenguajes;
    }
    else
    {
        return false;
    }
}

exports.inicio = inicio;
exports.readOne = readOne;
exports.readAll = readAll;
exports.create = create;
exports.update = update;
exports.deleteOne = deleteOne;
