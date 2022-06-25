import React, { useState } from "react";

export default function About() {
    const [mystyle,setmystyle] = useState({
        backgroundColor: "#333",
        color: "white",
    })

    const [btnText,setBtnText] = useState("dark mode");




    let toggleStyle = ()=>{
        if (mystyle.color === "white" ) {
            setmystyle({
                backgroundColor: "#fff",
                color: "black",
            });

            setBtnText('dark mode');

        }else{
            setmystyle({
                backgroundColor: "#333",
                color: "white",
            });
            
            setBtnText('light mode');
        }
   }


    return (
        <div className="container" style={mystyle}>
            <h2>About us</h2>
            <div class="accordion" id="accordionExample" style={mystyle}>
                <div class="card" style={mystyle}>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={mystyle}
                            >
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body" style={mystyle}>
                            Some placeholder content for the first accordion panel. This panel
                            is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                <div class="card" style={mystyle}>
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                style={mystyle}
                            >
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body" style={mystyle}>
                            Some placeholder content for the second accordion panel. This
                            panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div class="card" style={mystyle}>
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                style={mystyle}
                            >
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body" style={mystyle}>
                            And lastly, the placeholder content for the third and final
                            accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <button type="button" onClick={toggleStyle} className="btn btn-primary my-2">
                    {btnText}
                </button>
            </div>
        </div>
    );
}
