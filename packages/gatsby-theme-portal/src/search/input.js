import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';

import Styles from './styles';
const useStyles = makeStyles(Styles);

export default connectSearchBox(({ refine, ...rest }) => {
  const classes = useStyles();
  return (
    <form className={classes.searchForm}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="What are you looking for?"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        collapse="true"
        focus="false"
        currentrefinement=""
        issearchstalled="true"
      />
      <button className={classes.searchButton} type="submit">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 768 768"
        >
          <title></title>
          <g id="icomoon-ignore"></g>
          <path
            fill="#000"
            d="M304.5 448.5q60 0 102-42t42-102-42-102-102-42-102 42-42 102 42 102 102 42zM496.5 448.5l159 159-48 48-159-159v-25.5l-9-9q-57 49.5-135 49.5-87 0-147.75-60t-60.75-147 60.75-147.75 147.75-60.75 147 60.75 60 147.75q0 31.5-15 71.25t-34.5 63.75l9 9h25.5z"
          ></path>
        </svg>
      </button>
    </form>
  );
});
