import React, { FC } from "react"

const FourColorsTilesArticle: FC = () => {
  return (
    <article>
      <h2>사색타일</h2>
      <h3>만화 보기</h3>
      <ul>
        <li>
          <a href={getComicLink(11)}>모바일</a>
        </li>
        <li>
          <a href={getComicLink(11, false)}>PC</a>
        </li>
      </ul>
      <h3>게임 하기</h3>
    </article>
  )
}

export default FourColorsTilesArticle

const getComicLink = (itemNumber: number, isMobile = true) => {
  const titleId = 734597

  return `https://${
    isMobile ? "m." : ""
  }comic.naver.com/bestChallenge/detail.nhn?titleId=${titleId}&no=${itemNumber}`
}
