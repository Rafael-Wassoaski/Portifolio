import React from 'react';
import '../App.css'

export default class Portifolio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nome: 'Rafael Eduardo Meirelles Wassoaski',
            email: 'meireles200@hotmail.com',
            formacao: 'Formado em Análise e desenvolvimento de sistemas',
            instituição: 'Instituto Federal de Santa Catarina (IFS)',
            idade: 22,
            skills :['Node.JS', 'Java', 'Android', 'Django', 'Python'],
            github: 'https://github.com/Rafael-Wassoaski',
            linkedin: 'https://www.linkedin.com/in/rafael-eduardo-meirelles-wassoaski-0b328015b/',
            photo: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.0-1/p200x200/78417962_1441689879327706_7615735146255220736_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=qu-ohnxQ_g0AX-GRXRJ&_nc_ht=scontent-gru1-2.xx&tp=6&oh=dc553aa6c7b3b1a2124846f0e392a9a2&oe=6027025B'


        }
    }
    renderSkills(){
            let skills = []
            this.state.skills.forEach(element => {
                skills.push(<li>{element}</li>)
            });
            return skills;
        }
    render(){
        
        return(
            <div className = 'main'>
            <div className = 'center-box'>
                <div className = 'fixed-box'>
                    <img className = 'photo border-dashed'
                        src = {this.state.photo}
                        alt = {this.state.nome}/>
                </div>
               
                <div className = 'content border-dashed center-text'>
                    <h1>{this.state.nome}</h1>
                    <h4>Email: {this.state.email}</h4>
                    <h5>Idade: {this.state.idade}</h5>
                    <h5>Skills</h5>
                    <ul>
                        {this.renderSkills()}
                    </ul>


                </div>

            </div>

            </div>

        )
    }
}


