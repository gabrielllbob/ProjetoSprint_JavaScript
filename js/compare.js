
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if (carArr.length >= 2) {
                alert("Você só pode comparar no máximo 2 veículos.");
                el.checked = false;
                return;
            }
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }            
        } else {
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    let car1 = carArr[0];
    let car2 = carArr[1];
    
    document.getElementById("compare_image_0").src = car1.image;
    document.getElementById("compare_image_1").src = car2.image;

    document.getElementById("compare_modelo_0").innerText = car1.nome;
    document.getElementById("compare_modelo_1").innerText = car2.nome;

    document.getElementById("compare_alturacacamba_0").innerText = car1.alturaCacamba;
    document.getElementById("compare_alturacacamba_1").innerText = car2.alturaCacamba;

    document.getElementById("compare_alturaveiculo_0").innerText = car1.alturaVeiculo;
    document.getElementById("compare_alturaveiculo_1").innerText = car2.alturaVeiculo;

    document.getElementById("compare_alturasolo_0").innerText = car1.alturaSolo;
    document.getElementById("compare_alturasolo_1").innerText = car2.alturaSolo;

    document.getElementById("compare_capacidadecarga_0").innerText = car1.capacidadeCarga;
    document.getElementById("compare_capacidadecarga_1").innerText = car2.capacidadeCarga;

    document.getElementById("compare_motor_0").innerText = car1.motor;
    document.getElementById("compare_motor_1").innerText = car2.motor;

    document.getElementById("compare_potencia_0").innerText = car1.potencia;
    document.getElementById("compare_potencia_1").innerText = car2.potencia;

    document.getElementById("compare_volumecacamba_0").innerText = car1.volumeCacamba;
    document.getElementById("compare_volumecacamba_1").innerText = car2.volumeCacamba;

    document.getElementById("compare_roda_0").innerText = car1.roda;
    document.getElementById("compare_roda_1").innerText = car2.roda;    

    document.getElementById("compare_preco_0").innerText = car1.preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
    document.getElementById("compare_preco_1").innerText = car2.preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
}
