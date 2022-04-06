var Header = React.createClass({
    render: function () {
        window.addEventListener("load", () => {
            let put_req, delete_req;

            // post request for creation
            const post_req = apiHandler("post", "http://localhost:3000/api/new/");

            // put request for updation
            setTimeout(() => {
                put_req = apiHandler("put", `http://localhost:3000/api/${post_req}`);
            }, 2000);

            // delete request for deletion
            setTimeout(() => {
                delete_req = apiHandler("delete", `http://localhost:3000/api/${put_req}`);
            }, 4000);
        });

        const apiHandler = (type, url) => {
            let _id = null;

            const req = new XMLHttpRequest();

            req.open(type, url, false);

            req.onreadystatechange = () => {
                if (req.status === 200) {
                    const obj = JSON.parse(req.response);
                    _id = obj._id;
                } else {
                    // Handle Errors
                    console.log("error");
                }
            };

            req.send();

            return _id;
        };

        return (
            <div className={"navbar navbar-inverse navbar-default"} role="navigation">
                <div className={"container navbar-container"}>
                    <div className={"navbar-header"}>
                        <button
                            type="button"
                            className={"navbar-toggle"}
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
                            <span className={"sr-only"}>Toggle navigation</span>
                            <span className={"icon-bar"}></span>
                            <span className={"icon-bar"}></span>
                            <span className={"icon-bar"}></span>
                        </button>
                        <div className={"navbar-brand"}>
                            <a href="/">
                                <img
                                    className={"full-logo"}
                                    src="images/pusher-logo.png"
                                    width="111"
                                    height="37"
                                />
                            </a>
                            <a href="/">
                                <img
                                    className={"small-logo"}
                                    src="images/pusher-logo-p.png"
                                    height="37"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav" id="nav-ul">
                            {/* <button onClick={apiHandler}>Button</button> */}
                            <li>
                                <a className="signup-link" href="http://pusher.com/signup">
                                    Create a Free Account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    },
});
