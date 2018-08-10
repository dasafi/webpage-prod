import React, {Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';

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
                <div className = "Media-cover" onClick={this.handleClick}>
                    <img 
                     src={this.props.image}
                     alt=""
                     width={260}
                     height={160}
                    />
                    
                    <h3 className = "Media-title"> {this.props.title}</h3>
                    <p className = "Media-author">{this.props.author}</p>
                </div>           
                     
            </div>
            
             
        )
    }
}
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,  
    type: PropTypes.oneOf(['video', 'audio']),  
}

export default Media;