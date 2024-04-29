

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // console.log("Irum");
        const x = e.pageX
        const y = e.pageY

        // console.log(x, y);

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop, buttonLeft);


        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // console.log(xInside, yInside);

        const circle = document.createElement('span')
        // console.log(circle);
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})
// button.addEventListener('click', (e) => {
//     const x = e.pageX
//     const y = e.pageY

//     const buttonTop = e.target.offsetTop
//     const buttonLeft = e.target.offsetLeft


//     const xInside = x - buttonLeft
//     const yInside = y - buttonTop

//     console.log(xInside, yInside);

//     const circle = document.createElement('span')
//     circle.classList.add('circle')
//     circle.style.top = yInside + 'px'
//     circle.style.left = xInside + 'px'

//     this.appendChild(circle)

//     setTimeout(() => circle.remove(), 500)

// })
// })
