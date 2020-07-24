import React from 'react'
import {
  Main,
  CardContainer,
  ThumbUpIcon,
  ThumbDownIcon,
  UserContainer,
  TextContainer,
  Comments
} from './style'

function PostsCard(props) {

  return(
    <Main>
      <CardContainer>
        <UserContainer>
          <h4>{props.user}</h4>
        </UserContainer>
        <TextContainer onClick={props.onClickPost}>
          <p>{props.text}</p>
        </TextContainer>
        <section>
          <div>
            <ThumbUpIcon onClick={props.upVote} color='primary' />
            <span>{props.votesCount}</span>
            <ThumbDownIcon onClick={props.downVote} color='primary' />
          </div>
          <Comments onClick={props.onClickPost}>
            <span>comentários:</span>
            <span>{props.commentsCount}</span>
          </Comments>
        </section>
      </CardContainer>
    </Main>
  )
}

export default PostsCard