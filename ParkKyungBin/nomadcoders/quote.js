const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "-키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "-로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "-사무엘존슨",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "-파울로 코엘료",
    },
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "-이드리스 샤흐",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
        author: "-L론허바드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "-앙드레 말로",
    },
    {
        quote: "네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다.",
        author: "-간디",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "-이소룡",
    },
    {
        quote: "삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견디라 . 즐거운 날은 오고야 말리니 마음은 미래를 바라느니 현재는 한없이 우울한것 모든건 하염없이 사라지나가 버리고 그리움이 되리니",
        author: "-푸쉬킨",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;