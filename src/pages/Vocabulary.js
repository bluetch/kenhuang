import React from "react";

const words = [
  {
    en: "isolation",
    tw: "隔離",
    sentence_en: "His older sister had been taken off to the isolation ward.",
    sentence_tw: "他的姐姐被送到隔離病房。",
    hint: "",
  },
  {
    en: "prep",
    tw: "vt.使（病人）準備接受手術；使準備好. vi.上預備學校；作好準備. n.預習；預備班（或學校）；準備工作",
    sentence_en: "She said she was prepping for her new movie.",
    sentence_tw: "她說她正在為她的新電影做準備。",
    hint: "Prepare is the original word and prep is the short form",
  },
  {
    en: "cognitive",
    tw: "adj.認知的；認識的",
    sentence_en: "Some of her cognitive functions have been impaired.",
    sentence_tw: "她的部分認知能力受到了損害。",
    hint: "",
  },
  {
    en: "stash",
    tw: "vt.【俚】存放，貯藏 vi.【俚】存放，藏起來 n.藏匿處；藏匿物",
    sentence_en: "to stash money under the floorboards",
    sentence_tw: "把錢藏在地板下面",
    hint: "",
  }
]
var word = words[Math.floor(Math.random() * words.length)];

const Vocabulary = () => (
  <section id="vocabulary">
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3>{word.en}</h3>
          <p>{word.tw}</p>
          <p>{word.sentence_en} {word.sentence_tw}</p>
          {word.hint ? <p>{word.hint}</p> : ""}
        </div>
      </div>
    </div>
  </section>
);

export default Vocabulary;