import React from "react";

const words = [
  {
    en: "isolation",
    tw: "(n) 隔離",
    sentence_en: "His older sister had been taken off to the isolation ward.",
    sentence_tw: "他的姐姐被送到隔離病房。",
    hint: "",
  },
  {
    en: "prep",
    tw: "(v.) 上預備學校；作好準備. (n)預習；預備班（或學校）；準備工作",
    sentence_en: "She said she was prepping for her new project.",
    sentence_tw: "她說她正在為她的新專案做準備。",
    hint: "Prepare is the original word and prep is the short form",
  },
  {
    en: "cognitive",
    tw: "(adj.)認知的；認識的",
    sentence_en: "Some of her cognitive functions have been impaired.",
    sentence_tw: "她的部分認知能力受到了損害。",
    hint: "",
  },
  {
    en: "stash",
    tw: "(v) 存放，藏起來 (n)藏匿處；藏匿物",
    sentence_en: "to stash money under the floorboards",
    sentence_tw: "把錢藏在地板下面",
    hint: "",
  },
  {
    en: "approach",
    tw: "(v)(n) vt.接近，靠近；近乎，即將達到",
    sentence_en: "How you approach this relationship will determine the success or failure of your project.",
    sentence_tw: "如何處理這種關係將決定項目的成功或失敗。",
    hint: "",
  },
  {
    en: "mobilize",
    tw: "(v) 動員；調動；使流通；使鬆動",
    sentence_en: "Be prepared to discuss how you have used your communication and decision-making skills to mobilize others.",
    sentence_tw: "準備討論您如何使用溝通和決策技巧動員他人。",
    hint: "",
  },
]


class Vocabulary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: words[Math.floor(Math.random() * words.length)],
      newArr: []
    }
  }
  goNext = () => {
    // this.setState = ({
    //   word: words[Math.floor(Math.random() * words.length)],
    // })
    window.location.reload();
  }
  componentDidMount() {
    document.title = "My Vocuablary | Ken Huang";
  }
  render() {
    return (
      <section id="vocabulary">
        <div className="container">
          <div className="card">
            <div className="card-body" style={{ textAlign: "center" }}>
              <p>{words.length}</p>
              <h3>{this.state.word.en}</h3>
              <p>{this.state.word.tw}</p>
              <p>{this.state.word.sentence_en} {this.state.word.sentence_tw}</p>
              {this.state.word.hint ? <p>{this.state.word.hint}</p> : ""}
              <div className="btn btn-primary" onClick={this.goNext}>Next</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Vocabulary;