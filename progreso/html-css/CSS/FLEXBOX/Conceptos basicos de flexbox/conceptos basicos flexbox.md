## Quiz
¿Que sucede si aplicamos la propiedad display: flex a un hijo de un contenedor flex existente?
Se convierte en un contenedor flex ademas de ser el hijo de su contenedor padre

¿Es el elemento <h2> un padre de flexbox o un hijo de flexbox?

<!doctype html>
<html>
 <body> 
  <div class="container">
  <h1>cat</h1>
  <h2>Whiskers</h2>
  </div>
 </body>
</html>

En este caso, el elemento <h2> es un hijo de flexbox

Basado en el codigo a continuacion, ¿cuantas filas flexibles apareceran en la pagina?

<!doctype html>
<html>
 <head>
 <link rel="stylesheet" href="style.css"> 
  </head>
 <body> 
  <div class="container">
    <p class="item">First paragraph</p>
    <p class="item">Another paragraph</p>
  </div>
 </body>
</html>

Una fila

¿Cual es el ancho predeterminado de un elemento flex?
el ancho de su contenido

¿Cuando controlamos si los elementos flexibles se alinearn horizontal o verticalmente?
usando la propiedad flex-direction

¿como podemos saber, a partir del codigo a continuacion que la propiedad flex-direction esta configurada en row?

.container {
    display: flex;
    width: 300px;
}
.item {
    border 2px solid #987654;
}

Por que es el valor  predeterminado y asi no tenemos que especificarlo

Basado en el siguiente codigo ¿que tan anchos seran cada uno de los elementos flexibles

.container {
    border: solid 2px #806868;
    display: flex;
    flex-direction: column;
    width: 300px;
}
.item {
    border: 2px solid #457061
}

300 pixeles

Elige la definicion correcta del eje principal
El eje es una linea imaginaria perpendicular al eje transversal

¿En que caso es el eje trasnversalvertical?
cuando flex-directionestaconfigurado en row o row-reverse

Elige la declaracion CSS que hara que el eje transversal comience desde la izquierda
flex-direction: column