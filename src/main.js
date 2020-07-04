let screen = document.querySelector('#screen');
let taichi = document.querySelector('#taichi');
let style = document.querySelector('#style')

let string = `/*皆さん、こんにちは。
* 今日は中国の太極の絵をお描きしたいと思います。
* よろしくお願いします。
* 最初は、太極用のdivを用意します。*/
#taichi{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*divを円にして、太極らしく色を塗ります。*/
#taichi{
    border-radius:50%;
    box-shadow:0 0 10px grey;
    border:none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*そして、神秘的な丸を二ついれます。*/
#taichi::before{
    border-radius:50%;
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
    }
#taichi::after{
    border-radius:50%;
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)
    }      
/*そして、回しましょう！*/
#taichi{
    animation:spin 1s linear infinite;
}
/*以上です！ありがとうございました*/
`
let string2 = ``
let n = 0
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            string2 += string[n];
        }
        screen.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999)
        screen.scrollTo(0,99999)
        if (n< string.length-1){
            n=n+1
         step()
        }
    }, 10)
}
step();
