$(function(){
    let estrutura = '';

    let loadProdutos = () => {
        // $.ajax({
        //     url: "/produtos.json",
        //     dataType: "JSON",
        //     success: function (data) {
                //loop fazer produto             
                let lista = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : [];
                for (pos in lista) {
                    //estrutura = estrutura + `<div></div>`               
                    estrutura += `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                      <div class="card">
                        <img src="img/${lista[pos].img}" class="card-img-top">
                        <div class="card-body">
                              <h5 class="card-title">${lista[pos].title}</h5>
                              <p class="card-text">${lista[pos].description}</p>
                              <span class="badge btnValor text-success">R$: ${lista[pos].price}</span></h1><hr>
                              <a href="#" class="btn text-light btnCompra">COMPRAR</a>
                           </div>
                       </div>
                     </div>
                    `;
                }
                //injectar o conteudo no index
                $('#loadProdutos').html(estrutura)
            // }
        // })
    }
    loadProdutos()
})