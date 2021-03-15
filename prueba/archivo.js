const readline = require('readline');

function archivo(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    rl.question('Ingrese el texto que será analizado: ', (answer) => {
        var letras = answer.split("");

        var nparentesisAbierto = 0,
        nparentesisCerrado = 0,
        nllaveAbierto = 0,
        nllaveCerrado = 0,
        ncorcheteAbierto = 0,
        ncorcheteCerrado = 0;

        var nerrorpCerrado = 0,
        nerrorlCerrada = 0,
        nerrorcCerrado = 0;        
        
        var error = "";
        letras.forEach(caracter => {
            switch(caracter)
            {
                case '(':
                    nparentesisAbierto++;
                    break;
                case ')':
                    if((nparentesisCerrado+1) > nparentesisAbierto)
                    {
                        nerrorpCerrado++;
                    }
                    else{
                        nparentesisCerrado++;
                    }
                    break;
                case '{':
                    nllaveAbierto++;
                    break;
                case '}':
                    if((nllaveCerrado + 1) > nllaveAbierto)
                    {
                        nerrorlCerrada++;
                    }
                    {
                        nllaveCerrado++;
                    }
                    break;
                case '[':
                    ncorcheteAbierto++;
                    break;
                case ']':
                    if((ncorcheteCerrado + 1) > ncorcheteAbierto)
                    {
                        nerrorcCerrado++;
                    }
                    else{
                        ncorcheteCerrado++;
                    }
                    break;
            }
        });
        if(nerrorpCerrado > 0)
        {
            error += " - Se ha(n) cerrado "+ nerrorpCerrado + " paréntesis sin haberlo(s) abierto primero. \n";
        }
        if(nerrorlCerrada > 0)
        {
            error += " - Se ha(n) cerrado "+ nerrorlCerrada + " llave(s) sin haberla(s) abierto primero. \n";
        }
        if(nerrorcCerrado > 0)
        {
            error += " - Se ha(n) cerrado "+ nerrorcCerrado + " corchete(s) sin haberlo(s) abierto primero. \n";
        }
        if(nparentesisCerrado < nparentesisAbierto)
        {
            error += " - Existe(n) "+ (nparentesisAbierto-nparentesisCerrado) +" paréntesis que no ha(n) sido cerrado(s). \n";
        }
        if(nllaveCerrado < nllaveAbierto)
        {
            error += " - Existe(n) "+ (nllaveAbierto-nllaveCerrado)+ " llave(s) que no ha(n) sido cerrada(s). \n";
        }
        if(ncorcheteCerrado < ncorcheteAbierto)
        {
            error += " - Existe(n) "+ (ncorcheteAbierto-ncorcheteCerrado)+" corchete(s) que no ha(n) sido cerrado(s). \n";
        }
        
        if(error == "")
        {
            console.log("\x1b[32m","El archivo se encuentra correctamente escrito.","\x1b[0m");
        }
        else{
            console.log("\x1b[31m","Se presentan los siguientes errores:");
            console.log(error,"\x1b[0m");
        }
        rl.close();
    });
}

archivo();