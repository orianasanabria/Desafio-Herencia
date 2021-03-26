let form = document.querySelector('form');
let propietario = document.getElementById('propietario');
let telefono = document.getElementById('telefono');
let direccion = document.getElementById('direccion');
let nombreMascota = document.getElementById('nombreMascota');
let tipo = document.getElementById('tipo');
let enfermedad = document.getElementById('enfermedad');
let resultado = document.getElementById('resultado');

class Propietario{
  constructor(nombre, direccion, telefono){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario(){
    return (`El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`)
  }
}

class Animal extends Propietario{
  constructor(nombre, direccion, telefono, tipo){
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo(){
    return this._tipo;
  }
}

class Mascota extends Animal{
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota(){
    return this._nombreMascota;
  }
  set nombreMascota(newNombreMascota){
    this._nombreMascota = newNombreMascota;
  }
  get enfermedad(){
    return this._enfermedad;
  }
  set enfermedad(newEnfermedad){
    this._enfermedad = newEnfermedad;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let tipoAnimal = tipo.value;

  if (tipoAnimal === 'perro'){
    const Perro = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML =
    `<li>${Perro.datosPropietario()}</li>
    <li>El tipo del animal es un: ${Perro.tipo}, mientras que el nombre de la mascota es: ${Perro.nombreMascota} y la enfermedad es: ${Perro.enfermedad}</li>`
  }

    else if (tipoAnimal === 'gato'){
    const Gato = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML =
    `<li>${Gato.datosPropietario()}</li>
    <li>El tipo del animal es un: ${Gato.tipo}, mientras que el nombre de la mascota es: ${Gato.nombreMascota} y la enfermedad es: ${Gato.enfermedad}</li>`
  }

    else if (tipoAnimal === 'conejo'){
    const Conejo = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML = 
    `<li>${Conejo.datosPropietario()}</li>
    <li>El tipo del animal es un: ${Conejo.tipo}, mientras que el nombre de la mascota es: ${Conejo.nombreMascota} y la enfermedad es: ${Conejo.enfermedad}</li>`
  }
});