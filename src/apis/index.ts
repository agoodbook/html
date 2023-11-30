const http = new XMLHttpRequest();

http.addEventListener('load', ()=> {
    if (http.status === 200) {
        console.log(http)
    }
})

http.open('get', 'https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn');

http.send()