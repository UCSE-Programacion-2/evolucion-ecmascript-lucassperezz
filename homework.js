// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  return edad >= 18 ? 'mayor' : 'menor';
}

function leerModuloCommonJS() {
  // eslint-disable-next-line global-require
  const { nombreMotor, versionObjetivo } = require('./modulos/constantes-cjs.cjs');
  return `${nombreMotor} ${versionObjetivo}`;
}

async function leerModuloESM() {
  // eslint-disable-next-line import/extensions
  const modulo = await import('./modulos/constantes-esm.mjs');
  const standard = modulo.standardModulo ?? modulo.default.standardModulo;
  const sintaxis = modulo.sintaxisImport ?? modulo.default.sintaxisImport;
  return `${standard} | ${sintaxis}`;
}

function combinarArraysConSpread(base, extras) {
  return [...base, ...extras];
}

function combinarObjetosConSpread(base, override) {
  return { ...base, ...override };
}

function recolectarNotas(materia, ...notas) {
  return { materia, notas };
}

function obtenerPreferenciaColor(usuario) {
  return usuario?.preferencias?.color ?? 'sin-preferencia';
}

function desestructurarPerfil(perfil) {
  const {
    nombre: nombrePersona,
    edad: edadPersona,
    direccion: { ciudad: ciudadActual },
  } = perfil;
  return { nombrePersona, edadPersona, ciudadActual };
}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Soy ${this.nombre} y tengo ${this.edad} anios.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  presentarse() {
    return `${super.presentarse()} Estudio ${this.carrera}.`;
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((fechaFin - fechaInicio) / msPerDay);
}

function explicarConcurrenciaYParalelismo() {
  return {
    concurrencia: 'Multiples tareas progresan en periodos superpuestos, intercaladas en el tiempo en un mismo hilo.',
    paralelismo: 'Multiples tareas se ejecutan literalmente al mismo tiempo en distintos nucleos o workers.',
  };
}

function promesaDemorada(valor, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), ms);
  });
}

function promesaConValidacion(numero) {
  return new Promise((resolve, reject) => {
    if (numero >= 0) {
      resolve(`ok:${numero}`);
    } else {
      reject(new Error('numero-invalido'));
    }
  });
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};