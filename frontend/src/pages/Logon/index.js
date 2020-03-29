import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("sessions", {id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('name', response.data.name);

        } catch (error) {
            
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
               <img src={logoImg} alt="Be the Hero"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Logo"/>

        </div>
    );
}