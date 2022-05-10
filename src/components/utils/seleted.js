/* eslint-disable jsx-a11y/anchor-is-valid */
export const ShowActive = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={
        active
          ? "remvove_dotted_review nav-item text-black"
          : "text-black dotted_review "
      }
      role="presentation"
    >
      <a
        className={active ? "nav-link active  " : "text-black  "}
        onClick={() => setSelected(id)}
        id="desc-tab"
      >
        {title}
      </a>
    </li>
  );
};
