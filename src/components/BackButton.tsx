import { h } from 'preact';
import { FunctionalComponent } from 'preact';

interface BackButtonProps {
    style?: h.JSX.CSSProperties;
}

const BackButton: FunctionalComponent<BackButtonProps> = ({ style }) => {
    const goBack = () => window.history.back();

    return (
        <button onClick={goBack} style={style}>
            &#8592; Back
        </button>
    );
};

export default BackButton;
