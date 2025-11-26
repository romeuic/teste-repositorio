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
}

const romeu = new Heroi("Romeu", "BeberÁgua");
romeu.pontos = [45, 13, 56, 18, 79, 26];
console.log(romeu.getInfo());
romeu.calcularMediaPontos();
