import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import SimpleTabs from './misc/SimpleTabs';
import Content from './misc/Content';
import axios from "axios";


import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';




class App extends Component {
  state = {
    apiKey: '5de0a82615c24c71b5efc5ca3dea3a93',
    searchTerm: '',
    activeTab: 'search',
    activePage: 1,
    news: [],
    basicUrl: 'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=5de0a82615c24c71b5efc5ca3dea3a93'
  }


  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('App');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
      this.loadMoreNews()
    }
  };

  loadMoreNews = async (event) => {
    this.setState({activePage: this.state.activePage + 1})
    this.getNewsBasic()
  }

  onSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onChangeTab = async (event, activeTab) => {
    await this.setState({activeTab: activeTab,
                         activePage: 1})
    this.getNewsBasic()
  }

  prepareRequest = () => {
    const country = `https://newsapi.org/v2/top-headlines?country=${this.state.activeTab}`
    const search = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}`
    let url;
    if(this.state.activeTab === 'search'){
      url = search;
    }else{
      url = country;
    }
    url = `${url}&sortBy=publishedAt&pageSize=10&page=${this.state.activePage}&apiKey=${this.state.apiKey}`
    return url
  }

  getNewsBasic = async (event) => {
    if(event){
      event.preventDefault()
    }

    if(this.state.activePage == 1){
      await this.setState({ news: [] })
    }

    const url = this.prepareRequest()
    const news = this.state.news || []
    try {
      let res = await axios.get(url);
      let json = res.data;
      if (json && json.status === "ok") {
        console.log(json.articles)
        this.setState({ news: [...news, ...json.articles] })
      }
    } catch (er) {
      console.log(`er: ${er}`)
    } finally {
      this.setState({ loading: false })
    }
  }


  render() {
    return (
      <div id="App" className="App" style={{ margin: "auto", maxWidth: "900px"}}>

        <form noValidate autoComplete="off" onSubmit={this.getNewsBasic} style={{ margin: "1rem"}} position="fixed">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <InputBase placeholder="Search Term" onChange={this.onSearchTermChange} style={{ height: "100%", width: "100%"}}/>
            </Grid>
            <Grid item xs={4}>
              <Button aria-label="Search" variant="contained" color="primary" type="submit" style={{ height: "100%", width: "100%"}}>Search</Button>
            </Grid>
          </Grid>
        </form>

        <div border={1} style={{ border: "2px solid #3f51b5"}} >
          <SimpleTabs onChangeTab={this.onChangeTab} activeTab={this.state.activeTab} ></SimpleTabs>
          <Content activeTab={this.state.activeTab} news={this.state.news}></Content>
        </div>
      </div>
    );
  }
}


export default App;
