import Alert from 'react-bootstrap/Alert';
import PropTypes from "prop-types";

export default function FeedbackMessage({ title, type, message }) {

    // Bootstrap types you can choose from: primary, secondary, success, danger, warning, info, light, dark

    return (
        <Alert variant={type}>
            <Alert.Heading>{title}</Alert.Heading>
            <p>{message}</p>
        </Alert>
    );
};

FeedbackMessage.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

FeedbackMessage.defaultProps = {
    title: "",
};