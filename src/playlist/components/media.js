import React, {Component} from 'react';
import './media.css';

class Media extends Component {
    render(){
        const styles = {
            container:{
                color: '#44546b', 
                cursor:'pointer',
                width: 245
            }
        }
        return (
            <div className="Media">
                <div className = "Media-cover">
                    <img 
                     src="./images/covers/logo_Prodaing.jpg"
                     alt=""
                     width={260}
                     height={160}
                    />
                    <h3 className = "Media-title"> Bienvenido a Prodaing Ltda</h3>
                    <p className = "Media-author">David Safi</p>
                </div>           
                     
            </div>
            
             
        )
    }
}

export default Media;