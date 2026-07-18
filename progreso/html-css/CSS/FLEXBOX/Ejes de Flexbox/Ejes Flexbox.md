## Flexbox
La web esta compuesta por todo tipo de sitios web diferentes de todo el mundo que estan en diferentes idiomas

Flexbox es una caracteristica mas reciente de CSS diseñada para funcionar de la misma manera para una comunidad global de desarrolladores y usuarios web

Los sitios web pueden mostrar contenido de izquierda a dereche, de arriba a abajo, o de muchas maneras

Flexbox esta diseñado para ser adaptable a cualquiera de estos casos de uso

El flex-direction define lo que se conoce como el eje principal una linea imaginaria que se refiere a la direccion y orientacion de los elementos flexibles

<------>
  1234

  En los sitios web en los que estamos trabajando flex-direction: row significa que el ejeprincipal es hotizontal, comienza desde la izquienda y termina a la derecha

  flex-direction:row-reverse significa que el eje principal es horizontal, pero ahora comienza desde la derecha y termina en el lado izquierdo

  Para definir el eje vertical como el eje principal podemos establecer flex-direction a column o column-reverse

    ^
  1 |
  2 |
  3 |
    v

    flex-direction:column significa que el eje principal es vertical, comienza desde la parte superior y termina en la parte inferior

    Flexbox describe donde los elementos "comienzan" y "terminan" en relacion con el eje principal

## Quiz 
    ¿Que define el eje principal?
    la direccion de flexion

    ¿Que sucede cuando cambiamos flex-direction de row a row-reverse?
    El inicio y el final del eje principal cambian, pero la orientacion no
 
 ¿Que hace flex-direction cuando se establece en column-reverse?
 hace que el eje principal sea vertical, comenzando desde la parte inferior y terminando en la parte superior

## Flexbox parte 2

Los contenedores de flexbox tambien tienen un eje trnasversal, que es una linea imaginaria perpendicular al eje principal

La propiedad flex-direction denota el eje principal. Asi que con flex-direction: row, el eje princial sera horizontal y el eje trasnversal vertical

             ^
 1 2 3 4     |
             v

Para column y column-reverse, el eje transversal es siempre horizontal

 <----------> 
      1 
      2
      3

 ## Quiz 2

 ¿Que es el eje transversal?
  una linea imaginaria perpendicular al eje principal    

  ¿Que sucede cuando flex-direction se establece en row o row-reverse?
  el eje transversal es vertical

  ¿Donde comienza el eje transversal cuando flex-direction esta configurado en row?
  Comienza desde arriba

  ¿que sucede cuando flex-direction se establece en column o column-reverse?
  El eje transversal es horizontal

  ¿Donde comienza el eje transversal cuando flex-direction esta configurado en column?
  comienza desde la izquierda
