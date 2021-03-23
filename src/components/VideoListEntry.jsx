import App from './App.js';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    var eachVideo = this;
    var fun = function() {
      this.props.changeState(this.props.video);
    };
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div onClick={() => this.props.changeState(this.props.video)} className="video-list-entry-title">{eachVideo.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{eachVideo.props.video.snippet.description}</div>
        </div>
      </div>);
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
