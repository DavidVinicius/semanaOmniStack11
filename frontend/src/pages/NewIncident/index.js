import React from 'react';

import './style.css'

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
         <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para entrar um heróio para resolver isso.</p>
                    
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Título"/>
                    <textarea placeholder="Descrição"/>                    
                    <input placeholder="Valor"/>
                                        

                    <button class="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}