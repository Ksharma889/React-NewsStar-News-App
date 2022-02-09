import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Loading from './Loading';
import NewsCard from './NewsCard';

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews(); 
  }, [])
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <div className="news container my-3 my-lg-5">
      <div className="row">
        <h1 className="text-center heading pb-3">NewsStar - Top {props.category} Headlines</h1>
      </div>
      <div className="row">
            {loading && <Loading/>}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              let description = (element.description) ? element.description : `Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type`;
              let title = (element.title) ? element.title : 'This is a demo news title. created by NewsStar';
              let image = (element.urlToImage) ? element.urlToImage : `https://media.istockphoto.com/photos/demo-picture-id828156368`;
              let author = (element.author) ? element.author : 'Unknown';
              let published = (element.publishedAt);
              return <div key={element.url} className="col-xxl-3 col-lg-4 col-md-6 col-12 my-2 px-2"><NewsCard title={title} content={description} image={image} url={element.url} author={author} date={published} /></div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 20
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News;