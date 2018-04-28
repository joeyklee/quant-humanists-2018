// $(window).on('load', function() {
$(document).ready(function() {


  const d3 = Plotly.d3;
  const WIDTH_IN_PERCENT_OF_PARENT = 100,
        HEIGHT_IN_PERCENT_OF_PARENT = 100;

  // const Header = (function() {

  //   // var $wndwHght, $bnnr, $loader;

  //   const init = function() {
  //     loadElements();
  //   };

  //   var loadElements = function() {
  //     // $bnnr = $('#banner');
  //     // $loader = $('.loader');
  //     console.log("hello")
  //   };


  //   return {
  //     init: init
  //   }


  // })();

  const About = (function() {

    

    const init = function() {
      buildChart();
    };

    var buildChart = function() {

      let gd3 = d3.select('#slides-per-week')
      let gd = gd3.node();

      let data = {
        "slidesPerWeek": {
          "1": 78,
          "2": 74,
          "3": 76,
          "4": 98,
          "5": 65,
          "6": 48,
          "7": 29,
          "8": 11,
          "9": 0,
          "10": 61,
          "11": 30,
          "12": 0
        }
      }

      let layout = {
        // title: 'Scroll and Zoom',
        showlegend: false,
        plot_bgcolor: 'rgba(255,255,255,0)',
        paper_bgcolor: 'rgba(255,255,255,0)',
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 4
        },
        xaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4
        },
        yaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4
        }
      };

      let trace1 = {
        x: Object.keys(data.slidesPerWeek),
        y: Object.values(data.slidesPerWeek),
        type: 'lines+markers',
        marker: {
          color: 'rgb(255,255,255)',
          size: 8
        },
        line: {
          color: 'rgb(255,255,255)',
          width: 4
        }
      };

      Plotly.plot(gd, [trace1], layout, { displayModeBar: false });

      d3.select(window).on('resize.about', function () { 
        Plotly.Plots.resize(gd)
      });
    }

    return {
      init: init
    }

  })();


  const Interests = (function() {


    const init = function() {
      buildChart();
    };

    var buildChart = function() {

      let gd3 = d3.select('#departments-represented')
      let gd = gd3.node();


      let data = {
        "departmentsRepresented": {
          "ITP": 6,
          "Gallatin": 2,
          "IMA": 1,
          "Game Design": 1
        }
      }

      let layout = {
        // title: 'Scroll and Zoom',
        showlegend: false,
        plot_bgcolor: 'rgba(255,255,255,0)',
        paper_bgcolor: 'rgba(255,255,255,0)',
        margin: {
          l: 20,
          r: 10,
          b: 30,
          t: 20,
          pad: 4
        },
        xaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4,
          labelcolor: '#FFFFFF',
          color: '#FFFFFF'
        },
        yaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4,
          labelcolor: '#FFFFFF',
          color: '#FFFFFF'
        }
      };

      let trace1 = {
        x: Object.keys(data.departmentsRepresented),
        y: Object.values(data.departmentsRepresented),
        type: 'bar',
        marker: {
          color: 'rgb(255,255,255)'
        }
      };

      Plotly.plot(gd, [trace1], layout, { displayModeBar: false });
      d3.select(window).on('resize.interests', function () { 
        Plotly.Plots.resize(gd)
      });
    }

    return {
      init: init
    }

  })();


  const Locations = (function() {

    const init = function() {
      buildChart();
    };

    var buildChart = function() {

      // do the stuffs!
      console.log("build map here")
    }

    return {
      init: init
    }

  })();


  const Materials = (function() {

    var gd3= d3.select("#resource-chart")
    var gd = gd3.node();

    const init = function() {
      buildChart();
    };

    var buildChart = function() {

      let data = {
        "contentBreakdown": {
          "1": {
            "practice": 2,
            "readings": 9,
            "additional": 13
          },
          "2": {
            "practice": 9,
            "readings": 16,
            "additional": 13
          },
          "3": {
            "practice": 2,
            "readings": 12,
            "additional": 8
          },
          "4": {
            "practice": 5,
            "readings": 12,
            "additional": 20
          },
          "5": {
            "practice": 9,
            "readings": 6,
            "additional": 15
          },
          "6": {
            "practice": 3,
            "readings": 8,
            "additional": 7
          },
          "7": {
            "practice": 4,
            "readings": 5,
            "additional": 3
          },
          "8": {
            "practice": 2,
            "readings": 4,
            "additional": 6
          },
          "9": {
            "practice": 0,
            "readings": 0,
            "additional": 3
          },
          "10": {
            "practice": 9,
            "readings": 20,
            "additional": 6
          },
          "11": {
            "practice": 0,
            "readings": 7,
            "additional": 5
          },
          "12": {
            "practice": 0,
            "readings": 0,
            "additional": 0
          }
        }
      }

      let layout = {
        // title: 'Scroll and Zoom',
        showlegend: false,
        plot_bgcolor: 'rgba(255,255,255,0)',
        paper_bgcolor: 'rgba(255,255,255,0)',
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 4
        },
        xaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4
        },
        yaxis: {
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 4
        }
      };

      var x1 = Object.keys(data.contentBreakdown)
      var y1 = Object.values(data.contentBreakdown).map(week => (week.practice))
      var y2 = Object.values(data.contentBreakdown).map(week => (week.readings))
      var y3 = Object.values(data.contentBreakdown).map(week => (week.additional))
      // console.log(y1)

      let trace1 = {
        x: x1,
        y: y1,
        name:"practice",
        type: 'lines+markers',
        marker: {
          color: '#D80B8C',
          size: 8
        },
        line: {
          color: '#D80B8C',
          width: 4
        }
      };
      let trace2 = {
        x: x1,
        y: y2,
        name:"readings",
        type: 'lines+markers',
        marker: {
          color: '#570bd8',
          size: 8
        },
        line: {
          color: '#570bd8',
          width: 4
        }
      };

      let trace3 = {
        x: x1,
        y: y3,
        name:"additional",
        type: 'lines+markers',
        marker: {
          color: 'black',
          size: 8
        },
        line: {
          color: 'black',
          width: 4
        }
      };



      Plotly.plot(gd, [trace1, trace2, trace3], layout, { displayModeBar: false });

      d3.select(window).on('resize.materials', function () { 
        Plotly.Plots.resize(gd)
      });
    }

    return {
      init: init
    }

  })();


  const ProjectSwiper = (function() {

    let $galleryTop, $galleryThumbs;

    const init = function() {
      makeSwiper();
    }

    function makeSwiper() {
      $galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      $galleryTop.controller.control = $galleryThumbs;
      $galleryThumbs.controller.control = $galleryTop;
    }

    return {
      init: init
    }

  })();



  // call the functions
  About.init();
  Interests.init();
  Locations.init();
  Materials.init();
  ProjectSwiper.init();
});