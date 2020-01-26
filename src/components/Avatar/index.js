import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

//Usando Hooks
const Avatar = () => {
    const { AvatarImage } = useStaticQuery(graphql`
        query {
            AvatarImage : file(relativePath: { eq:"profile-photo.jpeg"}){
                childImageSharp {
                    fluid (maxWidth: 60){
                            ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }`)

    return <S.AvatarHelper fluid={AvatarImage.childImageSharp.fluid} />
}



export default Avatar