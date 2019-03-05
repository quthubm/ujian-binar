const input = document.querySelectorAll('.form-control')
const submit = document.getElementById('submit')
var x = false;
submit.addEventListener('click', function(){

    for(var i = 0; i < input.length; i++){
        if(input[i].value == ''){
            x = true;
        }
        else if(i == input.length-1){
            for(var i = 0; i < 9; i++){
                if(input[i].value !== ''){
                    input[i].value = ''
                }
            }
            alert('BERHASIL SUBMIT FORM')
        }
    }
    if(x == true){
        alert('ISIAN ANDA TIDAK LENGKAP')
    }
})
