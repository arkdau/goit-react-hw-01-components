import clsx from "clsx";
import css from "./Statistics.module.css";
import { PropTypes } from "prop-types";
// import { element, PropTypes } from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {(title !== undefined) && (title.length > 0) && (
      <h2 className={css.title}>{title}</h2>
    )}

    <ul className={css.statList}>
      {stats.map((item, index) => {
        let color = [css.color0, css.color1, css.color2, css.color3];
        return (
          <li key={item.id} className={clsx(css.item, color[index])}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

export default Statistics;
