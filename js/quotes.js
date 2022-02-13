const quotes = [
  {
    quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
    author: "존 우든",
  },
  {
    quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "월트 디즈니",
  },
  {
    quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "크리스 그로서",
  },
  {
    quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    author: "토마스 제퍼슨",
  },
  {
    quote: "모든 진보는 익숙한 영역이 아닌 곳에서 이뤄진다.",
    author: "마이클 존 보박",
  },
  {
    quote: "패배의 공포가 승리의 짜릿함보다 커지게 하지 마라.",
    author: "로버트 키요사키",
  },
  {
    quote:
      "동기 부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.",
    author: "짐 륜",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
