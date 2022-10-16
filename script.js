
        const butt = document.getElementById('button');
        const name = document.getElementById('name');
        const info = document.getElementById('info');
        const month = document.getElementById('mm');
        const year = document.getElementById('yy')
        const numoncard = document.getElementById('number');
        const cardnum = document.getElementById('cardnum');
        const placeholder = document.getElementById('placeholder');
        const backtext = document.getElementById('backtext');
        const cvc = document.getElementById('cvc');
        const numblank = document.getElementById('numblank')
        const mmblank = document.getElementById('mmblank');
        const cvcblank = document.getElementById('cvcblank');
        butt.addEventListener('click', display);
        function display(){
            if(/^\d+$/.test(cardnum.value) == false){
                numblank.classList.add('show');
                
            }
            if(month.value.length <= 0){
                mmblank.classList.add('show');
            }
            if(cvc.value.length <= 0){
                cvcblank.classList.add('show');
            }else{
            backtext.textContent = cvc.value;
           name.innerHTML = `<span> ${placeholder.value.toUpperCase()}</span> <span>${mm.value}/${yy.value}</span></h3>`
           numoncard.innerHTML = `
                <span class="nums">${cardnum.value.slice(0,4)}</span> 
                <span class="nums">${cardnum.value.slice(4,8)}</span>  
                <span class="nums">${cardnum.value.slice(8,12)}</span>  
                <span class="nums">${cardnum.value.slice(12,16)}</span> `
           info.innerHTML = `
           <div class="container">
           <div class="sv">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
            </div>
            <div class="thanks">
                <p>THANK YOU!</p>
            </div>
            <div class="sub">We've added your card details</div>
            <div class="button">
                <button class="butt">Continue</button>
            </div>
            </div>`
            }
        };