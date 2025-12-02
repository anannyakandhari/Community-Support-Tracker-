function validateEventSignup(submitEvent) {
    submitEvent.preventDefault();
    clearErrors();

    const tempData = {};
    const formValid = true;

    const eventNameInputNode = document.querySelector("#field-event-name");
    if(!hasThreeChars(eventNameInputNode)) {
        appendError(eventNameInputNode, "Event name must have at least three characters.");
        formValid = false;
    } else {
        tempData["eventName"] = eventNameInputNode.value;
    }

    const repNameInputNode = document.querySelector("#field-rep-name");
    if(!hasThreeChars(repNameInputNode)) {
        appendError(repNameInputNode, "Representative name must have at least three characters.");
        formValid = false;
    } else {
        tempData["repName"] = eventNameInputNode.value;
    }

    const repEmailInputNode = document.querySelector("#field-rep-email");
    if(!isValidEmail(repEmailInputNode)) {
        appendError(repEmailInputNode, "Must be a valid email.");
        formValid = false;
    } else {
        tempData["repEmail"] = repEmailInputNode.value;
    }

}

function hasThreeChars(inputNode) {
    return inputNode.value.length > 3;
}

function isValidEmail(inputNode) {
    const fieldValue = inputNode.value;
    // regex from https://regex101.com/r/mX1xW0/1
    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    return emailRegex.test(fieldValue);
}

function appendError(inputNode, message) {
    const newErrorNode = document.createElement("p");
    newErrorNode.classList.add("error");
    newErrorNode.textContent = message;

    inputNode.insertAdjacentHTML("afterend", newErrorNode);
}

function clearErrors() {
    const errorNodes = document.querySelectorAll("error");

    errorNodes.forEach(n => {
        n.remove();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const eventFormNode = document.querySelector("#form-event-signup");

    eventFormNode.addEventListener("submit", validateEventSignup)
});
