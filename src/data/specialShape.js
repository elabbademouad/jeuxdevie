import Cell from './../Classes/Cell'
const specialShape=[
    {
        Name :'Balise',
        Cells : [
            new Cell('cell',5,5),
            new Cell('cell',5,6),
            new Cell('cell',6,6),
            new Cell('cell',6,5),
            new Cell('cell',7,7),
            new Cell('cell',8,7),
            new Cell('cell',8,8),
            new Cell('cell',7,8)
        ]
    },
    {
        Name :'Clignotant',
        Cells : [
            new Cell('cell',7,6),
            new Cell('cell',7,7),
            new Cell('cell',7,8)
        ]
    },
    {
        Name :'Pentapole',
        Cells : [
            new Cell('cell',4,4),
            new Cell('cell',4,5),
            new Cell('cell',5,4),
            new Cell('cell',6,5),
            new Cell('cell',6,7),
            new Cell('cell',8,7),
            new Cell('cell',8,9),
            new Cell('cell',10,9),
            new Cell('cell',10,11),
            new Cell('cell',11,11),
            new Cell('cell',11,10)
        ]
    },
    {
        Name :'Casquette',
        Cells : [
            new Cell('cell',6,6),
            new Cell('cell',6,7),
            new Cell('cell',7,8),
            new Cell('cell',8,8),
            new Cell('cell',8,7),
            new Cell('cell',8,6),
            new Cell('cell',8,5),
            new Cell('cell',7,5)
        ]
    },
    {
        Name :'Moquerie',
        Cells : [
            new Cell('cell',6,2),
            new Cell('cell',8,2),
            new Cell('cell',7,3),
            new Cell('cell',7,4),
            new Cell('cell',7,5),
            new Cell('cell',7,6),
            new Cell('cell',7,8),
            new Cell('cell',7,9),
            new Cell('cell',7,10),
            new Cell('cell',7,11),
            new Cell('cell',6,12),
            new Cell('cell',8,12),
            new Cell('cell',6,7),
            new Cell('cell',5,7),
            new Cell('cell',4,7),
            new Cell('cell',3,7),
            new Cell('cell',2,7),
            new Cell('cell',8,7),
            new Cell('cell',9,7),
            new Cell('cell',10,7),
            new Cell('cell',11,7),
            new Cell('cell',12,7),
            new Cell('cell',11,5),
            new Cell('cell',10,5),
            new Cell('cell',9,5),
            new Cell('cell',9,4),
            new Cell('cell',10,3),
            new Cell('cell',11,9),
            new Cell('cell',10,9),
            new Cell('cell',9,9),
            new Cell('cell',9,10),
            new Cell('cell',10,11),
            new Cell('cell',3,5),
            new Cell('cell',4,5),
            new Cell('cell',5,5),
            new Cell('cell',5,4),
            new Cell('cell',4,3),
            new Cell('cell',3,9),
            new Cell('cell',4,9),
            new Cell('cell',5,9),
            new Cell('cell',5,10),
            new Cell('cell',4,11),
        ]
    },
    {
        Name :'Quad',
        Cells : [
            new Cell('cell',5,5),
            new Cell('cell',6,5),
            new Cell('cell',5,6),
            new Cell('cell',6,7),
            new Cell('cell',5,9),
            new Cell('cell',5,10),
            new Cell('cell',6,10),
            new Cell('cell',7,9),
            new Cell('cell',9,10),
            new Cell('cell',10,10),
            new Cell('cell',10,9),
            new Cell('cell',9,8),
            new Cell('cell',8,6),
            new Cell('cell',9,5),
            new Cell('cell',10,5),
            new Cell('cell',10,6),
        ]
    },
    {
        Name :'Quad incliné',
        Cells : [
            new Cell('cell',4,5),
            new Cell('cell',5,5),
            new Cell('cell',4,6),
            new Cell('cell',5,7),
            new Cell('cell',5,9),
            new Cell('cell',5,10),
            new Cell('cell',6,10),
            new Cell('cell',7,9),
            new Cell('cell',9,9),
            new Cell('cell',10,9),
            new Cell('cell',10,8),
            new Cell('cell',9,7),
            new Cell('cell',9,5),
            new Cell('cell',9,4),
            new Cell('cell',8,4),
            new Cell('cell',7,5),
        ]
    },
]
export default specialShape;