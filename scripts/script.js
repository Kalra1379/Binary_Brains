const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const quit_btn = document.querySelector(".quit");
const restart_btn = document.querySelector(".restart");
const next_que = document.querySelector(".next_que");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}