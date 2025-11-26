class Personagem {
  constructor(nome, poder) {
    this.nome = nome;
    this.poder = poder;
  }
  getInfo() {
    return `${this.nome} - ${this.poder}`;
  }
}

class Heroi extends Personagem {
  constructor(nome, poder) {
    super(nome, poder);
    this.pontos = [];
  }
  calcularMediaPontos() {
    const pontosOrdenados = this.pontos.sort();
    const pontosParaMedia = pontosOrdenados.slice(1, -1);
    const totalPontos = pontosParaMedia.reduce((acc, ponto) => {
      return acc + ponto;
    }, 0);
    return totalPontos / pontosParaMedia.length;
  }
  classificar() {
    const media = this.calcularMediaPontos();
    if (media > 66) {
      return "lendário";
    }
    if (media > 33) {
      return "intermediário";
    }
    return "iniciante";
  }
  getInfo() {
    const totalPontos = this.pontos.reduce((acc, ponto) => {
      return acc + ponto;
    }, 0);
    return `${this.nome} - ${this.poder} (${totalPontos})`;
  }
}

class Missao {
  constructor(titulo) {
    this.titulo = titulo;
    this.herois = [];
  }
  adicionarHeroi(heroi) {
    this.herois.push(heroi);
  }
  forcaDaEquipe() {
    return this.herois.reduce((acc, heroi) => {
      return acc + heroi.calcularMediaPontos();
    }, 0);
  }
  getResumo() {
    this.herois.forEach((heroi) => {
      console.log(heroi.getInfo());
    });
    console.log(`Força total: ${this.forcaDaEquipe()}`);
  }
}

const romeu = new Heroi("Romeu", "BeberÁgua");
romeu.pontos = [45, 13, 56, 18, 79, 26];
const julieta = new Heroi("Julieta", "SuperVisão");
julieta.pontos = [45, 56, 33, 79, 12, 26];

const missao = new Missao("Missao Teste");
missao.adicionarHeroi(romeu);
missao.adicionarHeroi(julieta);
missao.getResumo();
