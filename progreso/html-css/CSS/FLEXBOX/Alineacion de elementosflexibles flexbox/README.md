# Alineacion de elementos flexibles

Aprendamos como alinear elementos a lo largo del eje transversal

para alinear elementos a lo largo del eje transversal usamos la propiedad align-items

Start
Si aling-items esta configurado en flex-start, los elementos toman el tamaño de su contenido y estan al comienzo del eje transversal

********************
*123               *
*                  *
*                  *
********************

Center
Para centrar elementos dentro del contenedor, usamos center

********************
*                  *
*123               *
*                  *
********************

End
Configurar aling-items a flex-end empuja los elementos al final del eje transversal

********************
*                  *
*                  *
*123               *
********************

stretch

el valor predeterminado que tienen los elementos flex para alig-items es stretch, si flex-direction esta configurado en column, el valor stretch hace que los elementos llene todo el ancho del contenedor por que el eje transversal es horizontal

********************
*123               *
****               *
****               *
********************


## QUIZ

¿Que sucede cuando usamos la propiedad aling-items?
R. Los elementos se alinean en funcion del eje transversal

¿Cual es el valor predeterminado para aling-items?
R. stretch

¿Por que los elementos flexibles llenan automaticamente su contenedor horizontalmente cuando flex-direction esta configurado en column?
R. Debido a que el eje transversal es horizontal y los elemntosflexibles se estiran por defecto