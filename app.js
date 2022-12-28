const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
        
target.style.setProperty("--mouse-x", `${x}px`);
target.style.setProperty("--mouse-y", `${y}px`);
}

for(const tabs of document.querySelectorAll(".tabs")) {
    tabs.onmousemove = e => handleOnMouseMove(e);
}

const tabBtns = document.querySelectorAll(".tab");

tabBtns.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        tabBtns.forEach(function(item){
            item.classList.remove('active')
        })

        currentBtn.classList.add('active');
    });
});


