const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function (){
        if(this.ligado){
            console.log("O carro já está ligado");
        } else{
            this.ligado = true;
            this.status();
        }
    },
    desligar: function (){
        if(!this.ligado){
            console.log("O carro já está desligado");
        } else if(this.velocidade == 0){
            this.ligado = false;
            this.status();
        }else{
            if(this.velocidade > 0){
                console.log("Não é possível desligar o carro em movimento. Desacelere para continuar");
            }
        }
    },
    acelerar: function (){
        if(!this.ligado){
            console.log("Não é possível acelerar um carro desligado");
        } else{
            this.velocidade += 10;
            this.status();
        }
    },
    desacelerar: function (){
        if(!this.ligado || this.velocidade == 0){
            console.log(`Não é possível desacelerar um carro ${this.velocidade == 0 ? "parado" : "desligado"}`);
        } else{
            this.velocidade -= 10;
            this.status();
        }
    },
    status: function (){
        console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${this.velocidade}.`);
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desligar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();