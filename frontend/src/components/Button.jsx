// src/components/Button.js
const Button = ({ text, onClick }) => (
    <button
        className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg"
        onClick={onClick}
    >
        {text}
    </button>
);

export default Button;
