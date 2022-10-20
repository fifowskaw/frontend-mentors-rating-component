let checkedNumber = 1;

const init = () => {
    document.querySelectorAll(".rating button").forEach((button) => {
        button.addEventListener("click", setActive);
    });
};

const setActive = (e) => {
    const checkedOther = document.querySelector(".checked");
    checkedOther.classList.remove("checked");

    const checkedItem = e.target;
    checkedItem.classList.add("checked");

    saveCheckedNumber(e);
};

const saveCheckedNumber = (e) => {
    //console.log(checkedNumber);
    const checkedItem = e.target;
    checkedNumber = checkedItem.value;

    console.log(checkedNumber);
};

const submit = () => {
    hideChoose();
    showThankYou();
};
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", submit);

const hideChoose = () => {
    const choose = document.querySelector(".choose");
    choose.classList.add("hidden");
};

const showThankYou = () => {
    const whatSelected = document.querySelector(".what-selected");
    whatSelected.innerText = `You selected ${checkedNumber} out of 5`;

    const thankYou = document.querySelector(".thank-you");
    thankYou.classList.remove("hidden");
};

init();
