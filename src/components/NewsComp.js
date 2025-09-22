import { Component } from "react";
import NewsItems from "./NewsItems";

class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      page: 1,
      pageSize: 9,
      loader: true,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews()
  }

  getUrl(page=1) {
    if(this.props.query && this.props.query!=="") {
      return `https://newsapi.org/v2/everything?q=${this.props.query}&pageSize=${this.state.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API}`
    } else {
      return `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.state.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API}`
    }
  }

  async fetchNews(page=1) {
    this.setState({
        loader: true
      })

    let url = this.getUrl(page)
    let data = await fetch(url)
    let result = await data.json()
    this.setState({
        content: result.articles,
        page,
        loader: false,
        totalResults: result.totalResults
      })
  }

  async componentDidUpdate(prevProps) {
    if(prevProps.query !== this.props.query || prevProps.category !== this.props.category) {
      this.fetchNews(1)  
    }
  }

  handlePrev = async() => {
    this.fetchNews(this.state.page-1)
  }

  handleNext = async() => {
    this.fetchNews(this.state.page+1)
  }

  render() {
    return (
      <>
        <h2 className="text-center my-4">{this.props.query ? `Results related to ${this.props.query}` : this.props.category!=='general' ? `Results related to ${this.props.category}` :'Top headlines Today'}</h2>
        <div className="row">
          {this.state.loader ? <div className="text-center"><div className="spinner-border my-5" role="status"></div></div> : this.state.content.map((con, i) => (
            <div className="col-md-4" key={i}>
              <NewsItems
                title={con.title}
                desc={con.description}
                Url={con.url}
                imageUrl={con.urlToImage}
                author={con.author}
                date={con.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between mt-5">
          <button onClick={this.handlePrev} disabled={this.state.page <= 1 ? true : false} className="btn btn-dark"> &larr; Prev</button>
          <button onClick={this.handleNext} disabled={this.state.page >= Math.ceil(this.state.totalResults/this.state.pageSize) ? true : false} className="btn btn-dark">Next &rarr; </button>
        </div>
      </>
    );
  }
}

export default NewsComp;
