# Ajuste de lementos flex

Aprendamos como evitar que los elementos flex se desborden fuera de su contenedor

Wrap

*****************************
*1 2 3 4 5 6 7 8 9 10 11 12 *
*13 14 15 16 17             *
*****************************

No wrap

*****************************
*1 2 3 4 5 6 7 8 9 10 11 12 * 13 14 15 16 17
*****************************


El valor predeterminado para flex-wrap es norap, eso significa que si los objetos no pueden reducirse mas dentro del contenedor, se desbordan fuera de el

## Configuraciones

Flex-direction: row;
Flex-wrap:nowrap;
*****************************
*1 2 3 4 5 6 7 8 9 10 11 12 * 13 14 15 16 17
*****************************

Flex-wrap:wrap;
*****************************
*1 2 3 4 5 6 7 8 9 10 11 12 *
*13 14 15 16 17             *
*****************************

Flex-wrap:wrapreverse;
*****************************
*13 14 15 16 17             *
*1 2 3 4 5 6 7 8 9 10 11 12 *
*****************************

Flex-direction: column;
Flex-wrap:nowrap;
*****************************
*1                          *
*****************************
 2
 3
 4
 5
 6

Flex-direction: column;
Flex-wrap:wrap;
*******************
*1 4 7 10 13 16 19*
*2 5 8 11 14 17 20*
*3 6 9 12 15 18 21*
*******************

Flex-direction: column;
Flex-wrap:wrap-reverse;
*******************
*19 16 13 10 7 4 1*
*20 17 14 11 8 5 2*
*21 18 15 12 9 6 3*
*******************

## QUIZ

Un contenedor flex es demasiado estrecho para todos sus elementos que comportamiento controla flex-wrap?
R. Como se desbordan los elementos cuando ya no caben

No estableces flex-wrap en un contenedor flex que valor se usa de forma predeterminada?
R. nowrap

Una fila de elemtos flex llega al borde del contenedor y usa flex-wrap:wrap Que ocurre despues?
R. Los eklementos continuan en una linea nueva

Un contenedor con direccion de fila usa wrap-reverse Adonde van los elementos que se desbordan?
R.A la fila superior