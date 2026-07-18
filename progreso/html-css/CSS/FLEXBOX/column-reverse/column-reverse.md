# Column reverse

Si queremos invertir la direccion de las columnas,
podemos usar column-reverse

flex-direction: column-reverse
significa que los elementos comienzan desde la parte inferior del contenedor y se muestran en el orden en que estan en el HTML

Cuando se utiliza column-reverse, el cambio se vuelve masevidente cuando la altura del contenedor es mayor que la de los elemntos.

Notamos el cambio al añadir  al css height:300px

### QUIZ

¿Que sucede cuando establecemos flex-direction en column-reverse?
los elementos flex comienzan desde la parte superior

¿Que sucede cuando codificamos flex-direction:column-reverse; sin establecer un valor height para el contenedor?
la altura del contenedor es la altura total desus flex-items

¿que mostrara el html con column-reverse?
Los numeros 4, 3, 2, 1 en una columna