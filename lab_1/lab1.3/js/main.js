document.querySelector('.btn').onclick = myClick;
let count=0;
let word;
function  myClick(){
    ++count;
    let words=[ 
        "зима",
        "весна",
        "літо",
        "осінь"
    ];
    if(count%2!=0){
        document.querySelector('.reply').innerHTML = '';
            word = words[ Math.floor(Math.random() * words.length)];
            if(word == 'зима'){
                document.querySelector('.out').innerHTML = 'Махнула птиця крилом і покрила весь світ білим килимом.';
        
            }
            if(word == 'весна'){
                document.querySelector('.out').innerHTML = 'До нас вона прийшла з квітами, У яскравому, строкатому сарафані. І рум’яна, і ясна, А звуть її ..';
            }
            if(word == 'літо'){
                document.querySelector('.out').innerHTML = 'Довгоочікувана пора! Дітвора кричить: “Ура! Що ж за це радість? Настало …';
        
            }
            if(word == 'осінь'){
                document.querySelector('.out').innerHTML = 'Несу я врожаї, і поля знову посіваю, Птахів на південь відправляю, та дерева роздягаю, Але не торкаюся ялинок і сосен, Хто я? …';
            }
    }
    else if(count%2==0){
        verify(word);
    }
}
function verify(word){
    let name='', change;
    name = document.querySelector('.text').value;
    if(name==word){
        change='Правильно';
    }
    else{
        change='Неправильно';
    }
    document.querySelector('.reply').innerHTML = change;
}



