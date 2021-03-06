import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);

    this.state = {
      currentVideo: exampleVideoData[1]
    };
  }

  changeState(video) {
    console.log('passed from click', video);
    this.setState({currentVideo: video});
  }

  render() {
    var video = this.state.currentVideo;
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList changeState = {this.changeState} videos= {exampleVideoData}/></div>
          </div>
        </div>
      </div> );
  }


}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
