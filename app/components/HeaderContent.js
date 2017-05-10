var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;


module.HomeHeader = React.createClass({
    render: function() {
        return (
            <div className="inner">
              { this.props.content }
              <video autoplay="autoplay" muted="muted" volume="0" poster="http://static.qifeiye.com/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC8zMTQwYjc2NjJhMzgxZGExNjM2MGQyNzQ1OTM4ZDdmNHByZXZpZXdfaW1hZ2UucG5n.png"
                loop="loop" style="width: 100%; height: 100%;object-fit:cover;object-position:center center" className="section-background-video">
              </video>
              { /*<div data-time="3" data-imagebgs="" class="background-media  " backgroundsize="true" style="">

                                                </div>*/ }
            </div>
        )
    }
});
/*

<div data-time="3" data-imagebgs="" class="background-media  " backgroundsize="true" style="">
                            <video autoplay="autoplay" muted="muted" volume="0" poster="http://static.qifeiye.com/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC8zMTQwYjc2NjJhMzgxZGExNjM2MGQyNzQ1OTM4ZDdmNHByZXZpZXdfaW1hZ2UucG5n.png" loop="loop" style="width: 100%; height: 100%;object-fit:cover;object-position:center center" class="section-background-video">
                
                                    <source type="video/webm" src="http://static.qifeiye.com/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC8zMTQwYjc2NjJhMzgxZGExNjM2MGQyNzQ1OTM4ZDdmNC53ZWJt.webm">
                                                    <source type="video/mp4" src="http://static.qifeiye.com/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC8zMTQwYjc2NjJhMzgxZGExNjM2MGQyNzQ1OTM4ZDdmNC5tcDQ_p_p100_p_3D.mp4">
                                
                </video>
                    </div>*/