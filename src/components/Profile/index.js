import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'
import getThemeColor from "../../utils/getThemeColor"
//Usando Hooks
const Profile = () => {
    const {
        site: {
            siteMetadata: {
                 position, description , title
            },
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata
                {
                description
                author
                position
                title
                }
            }
        }
        
    `)

    return (
        <S.ProfileHelper>
            <S.ProfileLink to="/" cover direction="left"
              bg={getThemeColor()} duration={0.6}>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileHelper>
    )

}



// Usando staticQuery
// const Profile = () => (

//     <StaticQuery
//         query={graphql`
//     query MySiteMetadata {
//         site{
//             siteMetadata{
//                 title,
//                 description
//                 author
//                 position
//             }
//          }
//         }
//     `} render={({ site: { siteMetadata: { author, position, description } } }) => (
//             <div className="Profile-wrapper">
//                 <h1>{author}</h1>
//                 <h2>{position}</h2>
//                 <p>
//                     {description}
//                 </p>
//             </div>
//         )}  ></StaticQuery>





// )

export default Profile