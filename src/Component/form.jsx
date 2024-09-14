import { useState } from 'react';
import { useAuth } from '../Contexte';

export default function Form() {
    const { setIsAuthenticated, isAuthenticated } = useAuth();
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        

       const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const { email, password } = data; // desturation 

        // Validation
        if (!(validateEmail(email)&& validatePassword(password))) {
            setMessage('mot de passe invalide ou gmail ivalide');
            return;
        }

        // Si la validation passe, appeler la fonction login
        setIsAuthenticated(true); // Appelle login si les validations sont correctes
        setMessage('Validation réussie !'); // Affiche le message de succès
        event.target.reset(); // Réinitialise le formulaire */
        
    };

    return (
        <>
            <h1 className="text-center text-2xl font-bold mb-6">Sign into your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mx-10 space-y-4">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="border border-gray-500 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'} // Change le type selon l'état
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        required
                        className="border border-gray-500 p-2 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Inverse l'état
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
                    >
                        {showPassword ? 'Masquer' : 'Voir'} {/* Change le texte selon l'état */}
                    </button>
                </div>
                <button 
                    type="submit" 
                    className="bg-black text-white p-2 rounded transition duration-200 ease-in-out hover:bg-gray-800"
                >
                    Sign in
                </button>
                <p className="text-center text-red-500">{message}</p>
                <p className="text-center">
                    Don't have an account?{' '}
                    <span className="text-sky-600 cursor-pointer hover:underline">Create it</span>
                </p>
            </form>
        </>
    );
}