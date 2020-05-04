const createDoctor = (name, practice, address) => {
    return {
        name: name,
        practice: practice,
        address: address
    }
}

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

let BowWowKennels = [];

BowWowKennels.push(createPet('Tubs', 'Terrier'))
BowWowKennels.push(createPet('Tops', 'Retriever'))
BowWowKennels.push(createPet('Tums', 'Pug'))

console.log(BowWowKennels);

let doctorPool = [];

doctorPool.push(createDoctor('Mario', 'Princess-Saving', 'Mushroom Kingdom'))
doctorPool.push(createDoctor('PPMD', 'Neutral Science', 'North Carolina'))

console.log(doctorPool);