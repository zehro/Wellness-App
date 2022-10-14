import React, { Component, Fragment } from "react";

// Static imports
import './PageAnimFragment.scss';


/* 
 * Function to render an .anim-page Object with a unique
 * identifier.
 */
function AnimPage(props) {
    // Building a string of classes
    const classList = "anim-page num-" + props.num;

    return (
        <div className={classList} />
    )
}

/* 
 * Constant that defines how many pages are generated for
 * the flip animation when interacting with cover links.
 * 
 * Can support up to 6 children. More can be supported by
 * adding additional classes nested in .anim-page located
 * in /src/components/PageAnimFragment.scss file.
 */
const numPages = 6;

/* 
 * Fragment component to return.
 */
class PageAnimFragment extends Component {
    render() {
        return (
            <Fragment>
                {/*
                    Map iterator for AnimPage render function, passing in
                    the index into the props param 'num'.
                */}
                {[...Array(numPages)].map((x, i) => <AnimPage key={i} num={i} />)}
                <div className="cover" />
            </Fragment>
        );
    }
}

export default PageAnimFragment;