import React from "react";

const Fields = ({ children, label, htmlFor, error }) => {
    //dynamicaly get id from children
    function getChildrenId(children) {
        const child = React.Children.only(children);
        if (id in child?.props) {
            return child.props.id;
        }
    }

    const id = htmlFor || getChildrenId(children);

    return (
        <div className='form-control mb-1'>
            {label && (
                <label className='auth-label' htmlFor={id}>
                    {label}
                </label>
            )}
            {children}
            {error && (
                <p role='alert' className='text-red-500 text-sm'>
                    {error?.message}
                </p>
            )}
        </div>
    );
};

export default Fields;
