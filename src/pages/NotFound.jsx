import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="not-found" style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.title}>Lost in Space?</h2>
            <p style={styles.text}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" style={styles.button}>
                Take Me Home
            </Link>
        </main>
    );
}

// Simple inline styles (optional - you can use CSS)
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: `calc(100vh - 310.15px)`,
        textAlign: 'center',
        padding: '20px'
    },
    errorCode: { fontSize: '6rem', margin: 0 },
    title: { fontSize: '2rem', marginBottom: '1rem', color: '--dark-color' },
    text: { marginBottom: '2rem', opacity: 0.8 },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
    }
};
