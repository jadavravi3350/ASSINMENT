var ravi = document.getElementById("int1")

function fun1() {
    if (ravi.type == "password") {
        ravi.type = "text"
    }

    else {
        ravi.type = "password"
    }
}

// ******************

ravi2 = document.getElementById("int2");
ravi3 = document.getElementById("int3");
jadav1 = document.getElementById("ans1");

function fun2() {
    jadav1.innerHTML = parseInt(ravi2.value) + parseInt(ravi3.value);
}

function fun3() {
    jadav1.innerHTML = ravi2.value - ravi3.value;
}

function fun4() {
    jadav1.innerHTML = ravi2.value * ravi3.value;
}

function fun5() {
    jadav1.innerHTML = ravi2.value / ravi3.value;
}

function fun6() {

    jadav1.innerHTML = ravi2.value % ravi3.value;

}

ravi4 = document.getElementById("int4");
ravi5 = document.getElementById("int5");
ravi6 = document.getElementById("int6");
ravi7 = document.getElementById("int7");
ravi8 = document.getElementById("int8");
ravi9 = document.getElementById("int9");
ravi10 = document.getElementById("int10");


jadav2 = document.getElementById("ans2");
jadav3 = document.getElementById("ans3");


function fun7() {
    jadav2.innerHTML = parseInt(ravi4.value) + parseInt(ravi5.value) + parseInt(ravi6.value) + parseInt(ravi7.value) + parseInt(ravi8.value) + parseInt(ravi9.value) + parseInt(ravi10.value);

    jadav3.innerHTML = jadav2.innerHTML / 7 * 2
}

// *******************

const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    }

});