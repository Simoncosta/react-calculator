interface ButtonProps {
    text: string;
    operator?: boolean;
    action?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            hover:cursor-pointer
            hover:shadow-sm
            text-center 
            p-5 
            rounded-xl 
            shadow-md 
            text-xl 
            font-semibold 
            text-[#595B5A]
            ${props.operator ? 'text-white bg-calculator-600' : 'text-[#595B5A]'}
        `}
            onClick={props.action}
        >
            {/* if ternario */}
            {props.text}
        </button>
    );
}