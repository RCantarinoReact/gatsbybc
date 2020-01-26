import React from 'react'
import * as S from "./styled"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"

const PostItem = ({ slug, category, date, timeToRead, title, description, background }) => (
    <S.PostItemLink to={slug} cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}>
        <S.PostItemWrapper>
            <S.PostItemTag background={background}>   {category}
            </S.PostItemTag>

            <S.PostItemInfo>
                <S.PostItemDate>{date} -> {timeToRead} min de leitura </S.PostItemDate>
                <S.PostItemTitle>
                    {title}
                </S.PostItemTitle>
                <S.PostItemDescription>
                    {description}
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)


PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string
}



export default PostItem