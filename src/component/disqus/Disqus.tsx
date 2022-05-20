import React, { FC } from 'react'
import {DiscussionEmbed} from 'disqus-react'
interface IProps{
    id:any
}
const DisqusAdd:FC<IProps> = ({id}) => {
    return (
        <div  >
        <DiscussionEmbed
        shortname = 'market'
        config={
          {
            url:'http://localhost:3000/project/'+id,
            identifier:id,
            title:id
            

          }
        }
        />
        
        </div>
    )
}

export default DisqusAdd