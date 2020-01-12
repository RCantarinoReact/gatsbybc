import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import * as S from './styled'
import PropTypes from "prop-types"


const Comments = ({ url, title }) => {

    const completeURL = `https://blogGatsby.com${url}`

    return (

        <S.CommentsWrapper>
            <S.CommentsTitle>
                Comentarios
            </S.CommentsTitle>
            <ReactDisqusComments
                shortname="renato"
                identifier={completeURL}
                title={title}
                url={completeURL}
            />

        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


export default Comments