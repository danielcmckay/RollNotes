import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { db } from "../firebase";
import Share from './Share';

import "./Quote.css";

const Quote = quoteProps => {
  const [state, setState] = useState({
    quote: "",
    name: ""
  });

  const getQuoteHandler = () => {
    var docRef = db.collection("quotes");
    docRef.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      const rand = Math.floor(Math.random() * data.length);
      setState({
        ...state,
        quote: data[rand].quote,
        name: data[rand].name
      });
    });
  };

  useEffect(() => {
    getQuoteHandler();
  }, []);

  const quote = (
    <div>
      <p className="MainQuote">{state.quote}</p>
      <span className="ByQuote">{state.name} </span>{" "}
    </div>
  );

  const [show, set] = useState(true);
  const transitions = useTransition(state.quote, null, {
    from: { position: "fixed", top: "120px", right: "10%", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 3000,
    config: config.molasses
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className="Quote" key={key} style={props}>
              {quote}
              <br/>
              <Share name={state.name} quote={state.quote} />
            </animated.div>
          )
      )}
      <span>
        <button className="QuoteBtn" onClick={getQuoteHandler}>
          Get a new quote
        </button>
        <button
          className="FavoritesBtn"
          onClick={() => quoteProps.favorite(state)}
        >
          <i className="fa fa-heart"></i>
        </button>
      </span>
    </>
  );
};

export default Quote;
