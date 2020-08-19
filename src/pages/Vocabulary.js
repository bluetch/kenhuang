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
  {
    en: "hypothetical",
    tw: "(adj.) 假設的；假定的",
    sentence_en: "Nobody likes to have wars, but we must make preparations for a hypothetical warfare.",
    sentence_tw: "沒有人喜歡戰爭，但我們一定要為假設性的戰爭作出準備。",
    hint: "",
  },
  {
    en: "reputation",
    tw: "(n) 名聲",
    sentence_en: "My reputation has never been worse, so you must like me for me.",
    sentence_tw: "我的聲譽從未這麼差過，所以你一定是真的喜歡我。",
    hint: "",
  },
  {
    en: "sculpture",
    tw: "(n) 雕塑品",
    sentence_en: "",
    sentence_tw: "",
    hint: "",
  },
  {
    en: "exhibition",
    tw: "(n) 展覽",
    sentence_en: "Prominent sculptures will be presented in the exhibition next week.",
    sentence_tw: "傑出的雕塑作品將在下週的展覽中展出。",
    hint: "",
  },
  {
    en: "costume",
    tw: "(n) (特殊)服裝",
    sentence_en: "Halloween costumes",
    sentence_tw: "萬聖節服裝",
    hint: "",
  },
  {
    en: "renowned",
    tw: "(adj) 有名的",
    sentence_en: "The region is renowned for its outstanding natural beauty.",
    sentence_tw: "該地區以其傑出的自然美景而聞名。",
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
          <h1>Localize Vocuablary <span style={{fontSize: "12px"}}>(developing)</span></h1>
          Language:
          <input type="checkbox" name="" id="english" />
          <label for="english">English</label>
          <span style={{ width: "12px", display: "inline-block" }}></span>
          <input type="checkbox" name="" id="taiwan" />
          <label for="taiwan">Taiwan Chinese</label>
          <div className="card">
            <div className="card-body" style={{ textAlign: "center" }}>
              <input type="checkbox" name="" id="ux" />
              <label for="ux">UX</label>
              <span style={{ width: "12px", display: "inline-block" }}></span>
              <input type="checkbox" name="" id="dev" />
              <label for="dev">Developer</label>
              {/* <p>{words.length}</p> */}
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