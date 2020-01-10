import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

//Usando Hooks
const Avatar = () => {
    const { AvatarImage } = useStaticQuery(graphql`
        query {
            AvatarImage : file(relativePath: { eq:"profile-photo.jpeg"}){
                childImageSharp {
                    fixed (width: 60 , height: 60){
                            ...GatsbyImageSharpFixed
                    }
                }
            }
        }`)

    return <S.AvatarHelper fixed={AvatarImage.childImageSharp.fixed} />
}



export default Avatar