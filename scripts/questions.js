const questions = [
  {
    question: "1) Observe o trecho de código abaixo:\nint INDICE = 13, SOMA = 0, K = 0;\nEnquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }\nImprimir(SOMA);\nAo final do processamento, qual será o valor da variável SOMA?",
    answer: () => {
      let INDICE = 13, SOMA = 0, K = 0;
      while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
      }
      return `O valor final da variável SOMA será ${SOMA}.`;
    }
  },
  {
    question: "2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.",
    answer: () => {
      const fibonacci = (num) => {
        let a = 0, b = 1, temp;
        while (b <= num) {
          if (b === num) return true;
          temp = b;
          b = a + b;
          a = temp;
        }
        return false;
      };

      const num = 21;
      const belongs = fibonacci(num);
      return `O número ${num} ${belongs ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`;
    }
  },
  {
    question: "3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:\n• O menor valor de faturamento ocorrido em um dia do mês;\n• O maior valor de faturamento ocorrido em um dia do mês;\n• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.",
    answer: () => {
      return processJSONData();
    }
  },
  {
    question: "4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:\n• SP – R$67.836,43\n• RJ – R$36.678,66\n• MG – R$29.229,88\n• ES – R$27.165,48\n• Outros – R$19.849,53\n\nEscreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.",
    answer: () => {
      const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
      };

      const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
      let resultado = "";

      for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / total) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%\n`;
      }

      return resultado;
    }
  },
  {
    question: "5) Escreva um programa que inverta os caracteres de um string.",
    answer: () => {
      const str = "Hello, World!";
      const inverted = str.split('').reverse().join('');
      return `String original: "${str}"\nString invertida: "${inverted}"`;
    }
  }
];