const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

for(toy of toys) {
    if (toy.name.includes("gato") == true) {
        toys.splice(toy,1);
    } else {
        console.log(toy);
    }
}


