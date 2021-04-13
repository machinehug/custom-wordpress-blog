import PropTypes from "prop-types";

export default function Heading({ cssClass, size, title }) {

    let HeadingTag = "h" + size;

    return <HeadingTag className={cssClass}>{title}</HeadingTag>
};

Heading.propTypes = {
    cssClass: PropTypes.string,
    size: PropTypes.number,
    title: PropTypes.string.isRequired,
};

Heading.defaultProps = {
    cssClass: "",
    size: 1,
};