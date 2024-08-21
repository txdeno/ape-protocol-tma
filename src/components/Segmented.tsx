import { twMerge } from "tailwind-merge";

type Tab = {
    name: string;
    label: string;
};

interface Props {
    tabs: Tab[];
    selected: string;
    onChange: (name: string) => void;
}

const Segmented = (props: Props) => {
    const { selected, tabs, onChange } = props;
    return (
        <div className='rounded-lg bg-dark-alt flex flex-row'>
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    type='button'
                    className={twMerge(
                        "p-1.5 flex flex-1 text-center items-center justify-center rounded-lg font-bold text-sm",
                        selected === tab.name ? "bg-white text-black" : ""
                    )}
                    onClick={() => onChange(tab.name)}
                >
                    <span>{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

export default Segmented;
