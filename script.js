const btn = document.querySelector("button")
const textcontent = document.getElementById("text")


btn.addEventListener("click",() => {
setTimeout(function (){
        textcontent.innerText = "10"

        setTimeout(function(){
            textcontent.innerText = "9"
            setTimeout(function(){
                textcontent.innerText = "8"
                setTimeout(function(){
                    textcontent.innerText = "7"
                    setTimeout(function(){
                        textcontent.innerText = "6"
                        setTimeout(function(){
                            textcontent.innerText = "5"
                            setTimeout(function(){
                                textcontent.innerText = "4"
                                setTimeout(function(){
                                    textcontent.innerText = "3"
                                    setTimeout(function(){
                                        textcontent.innerText = "2"
                                        setTimeout(function(){
                                            textcontent.innerText = "1"
                                            setTimeout(function(){
                                                textcontent.innerText = "Happy Independence Day"
                                                                          },1000)
                                                                     },1000)
                                                                },1000)
                                                          },1000)
                                                    },1000)
                                              },1000)
                                        },1000)
                                 },1000)
                         },1000)
                  },1000)
            },1000)
     });
