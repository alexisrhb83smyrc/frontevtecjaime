# Prueba técnica

Se solicitó realizar un **CRUD** utilizando un Framework a elección del desarrollador. Dicho **CRUD** consiste en un contexto de una gestión de usuarios con los siguientes atributos:
	- ID
	- Nombre completo
	- Fecha de nacimiento
	- (Mediante la fecha de nacimiento, determinar la edad)
	- Dirección fisica de vivienda. 
	- Foto de perfil (Manejada en base64)


# Tecnologías seleccionadas

Para el desarrollo de este desafío técnico, use **Angular** como Framework Front, el cual consiste de HTML, CSS y TypeScript. No decidí usar SCSS porque simplemente no había necesidad técnica de hacerlo. 

Desde luego, también para el maquetado se utilizó **Figma** como buena práctica, siempre maquetado todo lo que tengo que hacer, de esta manera el proyecto a realizar tiene más estructura, se aprovechan de mejor manera los espacios y también hay menor cavidad a que por muy sencillo que sea el producto no es pretexto para que no tenga un diseño UX/UI adecuado.

## Maquetado en Figma

El maquetado respectivo, lo encuentran en el enlace publico adjuntado en este archivo. Opte por usar tonos azules solamente por mero gusto... A la mayoría de gente le gustan los temas Darks por ende, quise usar un diseño oscuro alternando entre diferentes tonalidades de azul marino y azul. También opte por recuadros y contenedores elegantes, en vez de hacerlo "pop" (estilo Rappi). 
[Maquetado de prueba técnica](https://www.figma.com/file/zjfIztjpk7I6Nm5Jai2WiS/Prueba-tecnica?type=design&mode=design&t=uZNR01A41Wzoh2Ii-1)


## Solución 
Para la solución de este desafío solamente tuve que usar un solo componente. ¿Por qué? No tenía la obligación de usar alguna tecnología Back para consumir datos, por lo que pude utilizar simplemente arreglos o bien archivos alternativos como lo podía ser un XLS. Como digo, únicamente se usó un arreglo llamado **usuarios**. 
También se utilizó el Form de angular para adquirir los datos de los inputs y almacenarlos en el dicho arreglo. Desde luego no todos los datos se trataron de igual manera, ya que tanto la imagen como calcular la edad requerían de hacer ciertos procesos antes de almacenar lo que se cargaba en los Inputs.

Se usaron banderas para alternar el contenido visible en el componente. De este modo me ahorre tener que pasar parámetros o tener que convertir en **JSON** los datos. Desde luego, lo ideal hubiese sido hacer esto, no obstante, decidí aventurarme e intentar de esta manera. 

### Registro
El registro es quizás lo más sencillo, nada más que solo tomar lo de los inputs y guardarlos en el arreglo.
### Borrar
Para esto, necesitamos adquirir el parámetro de ID del usuario en cuestión, lo obtenemos mediante un método de carga de datos de NgFor. De esta manera podemos hacer referencia a la card del usuario seleccionado en cuestión.
### Editar
La parte del CRUD que más cuesta por lo general, se hizo la recuperación de datos de manera similar a la de borrar, e hizo falta terminar la actualización de datos.

## Evidencias
A continuación, tenemos capturas de pantalla de la prueba técnica realizada:
