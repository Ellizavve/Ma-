const mode_for_click = document.getElementById("for_click")

function find_edit(){
    const surname = document.getElementsByTagName('span')[3]
    console.log(surname.innerText)
    surname.innerText = 'Sergienko'

    const name = document.getElementsByTagName('span')[4]
    console.log(name.innerText)
    name.innerText = 'Elizaveta'

    const father = document.getElementsByTagName('span')[5]
    console.log(father.innerText)
    father.innerText = 'Ivanovna'
}

mode_for_click.addEventListener("click", find_edit)