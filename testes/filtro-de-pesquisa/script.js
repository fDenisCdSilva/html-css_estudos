function filtrar(){
    let input = document.getElementById('pesquisa')
    let filtro = input.value.toUpperCase()
    let menu = document.getElementById('menu')
    let menu_itens = menu.getElementsByTagName('li')
    for (let i = 0; i < menu_itens.length; i++) {
        let links = menu_itens[i].getElementsByTagName('a')[0]
        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menu_itens[i].style.display = ''
        } else {
            menu_itens[i].style.display = 'none'
        }
    }

}