# TIPOS DE DATOS EN TYPESCRIPT

#### El proyecto tiene como objetivo proporcionar una comprensión completa y clara de los tipos de datos en TypeScript. A través de ejemplos concisos y explicaciones claras, los usuarios podrán familiarizarse con conceptos fundamentales como números, cadenas, matrices, clases, interfaces y más, facilitando así el desarrollo de aplicaciones robustas y seguras.

#### Number, Representa valores numéricos, ya sean enteros o de punto flotante.

    let age: number = 25;

#### String, Almacena datos de texto, como palabras o frases, dentro de comillas simples o dobles.

    let name: string = "John";

#### Array de Numeros, Contiene una colección ordenada de elementos del mismo tipo o de diferentes tipos.

    let numbers: number[] = [1, 2, 3, 4, 5];

#### Boolean, Representa un valor lógico que puede ser verdadero o falso.

    let isStudent: boolean = true;

#### Clases, Son plantillas para la creación de objetos que encapsulan datos para un conjunto específico de operaciones.

    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

    }

#### Enum, Permite definir un conjunto de constantes con nombre, facilitando el trabajo con conjuntos de valores relacionados.

    enum Direction {
        Up,
        Down,
        Left,
        Right

    }

#### Funciones, Bloques de código reutilizables diseñados para realizar una tarea específica.

    function greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }

#### Interfaces, Define la estructura que un objeto debe seguir, especificando los tipos de datos de sus propiedades.

    interface Car {
        brand: string;
        model: string;
        year: number;

    }

    let myCar: Car = { brand: "Toyota", model: "Corolla", year: 2022 };

#### Type, Permite definir nuevos tipos de datos que pueden ser reutilizados en diferentes partes del código.

    type Point = {
        x: number;
        y: number;
    }

    let point: Point = { x: 10, y: 20 };

#### Objetos, Estructuras de datos que contienen propiedades y métodos para representar algo del mundo real.

    let person: { name: string, age: number } = { name: "Alice", age: 30 };

#### Null, Representa la ausencia de valor intencionalmente asignado.

    let nullValue: null = null;

#### Void, Indica que una función no devuelve ningún valor.

    function sayHello(): void {
        console.log("Hello!");
    }

#### Any, Permite la flexibilidad de trabajar con cualquier tipo de datos, eliminando la verificación estática de tipos.

    let variable: any = "Hello";
    variable = 10; // No hay restricciones de tipo

#### Undefined, Indica que una variable no ha sido inicializada y no tiene un valor asignado.

    let undefinedValue: undefined = undefined;

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
