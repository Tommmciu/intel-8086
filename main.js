document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("run").addEventListener("click", function () {

    const firstRegister = document.getElementById("firstRegister").value,
      secondRegister = document.getElementById("secondRegister").value;
    switch (document.getElementById("comand").value) {
      case "MOV":
        mov(`span${firstRegister}`, `span${secondRegister}`);
        break;
      case "SWAP":
        swap(`span${firstRegister}`, `span${secondRegister}`);
        break;
      case "ADD":
        add(`${firstRegister}`, `${secondRegister}`);
        break;
      case "SUB":
        sub(`${firstRegister}`, `${secondRegister}`);
    }
  });
  const registers = ["ax", "bx", "cx", "dx"];
  document
    .getElementById("firstRegister")
    .addEventListener("change", function () {
      const firstRegister = document.getElementById("firstRegister").value;
      registers.forEach((register) => {
        document.getElementById(`s${register}`).style.display = "block";
      }),
        (document.getElementById(`s${firstRegister}`).style.display = "none");
    }),
    document
      .getElementById("secondRegister")
      .addEventListener("change", function () {
        const secondRegister = document.getElementById("secondRegister").value;
        registers.forEach((register) => {
          document.getElementById(`f${register}`).style.display = "block";
        }),
          (document.getElementById(`f${secondRegister}`).style.display = "none");
      }),
    registers.forEach((register) => {
      document.getElementById(register).addEventListener("blur", function () {
        (document.getElementById(register).parentElement.children[1].style.display =
          "none"),
          (document.getElementById(
            register
          ).parentElement.children[2].innerHTML = `#${Number(
            this.value
          ).toString(16)}`),
          (document.getElementById(register).parentElement.children[2].style.display =
            "inline-block");
      });
    }),
    registers.forEach((register) => {
      document.getElementById(register).addEventListener("input", function () {
        console.log(this.value),
          console.log(isNaN(this.value)),
          isNaN(this.value) &&
          (this.value = this.value.slice(0, this.value.length - 1));
      });
    }),
    registers.forEach((register) => {
      document
        .getElementById(`span${register}`)
        .addEventListener("click", function () {
          (document.getElementById(register).parentElement.children[1].style.display =
            "inline-block"),
            document.getElementById(register).parentElement.children[1].focus(),
            (document.getElementById(
              register
            ).parentElement.children[2].style.display = "none");
        });
    });
});


const set = (e, value) => {
  e.innerHTML = value;
}


const mov = (s, dest) => {
  set(document.getElementById(dest), document.getElementById(s).innerText);
}

const swap = (x, y) => {
  const t = document.getElementById(x).innerText;
  const d = document.getElementById(y).innerText;

  set(document.getElementById(x), d);
  set(document.getElementById(y), t);
}

const add = (x, y) => {
  const l =
    Number(document.getElementById(x).value) +
    Number(document.getElementById(y).value);
  document.getElementById(x).innerText = `#${Number(l).toString(
    16
  )}`;
}
const sub = (x, y) => {
  const l =
    Number(document.getElementById(x).value) -
    Number(document.getElementById(y).value);
  document.getElementById(x).innerText = `#${Number(l).toString(
    16
  )}`;
}
