let number = 0;
        let dec = document.querySelector(".decrease")
        let reset = document.querySelector(".reset")
        let inc = document.querySelector(".increase")
        let counter = document.querySelector(".number")
        
        function counterUpdater() {
            counter.innerHTML = number
        }
        dec.addEventListener("click",function dec() {
          number--
          counterUpdater()
        })
        reset.addEventListener("click",function reset() {
          number = 0
          counterUpdater()
        })
        inc.addEventListener("click",function inc() {
          number++
          counterUpdater()
        })


