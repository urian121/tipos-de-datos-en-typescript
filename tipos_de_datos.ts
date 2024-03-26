/**
 * ARRAYS (string, number, boolean, object, any)
 */

// Arreglo de números:
const numeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto:
const nombres: string[] = ["Juan", "María", "Pedro"];

// Arreglo de booleanos:
const valoresBool: boolean[] = [true, false, true];

 /**
  * BOOLEANS (true o false)
 */

const bool1: boolean = true;
const bool2: boolean = false;
 
/**
 * CLASES   
 */
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}   


/**
 * ENUM
 */

// Definición de un enum para días de la semana
enum DiasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo,
  }


// Enum con valores de cadena (String Enums):
  enum Colores {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul",
  }

/**
 * FUNCIONES
 */

// Declaración de función con tipado explícito:
function sumar(a: number, b: number): number {
  return a + b;
}

// Funciones flecha con retorno implícito (inferido por TypeScript):
const dividir = (a: number, b: number) => a / b;

// Funciones con parámetros opcionales:
function saludar(nombre: string, edad?: number): string {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  } else {
    return `Hola, mi nombre es ${nombre}.`;
  }
}

// Funciones con parámetros por defecto:
function saludar2(nombre: string, edad: number = 30): string {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}

/**
 * INTERFACES
 */
interface Persona {
  nombre: string;
  edad: number;
}

// Interface con propiedades opcionales:
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// Interface para funciones:
interface Comparador {
  (a: number, b: number): boolean;
}

// Interface para clases (class interfaces):
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

/**
 * NULL
 */
// Declaración de una variable con valor null
let variablenull: null;
// Asignación de valor null
variablenull = null;

/**
 * NUMEROS
 */

const num1: number = 10;

// Notación exponencial:
const num3: number = 2.5e3; // 2.5 * 10^3 = 2500

// Notación exponencial negativa:
const num4: number = 1.5e-2; // 1.5 * 10^-2 = 0.015

// Hexadecimales (base 16) utilizando el prefijo "0x":
const num5: number = 0xA; // Valor decimal: 10

// Octales (base 8) utilizando el prefijo "0o":
const num6: number = 0o12; // Valor decimal: 10

// Binarios (base 2) utilizando el prefijo "0b":
const num7: number = 0b1010; // Valor decimal: 10

/**
 * UNDEFINED
 */
// Declaración de una variable con valor undefined
let variableUndefined: undefined;

// Asignación de valor undefined
variableUndefined = undefined;

/**
 * TYPES
 */

// Type básico:
type Numero = number;

// Type básico Objeto Literal:
type Persona1 = {
    nombre: string;
    edad: number;
}

// Type con union types:
type Nombre = string | null;

// Type con propiedades opcionales:
type Producto1 = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Type para funciones:
type Comparador1 = {
    (a: number, b: number): boolean;
}

// Type para clases (class Types):
type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}

/**
 * STRINGS
 */

// Comillas dobles:
const str1: string = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2: string = 'Hola, soy una cadena con comillas simples.';

// Template literals (backticks):
const nombre: string = 'Juan';
const edad: number = 30;

const str3: string = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

/**
 * OBJETOS
 */
const programador = {
    nombre: "Sergie Code",
    casado: false,
    cursosEnYoutube: 4,
    cursos: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    viajeAEuropa: undefined,
    viajeAEstadosUnidos: null
};