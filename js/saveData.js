$(function(){
    let storage = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : [];
//                  se tiver dados                                              se nao retorna sem nada
    $(document).on("submit", "#cadastraProduto", function(){
        //pegar valor dos campos
        //val puxa o valor
        let title = $("#title").val();
        let description = $("#description").val();
        let img = $("#img").val();
        let price = $("#price").val();    

        //criar obj onde sera gravado esses valores
        let item = {
            //propriedade : valoriavel
            title : title,
            description : description,
            img :img,
            price : price
        }

        //add item no array de produtos (storage)
        storage.push(item);

        //transformar os dados em string json e salvar no storage
        localStorage.setItem("produtos", JSON.stringify(storage));

        //direcionar usoario pra index.html(home)
        // window.location.href = "index.html";


        //atualiza a tabela
        loadProdutos();
        return false;
    })

    let loadProdutos = () => {
        let estrutura = '';
        let lista = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : [];
        for(pos in lista){
            estrutura += `
                <tr>
                    <td>${lista[pos].title}</td>
                    <td>${lista[pos].price}</td>
                    <td>${lista[pos].img}</td>
                    <td>${lista[pos].description}</td>
                    <td>
                        <a href="#" class="btn btn-info editaItem">E</a>
                        <a href="#" class="btn btn-danger deletaItem">D</a>
                    </td>
                    
                </tr>
            `
        }
        
        //injeta items
        $('#loadProdutos').html(estrutura);
    }
    loadProdutos();

    //deleta um item
    $(document).on("click", ".deletaItem", function(){

        let itemId = $(this).attr("rel");
        storage.splice(itemId, 1)
        localStorage.setItem("produtos", JSON.stringify(storage));
        loadProdutos();
        return false;
    })
    loadProdutos();
})