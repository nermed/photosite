// import React,{Component} from 'react'
// import ReactDOM from 'react-dom'
//
// const couleur = {
//     dark : {
//     background : '#000',
//     color : '#FFF',
//     border : 'none'
//     },
//     blue: {
//         color: '#98BBD1'
//     }
// }
//
// class LikeButton extends React.Component{
//     state = {
//             likes: this.props.likes || 0,
//             isLiked: this.props.isLiked || false
//         };
//     handleClick = () => {
//         const isLiked = this.state.isLiked;
//         const likes = this.state.likes + (isLiked ? -1 : 1);
//
//         this.setState({likes, isLiked : !isLiked });
//     }
//     render(){
//         return (
//             <button style = {couleur.dark} onClick = {this.handleClick}>
//             {this.state.likes}&nbsp;
//             <i style={couleur.blue} className = {this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>
//             &nbsp;
//             {this.state.isLiked ? "Je n'aime plus" : "J'aime "}
//             </button>
//         )
//         /*return React.createElement(
//             "button",
//             {onClick:() => this.handleClick()},
//             this.state.likes,
//             " ",
//             React.createElement('i', {className: this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}),
//             " ",
//             this.state.isLiked ? "Je n'aime plus" : "J'aime !",
//         );*/
//     }
// }
//
// const button = document.querySelectorAll('span.button').forEach(function(span){
//     ReactDOM.render(React.createElement(LikeButton), span);
// });
//
