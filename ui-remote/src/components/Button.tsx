
const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="bg-red-100 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
            {label}
        </button>
    );
}

export default Button;