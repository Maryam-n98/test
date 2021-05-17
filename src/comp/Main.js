import React from 'react';
import HonerdBeast1 from './HornedBeasts1';
import honerd from './honerd.json';


class Main extends React.Component{
    render(){
        return(
            <>
             {honerd.map(item=>{
                 return(
                     <HonerdBeast1
                     title={item.title}
                     img-Url={item.image_url}
                     description={item.description}

                     />
                 )
             })
             }
            </>
        )
    }
} 

export default Main ;