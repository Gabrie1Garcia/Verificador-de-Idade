function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os daddos e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - fano.value;
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Uma pessoa do sexo <strong>Masculino</strong>";
      if (idade >= 1 && idade < 5) {
        //bebe
        img.setAttribute("src", "assets/babyBoy.png");
      } else if (idade >= 5 && idade < 10) {
        //criança
        img.setAttribute("src", "assets/boyTen.png");
      } else if (idade >= 10 && idade < 15) {
        //jovem criança
        img.setAttribute("src", "assets/boyFifteen.png");
      } else if (idade >= 15 && idade < 21) {
        //adoslecente
        img.setAttribute("src", "assets/manTwenty.png");
      } else if (idade >= 21 && idade < 35) {
        //jovem adulto
        img.setAttribute("src", "assets/manThirty.png");
      } else if (idade >= 35 && idade < 59) {
        // adulto
        img.setAttribute("src", "assets/manFifty.png");
      } else if (idade >= 59 && idade < 75) {
        //jovem
        img.setAttribute("src", "assets/manSixty.png");
      } else {
        //idoso
        img.setAttribute("src", "assets/manSeventy.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Uma pessoa do sexo <strong>Feminino</strong>";
      if (idade >= 1 && idade < 5) {
        //bebe
        img.setAttribute("src", "assets/babyGirl.png");
      } else if (idade >= 5 && idade < 10) {
        //criança
        img.setAttribute("src", "assets/girlTen.png");
      } else if (idade >= 10 && idade < 15) {
        //jovem criança
        img.setAttribute("src", "assets/girlFifteen.png");
      } else if (idade >= 15 && idade < 21) {
        //adoslecente
        img.setAttribute("src", "assets/womanTwenty.png");
      } else if (idade >= 21 && idade < 35) {
        //jovem adulto
        img.setAttribute("src", "assets/womanThirty.png");
      } else if (idade >= 35 && idade < 59) {
        // adulto
        img.setAttribute("src", "assets/womanfifty.png");
      } else if (idade >= 59 && idade < 75) {
        //jovem
        img.setAttribute("src", "assets/womanSixty.png");
      } else {
        //idoso
        img.setAttribute("src", "assets/womanSeventy.png");
      }
    }
    res.innerHTML = `${gênero} com <strong>${idade}</strong> anos.`;
    res.appendChild(img);
  }
}
