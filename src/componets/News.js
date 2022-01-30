import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import NewsCard from './NewsCard';

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 20
  }
  
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e30a1f4471342deb1c3bc88646597b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    this.setState({page: --this.state.page});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    this.setState({page: ++this.state.page});
    this.updateNews();
  }

  render() {
    return (
        <div className="news container my-3 my-lg-5">
          <div className="row">
            <h1 className="text-center pb-1">NewsStar - Top ${this.props.category} Headlines</h1>
          </div>
          <div className="row">
              {this.state.loading && <Loading/>}
          </div>
          <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                let description = (element.description)?element.description : `Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type`;
                let title = (element.title)?element.title : 'This is a demo news title. created by NewsStar';
                let image = (element.urlToImage)?element.urlToImage : `https://media.istockphoto.com/photos/demo-picture-id828156368`;
                let author = (element.author)?element.author:'Unknown';
                let published = (element.publishedAt);
                return <div key={element.url} className="col-xxl-3 col-lg-4 col-md-6 col-12 my-2 px-2"><NewsCard title={title} content={description} image={image} url={element.url} author={author} date={published} /></div>
              })}
          </div>
          <div className="row pagination">
            <div className="btns d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className={`btn prev btn-dark`} onClick={this.handlePrevClick}>&laquo; Prev</button>
              <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className={`btn next btn-dark`} onClick={this.handleNextClick}>Next &raquo;</button> 
            </div>
          </div>
        </div>
    );
  }
}

export default News;
