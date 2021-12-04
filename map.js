function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
let count = 700,
    len = track.getTotalLength(),
    seg = len / (count + 1),
    pos = seg - 1,
    target = seg;

let numb = 0;
let city_id = 0;
let numeric = 0;
let numeric2 = 0;
let id = 0;
let prev_id = 0;
let days = 0;
let tt = 0;
let pipka_x_pos = 0;
let text_x_pos = 0;
let text_y_pos = 0;


let with_the_flow = true; //по течению или против
let stands_still = true;
let relax = false;
let modal = new bootstrap.Modal(document.querySelector("#modal"));
var current_datetime = new Date(1731, 3, 15);

function date_time() {
    var date = current_datetime;
    var day = zero_first_format(date.getDate());
    var month = zero_first_format(date.getMonth() + 1);
    var year = date.getFullYear();

    // return days+"."+month+"."+year;
    document.getElementById('time').innerHTML = day + "." + month + "." + year;
}
var cities_info = '1, Екатеринбург, 15!5, История про Екатеринбург|5, Горохово плотбище, -121!10, История про Горохово плотбище|10, Макаровская пристань, -150!5, История про Макаровская пристань|20, Уткинская пристань, 10!3, История про Уткинская пристань|25, Каменская пильная мельница, 10!2, История про Каменская пильная мельница|30, Курьинская пристань, 10!0, История про Курьинская пристань|35, Илимская пристань, -123!10, История про Илимская пристань|40, Сулемская пристань, 10!0, История про Сулемская пристань|50, Ослянская пристань, 10!0, История про Ослянская пристань|60, Камасино, 0!-10, История про Камасино|70, Чусовские городки, -55!-40, История про Чусовские городки|81, Васильев луг, -80!-20, История про Васильев луг|88, Ерошиха, -60!-10, История про Ерошиха|121, Оса, -30!-3, История про Оса|158, Сарапул, 10!0, История про Сарапул|175, Елабуга, 10!9, История про Елабуга|205, Свиные горы, -33!-22, История про Свиные горы|230, Рыбная слобода, 0!18, История про Рыбная слобода|240, Лаишево, -30!20, История про Лаишево|257, Казань, 10!3, История про Казань|260, Верхний Услон, -18!-10, История про Верхний Услон|290, Чебоксары, 10!-3, История про Чебоксары|298, Козьмодемьянск, -50!-10, История про Козьмодемьянск|320, Макарьевская ярмарка, -58!18, История про Макарьевская ярмарка|335, Нижний Новгород, -120!4, История про Нижний Новгород|340, Балахна, -5!-10, История про Балахна|400, Кострома, 5!-5, История про Кострома|415, Ярославль, -10!20, История про Ярославль|430, Рыбная Слобода, 0!-10, История про Рыбная Слобода|440, Молога, -25!-10, История про Молога|450, Мышкино, -70!3, История про Мышкино|460, Углич, 12!0, История про Углич|470, Калязин, 5!15, История про Калязин|510, Тверь, 0!-10, История про Тверь|518, Торжок, -35!16, История про Торжок|540, Вышний Волочёк, 8!0, История про Вышний Волочёк|580, Опеченская пристань, 10!0, История про Опеченская пристань|585, Боровичи, -15!-15, История про Боровичи|595, Потерпельская пристань, -150!-10, История про Потерпельская пристань|610, Великий Новгород, -50!20, История про Великий Новгород|665, Новая Лагода, 15!0, История про Новая Лагода|680, Шлиссельбург, -50!-14, История про Шлиссельбург|699, Санкт-Петербург, -40!25, История про Санкт-Петербург'

//function parse_cities2(map, cities_str, one_or_else) {
//    let cities_arr = cities_str.split("|");
//    if (one_or_else == 1) {
//        for (i = 0; i < cities_arr.length; i++) {
//            numeric += 1;
//            _info = cities_arr[i].split(", ");
//            text_data = _info[2].split("!");
//            text_x_pos = Number(text_data[0]);
//            text_y_pos = Number(text_data[1]);
//            text_x_and_y = [text_x_pos, text_y_pos];

//            let city_data = {
//                position: Number(_info[0]),
//                name: _info[1],
//                text_position: text_x_and_y,
//                description: _info[3]
//            }
//            map.set(numeric, city_data);
//        }
//        return map;
//    } else {
//        for (i = 0; i < cities_arr.length; i++) {
//            numeric2 += 1;
//            _info = cities_arr[i].split(", ");
//            text_data = _info[2].split("!");
//            text_x_pos = Number(text_data[0]);
//            text_y_pos = Number(text_data[1]);
//            text_x_and_y = [text_x_pos, text_y_pos];

//            let city_data = {
//                number: numeric2,
//                name: _info[1],
//                text_position: text_x_and_y,
//                description: _info[3]
//            }
//            map.set(Number(_info[0]), city_data);
//        }
//        return map;
//    }
//}

function map_cities(map, cities,one_or_else) {
    if (one_or_else == 1) {
        for (i = 0; i < cities.length; i++) {
            map.set(i, cities[i]);
        }
    }
    else {
        for (i = 0; i < cities.length; i++) {
            map.set(cities[i].position,cities[i])
        }
    }
    return map;
}

let temporary = document.getElementById("temporary");
all_cities = JSON.parse(temporary.text);
temporary.remove();

cities_by_number = new Map();
//cities_by_number = parse_cities2(cities_by_number, cities_info, 1);
cities_by_number = map_cities(cities_by_number, all_cities, 1);
console.log(cities_by_number);

cities_by_pos = new Map();
//cities_by_pos = parse_cities2(cities_by_pos, cities_info, 2);
cities_by_pos = map_cities(cities_by_pos, all_cities, 2);
console.log(cities_by_pos);



// main sсript
// var path = document.getElementById('pipka').getAttribute('d');
svg.innerHTML += Array(count).fill(0).map((e, i) => {
    let len = seg * (i),
        p = track.getPointAtLength(len);
    if (cities_by_pos.has(i)) {
        if (i != 1 && i != 10 && i != 5) {
            pipka_x_pos = 1474 - 2.181 * (i);
        }

        numb += 1;
        let x = p.x;
        let y = p.y;
        if (i == 1) {
            x = 1350;
            y = 280;
        }
        return "<g transform=translate(" + [x, y] + ") class=\"map-area\" data-postid=\"" + cities_by_pos.get(i).postid + "\">" +
            "  <circle data-len=" + len.toFixed(1) + " r=4 id=" + (i) + "></circle>" +
            //"  <rect rx=5 ry=5 x=-20 y=16 width=40 height=19></rect>" +
            "  <text id=" + (i) + " fill=#2D2E2C class=cities x=" + (cities_by_pos.get(i)).text_position[0] + " y=" + (cities_by_pos.get(i)).text_position[1] + ">" + (cities_by_pos.get(i)).name + "</text>" +
            "  <ellipse id=" + (i) + " cx=0 cy=-10 rx=0 ry=5 stroke=none/> " +
            // "  <div id="+(i)+" class=ellipse></div>" +
            "</g>" +
            "<g transform=translate(" + pipka_x_pos + ",705)>" +
            //"<path d="+path+" fill=#E8E1C1 stroke=#2D2E2C stroke-width=2 />" +
            "  <rect class=pipka id=" + (i) + " width=3 height=10 />" +
            "</g>";
    } else return "<g></g>"
}).join('');



// new Toast({
//   title: 'Информация',
//   text: 'Для получения более подробной информации вы можете нажать на овал, появляющийся над текущим городом',
//   theme: 'light',
//   autohide: false,
//   interval: 10000
// });



target = +document.querySelector('circle[id="' + 20 + '"]').getAttribute('data-len');
let circles = document.querySelectorAll('circle');
let a = document.querySelectorAll('ellipse');

setTimeout(render, 0);

function render() {
    let dp = target - pos;
    let day_name = "";
    let direction = "";
    let change = 0; //изменение "времени"
    let first = document.querySelector('circle[id="' + 88 + '"]');
    let second = document.querySelector('circle[id="' + 121 + '"]');

    if (first != undefined && second != undefined) {
    if (pos > +first.getAttribute('data-len') && pos < +second.getAttribute('data-len')) {
        with_the_flow = false;
    } else with_the_flow = true;

    if (with_the_flow === true) {
        direction = "Плывет по течению";
        change = 2;
    } else {
        direction = "Плывет против течения";
        change = 1;
    }
    }

    if ((dp > 1 || dp < -1)) {
        if (id > 0) {
            if (target < pos)
                tt -= change;
            else
                tt += change;
        }

        stands_still = false;
        prev_id = id;

        change_ellipse_radius(id, 0);
    } else {
        direction = "Стоит на месте";
        document.getElementById("hint").innerHTML = direction;

        if (stands_still === false) {
            if (id == 0) {
                id = 4;
            }
            if (id == 0.1) {
                id = 0;
            }
            // id +=1;
            if (id == 4) {
                current_datetime = new Date(1731, 3, 15);
                print_hint(days, direction);
                tt = 0;
            }
            stands_still = true;
            change_ellipse_radius(id, 10);
        } else {
            if (id == 4) {
                current_datetime = new Date(1731, 3, 15);
                print_hint(days, direction);
                tt = 0;
            }
            change_ellipse_radius(id, 10);
        }
    }

    if ((tt % 2 == 1 || tt % 2 == -1) && with_the_flow === true)
        tt = 0;

    if (tt == 10) {
        current_datetime.setDate(current_datetime.getDate() + 1);
        print_hint(days, direction);
        tt = 0;
    }

    if (tt == -10) {
        current_datetime.setDate(current_datetime.getDate() - 1);
        print_hint(days, direction);
        tt = 0;
    }

    pos += Math.abs(dp) < 1 ? 0 : Math.sign(dp);
    let p1 = track.getPointAtLength(pos - 10),
        p2 = track.getPointAtLength(pos + 5),
        a = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    ship.setAttribute("transform", "translate(" + p1.x + "," + p1.y + ")rotate(" + a + ")");
    date_time();
    requestAnimationFrame(render);
}


//scroll (range) sript
let value = $('.scroll').prev().attr('value');
$('.scroll').html(value);
$('.scroll').on('input', function () {
    let i = $('.scroll').val() - 1;
    if (i != 1 && i != 10 && i != 5) {
        let qs = document.querySelector('circle[id="' + ($('.scroll').val() - 1) + '"]');
        if (qs != null) {
            animate(qs);
        }
    }
})


a.forEach(c => c.onclick = e => {
    modal.toggle();
});

document.getElementById("side_river_wrapper").onclick = e => {
    showAlert("Путь до Москвы", '<p>Содержимое окна...</p>')
};


//animation scripts
$('.side_river_wrapper').hover(function () {
    $('.side_river').animate({
        strokeWidth: 6
    }, 150);
},
    function () {
        $('.side_river').animate({
            strokeWidth: 3
        }, 150);
    });

circles.forEach(c => c.onclick = e => {
    let i = c.getAttribute('id');
    if (i != 1 && i != 10 && i != 5) {
        e.preventDefault();
        animate(c);
    } else {
        modal.toggle();
    }
});

function animate(c) {
    // if (typeof c == text) {
    //   c.style.fill = "white";
    // }
    c.style.fill = "#2D2E2C";
    target = +c.dataset.len;
    if (cities_by_number.has(id)) {
        document.querySelector('ellipse[id="' + (cities_by_number.get(id)).position + '"]').setAttribute('rx', 0);
        document.querySelector('rect[id="' + (cities_by_number.get(id)).position + '"]').setAttribute('y', 0);
        document.querySelector('circle[id="' + (cities_by_number.get(id)).position + '"]').style.fill = "#E8E1C1";
        document.querySelector('text[id="' + (cities_by_number.get(id)).position + '"]').style.fontWeight = "normal";
    }
    id = getKey(c.getAttribute('id'));
    let r = document.querySelector('rect[id="' + (cities_by_number.get(id)).position + '"]')
    r.setAttribute('y', -5);
    document.querySelector('text[id="' + (cities_by_number.get(id)).position + '"]').style.fontWeight = "bold";
    document.getElementById('scroll').value = Number(c.getAttribute("id")) + 1;
    if (id == 0) {
        id = 0.1;
    }
}

var timeout;
circles.forEach(c => {
    let i = c.getAttribute('id');
    if (i != 5 && i != 10 && i != 1) {
        c.onmouseover = function (e) {
            timeout = setTimeout(function () {
                c.setAttribute('r', 6)
            }, 10)
        };
        c.onmouseout = function (e) {
            timeout = setTimeout(function () {
                c.setAttribute('r', 4)
            }, 10)
        };
    } else {
        c.style.fill = "#2D2E2C";
        c.setAttribute('r', 3)
    }
});


//refactor sripts
function print_hint(days, direction) {
    if (days % 10 == 1 && days % 100 != 11)
        word_day = " день";
    else if (days % 10 == 2 && days % 100 != 12)
        word_day = " дня";
    else if (days % 10 == 3 && days % 100 != 13)
        word_day = " дня";
    else if (days % 10 == 4 && days % 100 != 14)
        word_day = " дня";
    else
        word_day = " дней";

    // document.getElementById("time").innerHTML = days + word_day;
    document.getElementById("hint").innerHTML = direction;
}

function change_ellipse_radius(id, radius) { //создает или убирает над городом иконку (в зависимости какой ты поставишь радиус кружка [0/10]), при условии, что id города совпадет
    if (cities_by_number.has(id)) {
        document.querySelector('ellipse[id="' + (cities_by_number.get(id)).position + '"]').setAttribute('rx', radius);
    }
}

function getKey(value) {
    return cities_by_pos.get(Number(value)).id//number
}