import React from "react";

export const Comments = () => {
  return (
    <div className="container bootdey">
      <div className="col-md-12 bootstrap snippets">
        <div className="panel">
          <div className="panel-body">
            <textarea
              className="form-control"
              rows="2"
              placeholder="What are you thinking?"
            ></textarea>
            <div className="mar-top clearfix">
              <button
                className="btn btn-sm btn-primary pull-right"
                type="submit"
              >
                <i className="fa fa-pencil fa-fw"></i> Share
              </button>
              <a
                style={{ color: "white" }}
                className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                href="#"
              ></a>
              <a
                style={{ color: "white" }}
                className="btn btn-trans btn-icon fa fa-camera add-tooltip"
                href="#"
              ></a>
              <a
                style={{ color: "white" }}
                className="btn btn-trans btn-icon fa fa-file add-tooltip"
                href="#"
              ></a>
            </div>
          </div>
        </div>
        <div
          className="panel"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "1px solid white",
          }}
        >
          <div className="panel-body">
            {/* <!-- Newsfeed Content -->
    <!--===================================================--> */}
            <div className="media-block d-flex">
              <a className="media-left" href="#">
                <div className="user-image">
                  <img
                    className="rounded-circle"
                    src="https://gravatar.com/avatar/de84db04b0c7b43efdc840391ffe56ff"
                  />
                </div>
              </a>
              <div className="media-body ms-3">
                <div className="mar-btm d-flex">
                  <a
                    href="#"
                    className="btn-link text-semibold media-heading box-inline"
                  >
                    Lisa D.
                  </a>
                  <p
                    style={{ marginLeft: "20px" }}
                    className="text-muted text-sm"
                  >
                    {" 11 min ago"}
                  </p>
                </div>
                <p style={{ color: "white" }}>
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat.
                </p>
                <div className="pad-ver">
                  <div className="btn-group">
                    <a
                      className="btn btn-sm btn-default btn-hover-success"
                      href="#"
                    >
                      <i
                        style={{ color: "white" }}
                        className="fa fa-thumbs-up"
                      ></i>
                    </a>
                    <a
                      style={{ color: "white" }}
                      className="btn btn-sm btn-default btn-hover-danger"
                      href="#"
                    >
                      <i
                        style={{ color: "white" }}
                        className="fa fa-thumbs-down"
                      ></i>
                    </a>
                  </div>
                  <a
                    style={{ color: "white" }}
                    className="btn btn-sm btn-default btn-hover-primary"
                    href="#"
                  >
                    Reply
                  </a>
                </div>
                <hr />
              </div>
            </div>
            {/* <!--===================================================-->
    <!-- End Newsfeed Content -->


    <!-- Newsfeed Content -->
    <!--===================================================--> */}
            {/* <!--===================================================--> */}
            {/* <!-- End Newsfeed Content --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
