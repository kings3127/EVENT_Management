import React, { useState } from 'react';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Registered Successful`);
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url(https://th.bing.com/th/id/OIP.z92rebhXrK4kGgPFu8PehAHaEJ?rs=1&pid=ImgDetMain)',
            backgroundSize: 'cover',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white background for the form
        },
        label: {
            marginBottom: '10px',
        },
        input: {
            padding: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        submit: {
            padding: '5px 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    return (

        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} required />
                </label>
                <input type="submit" value="Register" style={styles.submit} />
            </form>
        </div>
    );
}

export default RegisterForm;
