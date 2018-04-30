window.onload = (function(){

  const d3 = Plotly.d3;
  const WIDTH_IN_PERCENT_OF_PARENT = 100,
        HEIGHT_IN_PERCENT_OF_PARENT = 100;

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
          l: 30,
          r: 20,
          b: 30,
          t: 5,
          pad: 0
        },
        xaxis: {
          autotick:true,
          showgrid: false,
          range: [1, 12],
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true,
          autotick: false,
        },
        yaxis: {
          showticklabels: true,
          autotick:true,
          showgrid: false,
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: false,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true
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
          pad: 0
        },
        xaxis: {
           autotick:true,
          showgrid: false,
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true,
          autotick: false,
        },
        yaxis: {
          showticklabels: true,
          autotick:true,
          showgrid: false,
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: false,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true
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

    var map;

    const init = function() {
      buildChart();
    };

    var buildChart = function() {

      function initMap(){
          // initialize map container
          map = L.map('location-image').setView([40.742431, -73.975334], 11);

          // get the stamen toner-lite tiles
          var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> — Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
              subdomains: 'abcd',
              minZoom: 0,
              maxZoom: 20,
              ext: 'png'
          });

          // add the tiles to the map
          Stamen_Toner.addTo(map); 

          //disable scroll wheel zoom 
          map.scrollWheelZoom.disable();
           map.dragging.disable();
           map.removeControl(map.zoomControl);
      }
      // call initMap()
      initMap();

      L.circle([40.729359, -73.993831], 400).addTo(map);
      L.circle([40.763143, -73.967646], 400).addTo(map);
              
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
        color:'white',
        margin: {
          l: 26,
          r: 10,
          b: 26,
          t: 5,
          pad: 0
        },
        xaxis: {
         autotick:true,
          showgrid: false,
          range: [1, 12],
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: true,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true,
          autotick: false,
        },
        yaxis: {
          showticklabels: true,
          autotick:true,
          showgrid: false,
          ticks:"inside",
          rangemode: 'tozero',
          color:"#ffffff",
          zeroline: false,
          zerolinecolor: '#FFFFFF',
          zerolinewidth: 1,
          showline: true
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
})();