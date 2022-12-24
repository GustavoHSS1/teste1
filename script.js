function calcular() {
    let pn = document.getElementById('txtp')
    let sn = document.getElementById('txts')
    let res = document.getElementById('res')

    if (pn.value.length == 0 || sn.value.length == 0) {
        window.alert('[ERRO] Digite um número, para que possa calcular')
    } else {
        
        let pnum = Number (pn.value)
        let snum = Number (sn.value)
        let resul = Number (`${pnum + snum}`)

         res.innerHTML = `o resultado é: ${resul}`
    }
}