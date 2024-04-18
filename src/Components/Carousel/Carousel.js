import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                    1
                                </div>
                                <div class="col">
                                    2
                                </div>
                                <div class="col">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                    One of three columns
                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                    One of three columns
                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Carousel