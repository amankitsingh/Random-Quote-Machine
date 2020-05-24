import React from "react";
import quotes from "./listquotes";
import $ from "jquery";

// import of all styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { fas, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  generateQuote(event, quote, author) {
    const name = event.target.name.split(" ");
    var colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
      "#40e0d0"
    ];

    $("#quote-text").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
    });
    $("#quote-author").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
    });
    var color = Math.floor(Math.random() * colors.length);
    $("body").css(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      1000
    );
    $(".button").css(
      {
        backgroundColor: colors[color]
      },
      1000
    );
    setTimeout(() => {
      author !== ""
        ? this.setState({
            [name[0]]: quote,
            [name[1]]: author
          })
        : this.setState({
            [name[0]]: quote,
            [name[1]]: "unknown"
          });
    }, 500);
  }
  handleNewQuote(event) {
    const listlength = quotes.length;
    const randNum = Math.floor(Math.random() * listlength);

    let quote = quotes[randNum].quote;
    let author = quotes[randNum].author;
    this.generateQuote(event, quote, author);
  }
  componentDidMount() {
    this.setState({
      quote: quotes[71].quote,
      author: quotes[71].author
    });
  }
  render() {
    return (
      <div>
        <div id="quote-box">
          <div id="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} style={fas} />
            <span id="text"> {this.state.quote} </span>
          </div>
          <div id="quote-author">
            <span id="author"> - {this.state.author}</span>
          </div>
          <div className="buttons">
            <a
              className="button"
              href="twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon id="twitter-icon" icon={faTwitter} />
            </a>
            <a
              className="button"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
              target="_blank"
              id="tumblr-quote"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon id="tumblr-icon" icon={faTumblr} />
            </a>
            <input
              type="button"
              className="button"
              id="new-quote"
              value="New quote"
              name="quote author"
              onClick={this.handleNewQuote}
            />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Quotes;
