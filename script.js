document.addEventListener("DOMContentLoaded", function (params) {
   




 
    
    let calcular = document.querySelector("#calcular")
    let limpar = document.querySelector("#limpar")

    let inserir = document.createElement("p")
    let main = document.querySelector("main")

    

    let total_dia = document.createElement("p")


    let pao = document.querySelector("#pao")
    let queijo = document.querySelector("#queijo")
    let presunto = document.querySelector("#presunto")


    let valores = {
        qtdepao:0,
        qtdequeijo:0,
        qtdepresunto:0
    }

    let preco_final = {
        vfpao:0,
        vfqueijo:0,
        vfpresunto:0,

        vltotal:0
    }



    let dia = {
        totalpao:0,
        totalquejo:0,
        totalpresunto:0,
        total:0,

    }
    

    calcular.addEventListener("click",function(params) {
        

    

        valores.qtdepao = pao.value

        valores.qtdequeijo = queijo.value

        valores.qtdepresunto = presunto.value


        preco_final.vfpao = valores.qtdepao * 23.50

        preco_final.vfqueijo = valores.qtdequeijo * 45.30

        preco_final.vfpresunto = valores.qtdepresunto * 37.90

        preco_final.vltotal = preco_final.vfpao + preco_final.vfqueijo + preco_final.vfpresunto



        inserir.innerHTML ="Valor total: " + preco_final.vltotal

        main.appendChild(inserir)

        console.log(preco_final)




        dia.totalpao = dia.totalpao + preco_final.vfpao

        dia.totalquejo = dia.totalquejo + preco_final.vfqueijo

        dia.totalpresunto = dia.totalpresunto +  preco_final.vfpresunto

        dia.total = dia.total + preco_final.vltotal

        total_dia.innerHTML = dia.total

        console.log(dia.total)

        main.appendChild(total_dia)


    })

    limpar.addEventListener("click",function (params) {
        
        pao.value = ""

        queijo.value=""

        presunto.value=""
        
        inserir.innerHTML = ""


    })


/*
    if(reset_dia.getHours = "00:00"){

        dia.totalpao = 0
        dia.totalquejo = 0
        dia.totalpresunto = 0
        dia.total = 0
        total_dia.innerHTML = 0
    }

*/

    

})