import "./Main.sass"
import img_1 from "../img/recipe1.jpg"
import img_2 from "../img/recipe2.jpg"
import img_3 from "../img/recipe3.jpg"

function Main() {
  return (
    <main id="index">
      <div className="c-mainVisual"></div>
      <section id="p-siteTop">
        <h1>Recipe Diary</h1>
        <p>
          日々の料理背シピをまとめています。<br />
          和食や洋食、中華、お菓子までいろいろな<br className="--pc" />
          料理レシピをアップしていますので、<br />
          みなさんの献立にお役に立ててくださいね！
        </p>
      </section>
      <div className="c-photos">
        <div className="__img"><img alt="_" src={img_1} /></div>
        <div className="__img"><img alt="_" src={img_2} /></div>
        <div className="__img"><img alt="_" src={img_3} /></div>
      </div>
      <div className="c-more">
        <button>レシピ一覧を見る</button>
      </div>
    </main>
  )
}
export  default Main;
