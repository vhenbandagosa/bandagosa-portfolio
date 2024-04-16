import { motion } from "framer-motion";
import { navigations } from "../../../constants";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {navigations.map(({ id, title, url }) => (
        <motion.a
          href={url}
          key={id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
