//Operador unário

    "operando1 operador"
    "operador operando1"

    x++
    ++x

    //Deletar algo 
    delete something;
    //Determinar tipo 
    typeof something; 


// Operador binário
    "operando1 operador operando2"

    1 + 2

    // in 
    something in somethingItems

    // Arrays
    var arvores = new array ("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
    0 in arvores;               //retorna true
    3 in arvores;               //retorna true
    6 in arvores;               //retorna false
    "cedro" in arvores;         //retorna false (você deve especificar o número do índice: "cedro in arvores [2]")
                                //não o valor naquele indice
    "lenght" in arvores;        //retorna true (lenght é uma propriedade de Array)

    //Objetos predefinidos
    "PI" in Math;               //retorna true
    var minhaString = new String ("coral");
    "lenght" in minhaString;    //retorna true

    //Objetos personalizados
    ver meucarro = {marca: "Honda", modelo "Accord", ano : 1998};
    "marca" in meucarro;        //retorna true
    "modelo" in meucarro;       //retorna true

    //instanceof
    objeto instanceof tipoObjeto
    
    var dia = new Date (2018, 12, 17);

    if (dia instanceof Date) {
        //code here
    }

