/** You can submit this test using either Handlebars or JSX as a templating engine. This is the file to work in if you would like to use JSX */

import React from "react";
import { QUOTS_SYMBOLS_i18n } from "../../../src/en.i18n";

export default function SecuritiesQuotes(props) {
  return (
    <div
      className="securities-quotes"
      role="region"
      aria-label="Financial Times"
    >
      <h1 className="o-typography-heading-level-1">{props.pageTitle}</h1>
      {props.data && Array.isArray(props.data.items) ? (
        <ul className="securities-quotes-symbols-list o-typography-list">
          {props.data.items.map((item, index) => (
            <li className="" key={index}>
              {QUOTS_SYMBOLS_i18n[item.symbolInput]}{" "}
              <span
                className={`securities-quotes-${
                  item.quote.change1DayPercent > 0 ? "up" : "down"
                }`}
              >
                {item.quote.change1DayPercent.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <>Empty State</>
          <>{props.error && <>{props.error}</>}</>
        </>
      )}
    </div>
  );
}
