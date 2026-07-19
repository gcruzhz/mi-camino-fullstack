# Justificando filas y columnas

Aprendamos mas sobre como podemos justificar elementos flexibles dentro de sus contenedor

Center
Para colocar los elementos flex en el centro del eje principal del contenedor, establecemos  **justifi-content:center;**

               123

Space around
Si queremos tener elementos bien espaciados dentro de un contenedor, usamos el valor **justify-content:space-around;**

      1         2         3

Space between
Para mantener el espacio entre los elementos y tener los primeros y ultimos elementos cerca de los lados del contenedor, usamos el valor **justify-content:space-between;**
1               2               3 

# Justificando filas y columnas Parte 2

Echemos un vistazo a como se ve el contenido justificado cuando flex-direction esta configurado en column

Center

           1
           2
           3

Space around
Si queremos tener elementos bien espaciados verticalmente dentro de un contenedor, usamos el valor **space-around**
           1

           2

           3

Spece between
Para mantener el espacio entre los elementos y tener el primer y ultimo elemento cerca de los lados del contenedor, usamos **space-between**
            1



            2



            3


Justify-content funciona con flex-direction:column;, pero solo podemos verlo funcionar si el contenedor es mas alto que todos los elementos.  Ejemplo en el codigo de abajo se establece altura en 200px

``
.container {
    border: 2px solid lightgray;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
}
.item {
    border: 3px solid #457081;
}
``

