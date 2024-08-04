import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "focus:outline-none font-bold rounded-[15px] px-[30px] py-[16px]";

  const variantStyles = {
    primary: "text-white bg-blue-500",
    secondary: "text-primary bg-transparent border-[1px] border-[#ebedef]",
    danger: "text-white bg-red-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    { "opacity-50 cursor-not-allowed": disabled },
    className
  );

  const buttonVariants = {
    initial: { y: "0%" },
    hovered: {
      y: "-100%",
      transition: { duration: 0.5, ease: [0.8, 0, 0.3, 1] },
    },
  };

  // Define background color variants for hover
  const backgroundHoverStyles = {
    primary: "hover:bg-primary",
    secondary: "hover:bg-primary hover:text-tertiary",
    danger: "hover:bg-red-600",
  };

  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      type={type}
      onClick={onClick}
      className={`${classes} ${backgroundHoverStyles[variant]} perspective-1000 transform  transition-colors duration-[100ms]`}
      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      disabled={disabled}
      {...props}
    >
      <motion.span
        className="relative block overflow-hidden whitespace-nowrap"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          className="transform transition-transform duration-[100ms]"
          variants={buttonVariants}
        >
          {children}
        </motion.div>
        <motion.div
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          className="absolute inset-0 transform transition-transform duration-[100ms]"
          variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
        >
          {children}
        </motion.div>
      </motion.span>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
