# Prueba técnica

## Elaborar un CRUD de usuarios en donde se solicita: ID, Nombre completo, Fecha de cumpleaños, calcular edad, foto y dirección.

### ¿Que se elaboro?
El proyecto no fue terminado en tiempo adecuado debido a que tuve problemas con mi angular (no me detectaba el cambio de rutas ni el HTML que escribia) por ende, perdi mucho tiempo buscando una solucion, creando proyectos y demas, por eso mismo la creacion del proyecto no cuadra con el tiempo en que se me dijo.

#### HTML
Para la estructuración del HTML decidi manejar un menu de 2 botones, uno que invocara la seccion derecha1 (que es registro) y otro que activara seccion derecha2 (que es listar). De este modo nos ahorramos componentes y podemos trabajar con la el array que se nos permitio usar. Despues de todo, se valia. Ya que no se obligo usar Excel o un framework back para un back ligero.

Habia otra alternativa, crear mas componentes, sin embargo seria complicarse un poco mas ya que tendriamos que ingeniar manera de enviar el array mediante un JSON, lo cual... Simplemente me aventure a hacerlo de la manera, en el mismo componente y solamente alternar entre los menus usando el mismo arreglo.

#### CSS
Para el estilo solamente opte por tonos azules, lamentablemente no pude recrear en su totalidad lo que tenia en mente, por lo mismo... perdi demasiado tiempo.

#### Componentes
Para obtener los datos de los inputs unicamente use el form module que nos brinda angular, de esta manera enlazamos los inputs, obtenemos datos y los guardamos en el arreglo. Bastante sencillo el proceso, no obstante se perdio mucho tiempo en el retraso comentado. 
